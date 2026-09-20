import { describe, it, expect, vi } from "vitest";

// Mock prisma
vi.mock("../src/config/prisma.config.js", () => ({
    default: {
        searchLog: {
            findMany: vi.fn().mockResolvedValue([
                { id: "s1", query: "python asyncio", createdAt: new Date() },
                { id: "s2", query: "fastify 5 framework", createdAt: new Date() },
            ]),
        },
    },
}));

import { getRecentSearches } from "../src/services/searchLog.service.js";

describe("SearchLog Service - getRecentSearches", () => {
    it("should return distinct recent search query records", async () => {
        const results = await getRecentSearches();

        expect(results).toBeDefined();
        expect(results.length).toBe(2);
        expect(results[0].query).toBe("python asyncio");
    });
});
