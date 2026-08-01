import { getSearchAnalyticsController } from "../controller/analytics.controller.js";

export const SearchAnalyticsRoutes = async (fastify) => {
    fastify.get("/search", getSearchAnalyticsController);
}