import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import buildApp from "../src/app.js";

// Mock Prisma (avoid real DB in tests)
vi.mock("../src/config/prisma.config.js", () => ({
    default: {},
}));

// Mock Redis (avoid real Redis calls in tests)
vi.mock("../src/config/redis.config.js", () => ({
    redis: {},
}));

describe("Health Check API Integration Tests", () => {
    let app;

    beforeAll(async () => {
        app = await buildApp();
        await app.ready();
    });

    afterAll(async () => {
        if (app) {
            await app.close();
        }
    });

    describe("GET /api/v1/health", () => {
        it("should return 200 with ok status, uptime, and valid ISO timestamp", async () => {
            const beforeRequest = Date.now();
            const response = await app.inject({
                method: "GET",
                url: "/api/v1/health",
            });
            const afterRequest = Date.now();

            expect(response.statusCode).toBe(200);
            expect(response.headers["content-type"]).toMatch(/application\/json/);

            const body = JSON.parse(response.body);

            // Verify status is "ok"
            expect(body.status).toBe("ok");

            // Verify uptime exists and is a non-negative number
            expect(typeof body.uptime).toBe("number");
            expect(body.uptime).toBeGreaterThanOrEqual(0);

            // Verify timestamp exists and is a valid ISO-8601 string
            expect(typeof body.timestamp).toBe("string");
            const parsedTimestamp = new Date(body.timestamp).getTime();
            expect(Number.isNaN(parsedTimestamp)).toBe(false);
            expect(parsedTimestamp).toBeGreaterThanOrEqual(beforeRequest - 1000);
            expect(parsedTimestamp).toBeLessThanOrEqual(afterRequest + 1000);
            expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);
        });
    });
});
