import { getSearchAnalytics } from "../services/analytics.service.js";

export const getSearchAnalyticsController = async(req, reply) => {
    try{
        const analytics = await getSearchAnalytics();
        return reply.code(200).send({
            status : "success",
            message : "Search analytics fetched successfully",
            data : analytics
        })
    }
    catch(error){
        console.error("Error in getSearchAnalyticsController", error);
        return reply.code(500).send({
            status : "error",
            message : "Internal server error"
        });
    }
}