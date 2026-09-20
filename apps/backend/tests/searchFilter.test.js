import { describe, it, expect, vi, beforeAll } from "vitest";

beforeAll(() => {
    process.env.UPSTASH_REDIS_REST_URL = "https://mock-redis.upstash.io";
    process.env.UPSTASH_REDIS_REST_TOKEN = "mock_token";
});

// Mock redis
vi.mock("../src/config/redis.config.js", () => ({
    redis: {
        get: vi.fn().mockResolvedValue(null),
        set: vi.fn().mockResolvedValue("OK"),
    },
}));

// Mock prisma
vi.mock("../src/config/prisma.config.js", () => ({
    default: {
        $queryRaw: vi.fn().mockResolvedValue([
            {
                id: "doc-pdf-1",
                title: "JavaScript Engine Guide",
                description: "Deep dive into JS engines",
                url: null,
                fileType: "application/pdf",
                fileName: "guide.pdf",
                fileUrl: "uploads/guide.pdf",
                snippet: "Deep dive into <mark>JavaScript</mark> engines",
                createdAt: new Date(),
                updatedAt: new Date(),
                rank: 0.85,
            },
        ]),
        document: {
            findMany: vi.fn().mockResolvedValue([]),
            count: vi.fn().mockResolvedValue(0),
        },
    },
}));

import { searchDocument } from "../src/services/search.service.js";

describe("Search Service - Filtering (fileType, from, to)", () => {
    it("should accept fileType=pdf and execute full text search with filter", async () => {
        const result = await searchDocument("javascript", 1, 10, null, "newest", null, null, "pdf");

        expect(result).toBeDefined();
        expect(result.documents.length).toBe(1);
        expect(result.documents[0].fileType).toBe("application/pdf");
    });

    it("should accept date filters (from/to) without throwing errors", async () => {
        const fromDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const result = await searchDocument("javascript", 1, 10, null, "newest", fromDate, null, "docx");

        expect(result).toBeDefined();
        expect(result.page).toBe(1);
    });
});
