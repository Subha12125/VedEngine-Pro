import { 
    getProfileService, 
    registerUserService, 
    loginUserService,
    updateUserService 
} from "../services/auth.service.js";

import { 
    registerValidationSchema, 
    loginValidationSchema,
    updateUserValidationSchema 
} from "../validators/auth.validator.js";

import { validate } from "../utils/validation.util.js";

/**
 * Helper to handle errors gracefully in controllers
 */
const handleControllerError = (error, reply) => {
    if (error.name === 'ZodError' || error.issues) {
        return reply.code(400).send({
            success: false,
            message: 'Validation error',
            errors: error.errors || error.issues
        });
    }
    console.error('Controller Error:', error);
    return reply.code(500).send({
        success: false,
        message: error.message || 'Internal server error'
    });
};

// Register Controller
/**
 * Register a new user.
 * @param {object} request - Fastify Request object
 * @param {object} reply - Fastify Reply object
 */
export const registerController = async (request, reply) => {
    try {
        const validatedData = validate(registerValidationSchema, request.body || {});

        const result = await registerUserService(validatedData);

        if (!result.success) {
            return reply.code(400).send({
                success: false,
                message: result.error
            });
        }

        return reply.code(201).send({
            success: true,
            message: 'User registered successfully',
            data: result
        });
    } catch (error) {
        return handleControllerError(error, reply);
    }
};

// Login Controller
/**
 * Login a user.
 * @param {object} request - Fastify Request object
 * @param {object} reply - Fastify Reply object
 */
export const loginController = async (request, reply) => {
    try {
        const validatedData = validate(loginValidationSchema, request.body || {});

        const result = await loginUserService(validatedData);

        if (!result.success) {
            return reply.code(401).send({
                success: false,
                message: result.error
            });
        }

        return reply.code(200).send({
            success: true,
            message: 'User logged in successfully',
            data: result
        });
    } catch (error) {
        return handleControllerError(error, reply);
    }
};

// Get Profile Controller
/**
 * Get user profile.
 * @param {object} request - Fastify Request object
 * @param {object} reply - Fastify Reply object
 */
export const getProfileController = async (request, reply) => {
    try {
        const userPayload = request.user;
        const result = await getProfileService(userPayload);

        if (!result.success) {
            return reply.code(404).send({
                success: false,
                message: result.error
            });
        }

        return reply.code(200).send({
            success: true,
            message: 'User profile fetched successfully',
            data: result
        });
    } catch (error) {
        return handleControllerError(error, reply);
    }
};

// Update User Controller
/**
 * Update user profile.
 * @param {object} request - Fastify Request object
 * @param {object} reply - Fastify Reply object
 */
export const updateUserController = async (request, reply) => {
    try {
        const validatedData = validate(updateUserValidationSchema, request.body || {});
        const userId = request.user?.id;

        const result = await updateUserService(userId, validatedData);

        if (!result.success) {
            const statusCode = result.error === 'User not found' ? 404 : 400;
            return reply.code(statusCode).send({
                success: false,
                message: result.error
            });
        }

        return reply.code(200).send({
            success: true,
            message: 'User profile updated successfully',
            data: result
        });
    } catch (error) {
        return handleControllerError(error, reply);
    }
};
