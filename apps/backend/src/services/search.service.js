import prisma from "../config/prisma.config.js";
import { redis } from "../config/redis.config.js";
import { Prisma } from "../generated/prisma/client.ts";

// Search document
// @param query - query string
// @param page - page number
// @param limit - number of results per page
// @param userId - user id
// @param sort - sort order (newest or oldest)
// @returns - success response
export const searchDocument = async (query, page = 1, limit = 10, userId = null, sort = "newest", from = null, to = null, fileType = "all") => {
    try{
        const skip = (page - 1)*limit;

        /**
         * Key format: search:<query>:page:<page>:limit:<limit>:sort:<sort>:fileType:<fileType>:from:<from>:to:<to>
        */
        const cacheKey = `search:${query.trim().toLowerCase()}:page:${page}:limit:${limit}:sort:${sort}:fileType:${fileType}:from:${from || "none"}:to:${to || "none"}`;

        // Checking cache — wrapped in try-catch so search still works if Redis is unavailable
        try {
            const cachedData = await redis.get(cacheKey);
            if(cachedData){
                console.log("✅ Cache hit ✅");
                // Upstash redis client auto-parses JSON, so cachedData may already be an object
                if (typeof cachedData === "string") {
                    return JSON.parse(cachedData);
                }
                return cachedData;
            }
        } catch (redisErr) {
            console.warn("⚠ Redis cache read failed, querying database directly:", redisErr.message);
        }
        console.log("❌ Cache miss ❌");

        // Build ORDER BY direction safely
        const orderDirection = sort === "newest" ? Prisma.sql`DESC` : Prisma.sql`ASC`;

        // Build dynamic SQL filter conditions for fileType and date range
        let extraSql = Prisma.sql``;

        if (fileType === "pdf") {
            extraSql = Prisma.sql`${extraSql} AND (LOWER("fileType") LIKE '%pdf%' OR LOWER("fileName") LIKE '%.pdf')`;
        } else if (fileType === "docx") {
            extraSql = Prisma.sql`${extraSql} AND (LOWER("fileType") LIKE '%docx%' OR LOWER("fileName") LIKE '%.docx')`;
        } else if (fileType === "txt") {
            extraSql = Prisma.sql`${extraSql} AND (LOWER("fileType") LIKE '%text%' OR LOWER("fileType") LIKE '%plain%' OR LOWER("fileName") LIKE '%.txt')`;
        } else if (fileType === "web") {
            extraSql = Prisma.sql`${extraSql} AND ("url" IS NOT NULL AND "fileType" IS NULL)`;
        }

        if (from) {
            extraSql = Prisma.sql`${extraSql} AND "createdAt" >= ${new Date(from)}`;
        }
        if (to) {
            extraSql = Prisma.sql`${extraSql} AND "createdAt" <= ${new Date(to)}`;
        }

        let documents = [];
        let total = 0;

        try {
            documents = await prisma.$queryRaw`
            SELECT  
                id,
                title,
                description,
                url,
                "fileType",
                "fileName",
                "fileUrl",
                ts_headline(
                    'english',
                    COALESCE(content, ''),
                    plainto_tsquery('english', ${query}),
                    'StartSel=<mark>, StopSel=</mark>, MaxWords=20, MinWords=3'
                ) AS snippet,
                "createdAt",
                "updatedAt",
                ts_rank(
                    to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(content, '')),
                    plainto_tsquery('english', ${query})
                ) AS rank
            FROM 
                "Document"
            WHERE
                to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(content, ''))
                @@
                plainto_tsquery('english', ${query})
                ${extraSql}
            ORDER BY
                rank ${orderDirection}
            LIMIT ${limit}
            OFFSET ${skip};
            `;

            const countResult = await prisma.$queryRaw`
            SELECT
                COUNT(*) AS total
            FROM
                "Document"
            WHERE
                to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(content, ''))
                @@
                plainto_tsquery('english', ${query})
                ${extraSql};
            `;
            total = Number(countResult[0]?.total || 0);
        } catch (rawErr) {
            console.warn("⚠ Raw full-text search query failed, using fallback:", rawErr.message);
        }

        // Fallback to substring matching if full-text search yielded no results
        if (!documents || documents.length === 0) {
            console.log("ℹ Full-text search returned 0 results. Using substring fallback search...");
            const whereConditions = [
                {
                    OR: [
                        { title: { contains: query, mode: "insensitive" } },
                        { description: { contains: query, mode: "insensitive" } },
                        { content: { contains: query, mode: "insensitive" } },
                    ],
                }
            ];

            if (fileType === "pdf") {
                whereConditions.push({ OR: [{ fileType: { contains: "pdf", mode: "insensitive" } }, { fileName: { endsWith: ".pdf", mode: "insensitive" } }] });
            } else if (fileType === "docx") {
                whereConditions.push({ OR: [{ fileType: { contains: "docx", mode: "insensitive" } }, { fileName: { endsWith: ".docx", mode: "insensitive" } }] });
            } else if (fileType === "txt") {
                whereConditions.push({ OR: [{ fileType: { contains: "plain", mode: "insensitive" } }, { fileType: { contains: "text", mode: "insensitive" } }, { fileName: { endsWith: ".txt", mode: "insensitive" } }] });
            } else if (fileType === "web") {
                whereConditions.push({ url: { not: null }, fileType: null });
            }

            if (from) {
                whereConditions.push({ createdAt: { gte: new Date(from) } });
            }
            if (to) {
                whereConditions.push({ createdAt: { lte: new Date(to) } });
            }

            const whereClause = { AND: whereConditions };

            const [fallbackDocs, fallbackTotal] = await Promise.all([
                prisma.document.findMany({
                    where: whereClause,
                    skip,
                    take: limit,
                    orderBy: { createdAt: sort === "newest" ? "desc" : "asc" },
                }),
                prisma.document.count({ where: whereClause }),
            ]);

            total = fallbackTotal;
            documents = fallbackDocs.map((doc) => ({
                id: doc.id,
                title: doc.title,
                description: doc.description,
                url: doc.url,
                fileType: doc.fileType,
                fileName: doc.fileName,
                fileUrl: doc.fileUrl,
                snippet: doc.description || doc.content?.substring(0, 150) || 'No snippet available',
                createdAt: doc.createdAt,
                updatedAt: doc.updatedAt,
                rank: 1,
            }));
        }

        // Returning documents and metadata
        const result = {
            documents,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit) || 1,
        };

        // Cache the result for 1 day (86400 seconds) — non-blocking if Redis fails
        try {
            await redis.set(cacheKey, JSON.stringify(result), { ex: 86400 });
        } catch (redisErr) {
            console.warn("⚠ Redis cache write failed:", redisErr.message);
        }

        return result;
    } catch (error) {
        throw error;
    }
}

// Search suggestion
// @param query - query string
// @param limit - number of results per page
// @param userId - user id
// @returns - success response
export const searchSuggestion = async (query, limit = 10, userId = null) => {
    try {
        // Finding documents where title contains query (case-insensitive)
        return await prisma.document.findMany({
            where: {
                title: {
                    contains : query,
                    mode : "insensitive"
                }
            },

            // Selecting id, title, and url
            select: {
                id: true,
                title: true,
                url: true,
            },

            take: limit,
            orderBy : {
                title : "asc"
            }
        });
    }
    catch(error){
        throw error;
    }
}
