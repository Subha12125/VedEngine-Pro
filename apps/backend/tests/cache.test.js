import { describe, it, expect, vi } from "vitest";

// Mock redis config before imports
vi.mock("../src/config/redis.config.js", () => {
    return {
        redis: {
            scan: vi.fn(),
            del: vi.fn(),
        },
    };
});

import { invalidateSearchCache } from "../src/services/cache.service.js";
import { redis } from "../src/config/redis.config.js";

describe("Cache Service - invalidateSearchCache", () => {
    it("should execute scan and del loop cleanly to clear search cache entries", async () => {
        redis.scan.mockResolvedValueOnce([10, ["search:javascript:page:1:limit:10:sort:newest"]]);
        redis.scan.mockResolvedValueOnce([0, []]);
        redis.del.mockResolvedValueOnce(1);

        const result = await invalidateSearchCache();

        expect(redis.scan).toHaveBeenCalledWith(0, { match: "search:*", count: 100 });
        expect(redis.del).toHaveBeenCalledWith("search:javascript:page:1:limit:10:sort:newest");
        expect(result).toBe(1);
    });

    it("should fail gracefully without throwing if Redis scan fails", async () => {
        redis.scan.mockRejectedValueOnce(new Error("Redis connection error"));

        const result = await invalidateSearchCache();

        expect(result).toBe(0);
    });
});
