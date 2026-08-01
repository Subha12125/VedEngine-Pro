import { Schema } from "zod";
import { uploadController } from "../controller/upload.controller.js";

export const uploadRoutes = async (fastify, options) => {
    fastify.post('/upload', 
    {
        schema: {
            body: Schema.object({
                title: Schema.string(),
                description: Schema.string(),
            }),
        },
    },
    uploadController);
};