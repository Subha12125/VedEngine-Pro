import prisma from "../config/prisma.config.js";

export const getSearchAnalytics = async() => {
    try{
        // getting total searches
        const totalSearches = await prisma.searchLog.count();

        // Getting Unique Search
        const uniqueSearches = await prisma.$queryRaw`
        SELECT COUNT(DISTINCT query)::int as count
        FROM "SearchLog";
        `;

        // Getting Top Search
        const topSearches = await prisma.$queryRaw`
        SELECT query, count(*)::int as count
        FROM "SearchLog"
        GROUP BY query
        ORDER BY count DESC
        LIMIT 10;
        `;

        // Getting Todays Search
        const todaysSearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= CURRENT_DATE
        `;

        // Getting Yesterday Search (yesterday only, not including today)
        const yesterdaySearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= CURRENT_DATE - INTERVAL '1 day'
          AND "createdAt" < CURRENT_DATE;
        `;

        // Getting This Month Search
        const thisMonthSearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= DATE_TRUNC('month', CURRENT_DATE);
        `;

        // Getting Last Month Search
        const lastMonthSearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
          AND "createdAt" < DATE_TRUNC('month', CURRENT_DATE);
        `;

        // Getting This Year Search
        const thisYearSearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= DATE_TRUNC('year', CURRENT_DATE);
        `;

        // Getting Last Year Search
        const lastYearSearches = await prisma.$queryRaw`
        SELECT COUNT(*)::int as count
        FROM "SearchLog" 
        WHERE "createdAt" >= DATE_TRUNC('year', CURRENT_DATE - INTERVAL '1 year')
          AND "createdAt" < DATE_TRUNC('year', CURRENT_DATE);
        `;

        // TODO: Uncomment when users table is created
        // const totalUsers = await prisma.$queryRaw`
        // SELECT COUNT(*)::int as count
        // FROM "users";
        // `;

        // const activeUsers = await prisma.$queryRaw`
        // SELECT COUNT(*)::int as count
        // FROM "users" 
        // WHERE "updatedAt" >= CURRENT_DATE - INTERVAL '1 day';
        // `;

        // const inactiveUsers = await prisma.$queryRaw`
        // SELECT COUNT(*)::int as count
        // FROM "users" 
        // WHERE "updatedAt" < CURRENT_DATE - INTERVAL '1 day';
        // `;

        // Getting Total Documents
        const totalDocuments = await prisma.document.count();

        // TODO: Uncomment when isActive field is added to Document model
        // const activeDocuments = await prisma.document.count({
        //     where: {
        //         isActive: true,
        //     },
        // });

        // const inactiveDocuments = await prisma.document.count({
        //     where: {
        //         isActive: false,
        //     },
        // });

        return {
            totalSearches,
            uniqueSearches: uniqueSearches[0].count,
            topSearches,
            todaysSearches: todaysSearches[0].count,
            yesterdaySearches: yesterdaySearches[0].count,
            thisMonthSearches: thisMonthSearches[0].count,
            lastMonthSearches: lastMonthSearches[0].count,
            thisYearSearches: thisYearSearches[0].count,
            lastYearSearches: lastYearSearches[0].count,
            // totalUsers: totalUsers[0].count,
            // activeUsers: activeUsers[0].count,
            // inactiveUsers: inactiveUsers[0].count,
            totalDocuments,
            // activeDocuments,
            // inactiveDocuments
        };
    }
    catch(error){
        console.error("Error in getSearchAnalytics", error);
        throw error;
    }
}