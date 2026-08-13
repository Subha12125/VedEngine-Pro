import fs from "fs";
import path from "path";
import { uploadService } from "../services/upload.service.js";
import { validateUpload } from "../validators/upload.validator.js";
import { invalidateSearchCache } from "../services/cache.service.js";


export const uploadController = async (req, res) => {
    try{
        // Get uploaded file from Fastify multipart
        const data = await req.file();

        if(!data){
            return res.status(400).send({
                success: false,
                error: "No file uploaded. Please attach a file.",
            });
        }

        // With attachFieldsToBody: false (default for req.file()),
        // body fields come from data.fields
        const title = data.fields.title?.value || "";
        const description = data.fields.description?.value || "";

        // ── Collect file into a buffer for validation ──────────────────────
        const chunks = [];
        for await (const chunk of data.file) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        // @fastify/multipart silently truncates the stream at the fileSize limit
        // instead of throwing. Check if the file was truncated (i.e., too large).
        if (data.file.truncated) {
            return res.status(413).send({
                success: false,
                error: "File size exceeds the 10 MB limit.",
            });
        }

        // ── Validate the upload ────────────────────────────────────────────
        const validation = await validateUpload({
            filename: data.filename,
            mimetype: data.mimetype,
            buffer,
        });

        if (!validation.valid) {
            return res.status(validation.statusCode).send({
                success: false,
                error: validation.error,
            });
        }

        // ── Save validated file to disk ────────────────────────────────────
        const uploadDir = path.join("./uploads");
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive: true});
        }

        const uniqueFileName = `${Date.now()}-${data.filename}`;
        const filePath = path.join(uploadDir, uniqueFileName);

        // Write the buffer we already have (no need to re-stream)
        fs.writeFileSync(filePath, buffer);

        // ── Store document in database ─────────────────────────────────────
        const document = await uploadService(
            {
                originalname: data.filename,
                mimetype: data.mimetype,
                size: buffer.length,
                filePath: filePath,
            },
            title,
            description
        );

        // ── Invalidate search cache (fire-and-forget) ──────────────────────
        // New document means existing search results are stale.
        // We don't await this — upload response shouldn't be delayed by cache ops.
        invalidateSearchCache().catch(() => {
            // Error is already logged inside invalidateSearchCache
        });

        // ── Build response ─────────────────────────────────────────────────
        const fileMetadata = {
            file: {
                fieldname: data.fieldname,
                originalName: data.filename,
                encoding: data.encoding,
                mimetype: data.mimetype,
                size: buffer.length,
                destination: uploadDir,
                filename: uniqueFileName,
            },
            body:{
                title,
                description,
            }
        };

        return res.status(200).send({
            success: true,
            message: "File uploaded successfully",
            data: { ...fileMetadata, document },
        });
    }
    catch(error){
        // Handle @fastify/multipart size limit errors
        if (error.code === "FST_REQ_FILE_TOO_LARGE") {
            return res.status(413).send({
                success: false,
                error: "File size exceeds the 10 MB limit.",
            });
        }
        throw error;
    }
}