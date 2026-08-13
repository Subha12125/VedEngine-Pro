import {
    registerController,
    loginController,
    getProfileController,
    updateUserController
} from "../controller/auth.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

// 1. Register route: POST /api/auth/register
// 2. Login route: POST /api/auth/login
// 3. Get profile route: GET /api/auth/profile
// 4. Update user route: PUT /api/auth/profile

const authRoutes = (fastify, options, done) => {
    fastify.post('/register', registerController);
    fastify.post('/login', loginController);
    fastify.get('/profile', { preHandler: [authMiddleware] }, getProfileController);
    fastify.put('/profile', { preHandler: [authMiddleware] }, updateUserController);
    done();
}

export default authRoutes;