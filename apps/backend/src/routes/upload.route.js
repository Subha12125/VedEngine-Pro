import { uploadController } from "../controller/upload.controller.js";

export const uploadRoutes = async (fastify, options) => {
    // POST /api/v1/upload
    // Accepts multipart/form-data with:
    //   - file: TXT, PDF, or DOCX (max 10 MB)
    //   - title: string (optional text field)
    //   - description: string (optional text field)
    //
    // Validation is handled inside the controller via upload.validator.js
    // (Zod body schema is not compatible with multipart file uploads)
    fastify.post('/upload', uploadController);
};