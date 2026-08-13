// Authentication middleware
// Verifies the JWT token sent by the client

export const authMiddleware = async (request, reply) => {
    try {
        // Fastify JWT verifies the token from:
        // Authorization: Bearer <token>
        await request.jwtVerify();

    } catch (error) {
        return reply.code(401).send({
            success: false,
            status: "error",
            message: "Unauthorized. Please login first.",
        });
    }
};