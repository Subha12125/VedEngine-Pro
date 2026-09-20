export const healthCheckController = (request, reply) => {
    return reply.code(200).send({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};