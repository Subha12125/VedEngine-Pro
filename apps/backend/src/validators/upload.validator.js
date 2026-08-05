import { fileTypeFromBuffer } from "file-type";

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

/** Allowed MIME types → extension mapping */
const ALLOWED_TYPES = {
    "text/plain": ".txt",
    "application/pdf": ".pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
};

/** Reverse lookup: extension to MIME */
const ALLOWED_EXTENSIONS = {
    ".txt": "text/plain",
    ".pdf": "application/pdf",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

/**
 * Magic-byte signatures we expect for each extension.
 * file-type returns `undefined` for plain-text files (no magic bytes),
 * so we treat "undefined" as acceptable for .txt.
 */
const MAGIC_BYTE_MIME = {
    ".pdf": "application/pdf",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    // .txt — no magic bytes; handled separately
};

// ─── Validator ────────────────────────────────────────────────────────────────

/**
 * Validates an uploaded file buffer before it is persisted to disk.
 *
 * @param {object} params
 * @param {string} params.filename   - Original file name from the client
 * @param {string} params.mimetype   - Content-Type header sent by the client
 * @param {Buffer} params.buffer     - Complete file contents
 * @returns {{ valid: true } | { valid: false, statusCode: number, error: string }}
 */
export async function validateUpload({ filename, mimetype, buffer }) {
    // 1. Check that a file was provided
    if (!filename || !buffer || buffer.length === 0) {
        return {
            valid: false,
            statusCode: 400,
            error: "No file provided or file is empty.",
        };
    }

    // 2. Check file size
    if (buffer.length > MAX_FILE_SIZE) {
        const sizeMB = (buffer.length / (1024 * 1024)).toFixed(2);
        return {
            valid: false,
            statusCode: 413,
            error: `File size (${sizeMB} MB) exceeds the 10 MB limit.`,
        };
    }

    // 3. Check MIME type from Content-Type header
    if (!ALLOWED_TYPES[mimetype]) {
        return {
            valid: false,
            statusCode: 415,
            error: `Unsupported MIME type "${mimetype}". Allowed types: ${Object.keys(ALLOWED_TYPES).join(", ")}`,
        };
    }

    // 4. Check file extension
    const ext = extname(filename);
    if (!ALLOWED_EXTENSIONS[ext]) {
        return {
            valid: false,
            statusCode: 415,
            error: `Unsupported file extension "${ext}". Allowed extensions: ${Object.keys(ALLOWED_EXTENSIONS).join(", ")}`,
        };
    }

    // 5. Cross-check: extension must match the declared MIME type
    if (ALLOWED_EXTENSIONS[ext] !== mimetype) {
        return {
            valid: false,
            statusCode: 415,
            error: `MIME type "${mimetype}" does not match file extension "${ext}".`,
        };
    }

    // 6. Magic-byte validation (deep content check)
    if (MAGIC_BYTE_MIME[ext]) {
        const detected = await fileTypeFromBuffer(buffer);
        if (!detected || detected.mime !== MAGIC_BYTE_MIME[ext]) {
            return {
                valid: false,
                statusCode: 415,
                error: `File content does not match expected type for "${ext}". The file may be corrupted or spoofed.`,
            };
        }
    }
    // For .txt we skip magic-byte check — plain text has no signature bytes.

    return { valid: true };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extract lowercase extension from filename.
 * @param {string} filename
 * @returns {string} e.g. ".pdf"
 */
function extname(filename) {
    const dot = filename.lastIndexOf(".");
    return dot === -1 ? "" : filename.slice(dot).toLowerCase();
}

export { MAX_FILE_SIZE, ALLOWED_TYPES, ALLOWED_EXTENSIONS };
