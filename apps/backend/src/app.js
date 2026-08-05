import fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import healthCheckRoute from "./routes/health.routes.js";
import { documentRoutes } from "./routes/document.route.js";
import { searchLogRoutes } from "./routes/searchLog.route.js";
import searchRoutes from "./routes/search.route.js";
import { SearchAnalyticsRoutes } from "./routes/analytics.route.js";
import { uploadRoutes } from "./routes/upload.route.js";
import { MAX_FILE_SIZE } from "./validators/upload.validator.js";


// Build the Fastify app
const buildApp = async()=> {
    const app = fastify({
        logger: true,
    })
    // Registering CORS
    await app.register(cors);

    // Registering @fastify/multipart for file uploads
    await app.register(multipart, {
        limits: {
            fileSize: MAX_FILE_SIZE, // 10 MB hard limit at the stream level
            files: 1,               // Only one file per request
        },
    });

    // Registering all routes
    await app.register(healthCheckRoute, { prefix: '/api/v1' });
    // Registering document routes
    await app.register(documentRoutes, { prefix: '/api/v1' });
    // Registering search log routes
    await app.register(searchLogRoutes, { prefix: '/api/v1/search-log' });
    // Registering search routes
    await app.register(searchRoutes, { prefix: '/api/v1/search' });
    // Search analytics routes
    await app.register(SearchAnalyticsRoutes, { prefix: '/api/v1/analytics' });
    // Registering upload routes
    await app.register(uploadRoutes, { prefix: '/api/v1' });
    return app;
}

export default buildApp;
