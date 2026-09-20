import { describe, it, expect, vi } from "vitest";

// Mock prisma
vi.mock("../src/config/prisma.config.js", () => ({
    default: {
        searchLog: {
            findMany: vi.fn().mockResolvedValue([
                {
                    id: "log-uuid-1",
                    query: "javascript engine",
                    createdAt: new Date("2026-09-20T10:00:00.000Z"),
                },
                {
                    id: "log-uuid-2",
                    query: 'react "19" search',
                    createdAt: new Date("2026-09-20T11:00:00.000Z"),
                },
            ]),
        },
    },
}));

import { exportSearchLogsCSV } from "../src/services/analytics.service.js";

describe("Analytics Service - CSV Export", () => {
    it("should format search log records as valid CSV string with headers", async () => {
        const csv = await exportSearchLogsCSV();

        expect(csv).toBeDefined();
        const lines = csv.split("\n");
        expect(lines[0]).toBe("ID,Query,Created At");
        expect(lines[1]).toContain('"log-uuid-1"');
        expect(lines[1]).toContain('"javascript engine"');
        expect(lines[2]).toContain('"log-uuid-2"');
    });
});
