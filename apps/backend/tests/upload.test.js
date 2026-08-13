import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import buildApp from "../src/app.js";
import fs from "fs";
import path from "path";

// ─── Mock Prisma (avoid real DB in tests) ─────────────────────────────────────
vi.mock("../src/config/prisma.config.js", () => ({
    default: {
        document: {
            create: vi.fn().mockResolvedValue({
                id: "test-uuid-123",
                title: "Test",
                content: "Hello world",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }),
        },
    },
}));

// ─── Mock Redis (avoid real Upstash calls) ────────────────────────────────────
vi.mock("../src/config/redis.config.js", () => ({
    redis: {
        scan: vi.fn().mockResolvedValue([0, []]),
        del: vi.fn().mockResolvedValue(0),
    },
}));

// ─── Mock pdf-parse and mammoth ───────────────────────────────────────────────
vi.mock("pdf-parse", () => ({
    default: vi.fn().mockResolvedValue({ text: "PDF content" }),
}));
vi.mock("mammoth", () => ({
    default: {
        extractRawText: vi.fn().mockResolvedValue({ value: "DOCX content" }),
    },
}));

// ─── Test Helpers ─────────────────────────────────────────────────────────────

/**
 * Build a raw multipart/form-data payload manually.
 * Fastify's inject() doesn't support FormData, so we construct the raw body.
 */
function buildMultipartPayload({ filename, mimetype, fileContent, title, description }) {
    const boundary = "----TestBoundary" + Date.now();
    const CRLF = "\r\n";
    let body = "";

    // File part
    if (filename && fileContent !== undefined) {
        body += `--${boundary}${CRLF}`;
        body += `Content-Disposition: form-data; name="file"; filename="${filename}"${CRLF}`;
        body += `Content-Type: ${mimetype}${CRLF}${CRLF}`;
        // For binary content we'll handle separately
    }

    // For simplicity with text-based tests, build as buffer
    const parts = [];

    if (filename && fileContent !== undefined) {
        const fileHeader = Buffer.from(
            `--${boundary}${CRLF}` +
            `Content-Disposition: form-data; name="file"; filename="${filename}"${CRLF}` +
            `Content-Type: ${mimetype}${CRLF}${CRLF}`
        );
        const fileBody = Buffer.isBuffer(fileContent) ? fileContent : Buffer.from(fileContent);
        parts.push(fileHeader, fileBody, Buffer.from(CRLF));
    }

    // Title field
    if (title !== undefined) {
        parts.push(Buffer.from(
            `--${boundary}${CRLF}` +
            `Content-Disposition: form-data; name="title"${CRLF}${CRLF}` +
            `${title}${CRLF}`
        ));
    }

    // Description field
    if (description !== undefined) {
        parts.push(Buffer.from(
            `--${boundary}${CRLF}` +
            `Content-Disposition: form-data; name="description"${CRLF}${CRLF}` +
            `${description}${CRLF}`
        ));
    }

    // Closing boundary
    parts.push(Buffer.from(`--${boundary}--${CRLF}`));

    return {
        body: Buffer.concat(parts),
        contentType: `multipart/form-data; boundary=${boundary}`,
    };
}

// ─── Test Suite ───────────────────────────────────────────────────────────────

describe("Upload API — POST /api/v1/upload", () => {
    let app;
    const uploadDir = path.join("./uploads");

    beforeAll(async () => {
        app = await buildApp();
    });

    afterAll(async () => {
        await app.close();
        // Clean up test uploads
        if (fs.existsSync(uploadDir)) {
            const files = fs.readdirSync(uploadDir);
            for (const file of files) {
                if (file.startsWith("1")) { // timestamp-prefixed files
                    fs.unlinkSync(path.join(uploadDir, file));
                }
            }
        }
    });

    // ── Success Cases ──────────────────────────────────────────────────────

    describe("✅ Success Cases", () => {
        it("should upload a valid TXT file", async () => {
            const { body, contentType } = buildMultipartPayload({
                filename: "test.txt",
                mimetype: "text/plain",
                fileContent: "Hello, VedEngine! This is a test document.",
                title: "Test TXT",
                description: "Unit test TXT upload",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(200);
            const json = response.json();
            expect(json.success).toBe(true);
            expect(json.message).toBe("File uploaded successfully");
            expect(json.data.file.mimetype).toBe("text/plain");
            expect(json.data.file.originalName).toBe("test.txt");
        });

        it("should upload a valid PDF file", async () => {
            // Minimal valid PDF (magic bytes: %PDF-)
            const pdfContent = Buffer.from(
                "%PDF-1.4\n1 0 obj\n<< /Type /Catalog >>\nendobj\n" +
                "xref\n0 2\n0000000000 65535 f \n0000000009 00000 n \n" +
                "trailer\n<< /Root 1 0 R /Size 2 >>\nstartxref\n58\n%%EOF"
            );

            const { body, contentType } = buildMultipartPayload({
                filename: "test.pdf",
                mimetype: "application/pdf",
                fileContent: pdfContent,
                title: "Test PDF",
                description: "Unit test PDF upload",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(200);
            const json = response.json();
            expect(json.success).toBe(true);
            expect(json.data.file.mimetype).toBe("application/pdf");
        });
    });

    // ── Failure Cases ──────────────────────────────────────────────────────

    describe("❌ Failure — No File", () => {
        it("should return 400 when no file is attached", async () => {
            const boundary = "----TestBoundary" + Date.now();
            const payload = Buffer.from(
                `--${boundary}\r\n` +
                `Content-Disposition: form-data; name="title"\r\n\r\n` +
                `No file here\r\n` +
                `--${boundary}--\r\n`
            );

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": `multipart/form-data; boundary=${boundary}` },
                payload,
            });

            expect(response.statusCode).toBe(400);
            const json = response.json();
            expect(json.success).toBe(false);
        });
    });

    describe("❌ Failure — Unsupported MIME Type", () => {
        it("should return 415 for a JPG file", async () => {
            // JPEG magic bytes: FF D8 FF
            const jpgContent = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10]);

            const { body, contentType } = buildMultipartPayload({
                filename: "photo.jpg",
                mimetype: "image/jpeg",
                fileContent: jpgContent,
                title: "Wrong Type",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(415);
            const json = response.json();
            expect(json.success).toBe(false);
            expect(json.error).toContain("Unsupported MIME type");
        });

        it("should return 415 for a ZIP file", async () => {
            const { body, contentType } = buildMultipartPayload({
                filename: "archive.zip",
                mimetype: "application/zip",
                fileContent: Buffer.from([0x50, 0x4B, 0x03, 0x04]),
                title: "ZIP file",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(415);
        });
    });

    describe("❌ Failure — Oversized File", () => {
        it("should return 413 for files exceeding 10 MB", async () => {
            // Create a file just over 10 MB (10 MB + 1 byte)
            // Note: Fastify's inject() bypasses @fastify/multipart stream limits,
            // so the buffer-level check in our validator catches this.
            const oversizedContent = Buffer.alloc(10 * 1024 * 1024 + 1, "A");

            const { body, contentType } = buildMultipartPayload({
                filename: "huge.txt",
                mimetype: "text/plain",
                fileContent: oversizedContent,
                title: "Too Big",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(413);
            const json = response.json();
            expect(json.success).toBe(false);
            expect(json.error).toContain("10 MB");
        });
    });

    describe("❌ Failure — Extension Mismatch", () => {
        it("should reject when extension doesn't match MIME type", async () => {
            const { body, contentType } = buildMultipartPayload({
                filename: "document.txt",
                mimetype: "application/pdf",
                fileContent: "Just plain text, not a PDF",
                title: "Mismatch",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(415);
            const json = response.json();
            expect(json.error).toContain("does not match");
        });
    });

    // ── Cache Invalidation ─────────────────────────────────────────────────

    describe("🗑️ Cache Invalidation", () => {
        it("should call Redis scan after successful upload", async () => {
            const { redis } = await import("../src/config/redis.config.js");
            redis.scan.mockClear();

            const { body, contentType } = buildMultipartPayload({
                filename: "cache-test.txt",
                mimetype: "text/plain",
                fileContent: "Cache invalidation test content",
                title: "Cache Test",
            });

            const response = await app.inject({
                method: "POST",
                url: "/api/v1/upload",
                headers: { "content-type": contentType },
                payload: body,
            });

            expect(response.statusCode).toBe(200);

            // Give the fire-and-forget promise a tick to resolve
            await new Promise((r) => setTimeout(r, 100));

            // redis.scan should have been called to look for search:* keys
            expect(redis.scan).toHaveBeenCalled();
            const scanCall = redis.scan.mock.calls[0];
            expect(scanCall[1]).toEqual(expect.objectContaining({ match: "search:*" }));
        });
    });
});
