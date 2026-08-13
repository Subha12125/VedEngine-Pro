import prisma from "../config/prisma.config.js";
import { generateToken } from "../utils/jwt.util.js";
import { hashPassword, comparePassword } from "../utils/password.util.js";

/**
 * Register a new user.
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Promise<object>}
 */
export const registerUserService = async (data) => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (existingUser) {
            return {
                success: false,
                error: 'Email already exists'
            };
        }

        const hashedPassword = await hashPassword(data.password);

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
            }
        });

        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        return {
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        };
    } catch (error) {
        if (error.code === 'P2002') {
            return {
                success: false,
                error: 'Email already exists'
            };
        }
        console.error('Error while registering user:', error);
        throw error;
    }
};

/**
 * Logs in a user with the provided credentials.
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Promise<object>}
 */
export const loginUserService = async (data) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (!user) {
            return {
                success: false,
                error: 'Invalid credentials'
            };
        }

        const isPasswordValid = await comparePassword(data.password, user.password);
        if (!isPasswordValid) {
            return {
                success: false,
                error: 'Invalid credentials'
            };
        }

        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        return {
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        };
    } catch (error) {
        console.error('Error while logging in user:', error);
        throw error;
    }
};

/**
 * Gets the profile of a user.
 * @param {object} data
 * @param {string} data.id
 * @returns {Promise<object>}
 */
export const getProfileService = async (data) => {
    try {
        const userId = typeof data === 'string' ? data : data?.id;
        if (!userId) {
            return {
                success: false,
                error: 'User ID is required'
            };
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!user) {
            return {
                success: false,
                error: 'User not found'
            };
        }

        return {
            success: true,
            user
        };
    } catch (error) {
        console.error('Error while getting user profile:', error);
        throw error;
    }
};

/**
 * Updates a user's profile.
 * @param {string} userId
 * @param {object} updateData
 * @returns {Promise<object>}
 */
export const updateUserService = async (userId, updateData) => {
    try {
        if (!userId) {
            return {
                success: false,
                error: 'User ID is required'
            };
        }

        const existingUser = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!existingUser) {
            return {
                success: false,
                error: 'User not found'
            };
        }

        const dataToUpdate = {};
        if (updateData.name) dataToUpdate.name = updateData.name;
        if (updateData.email) dataToUpdate.email = updateData.email;
        if (updateData.password) {
            dataToUpdate.password = await hashPassword(updateData.password);
        }

        if (Object.keys(dataToUpdate).length === 0) {
            return {
                success: false,
                error: 'No valid fields provided for update'
            };
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: dataToUpdate,
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return {
            success: true,
            user: updatedUser
        };
    } catch (error) {
        if (error.code === 'P2002') {
            return {
                success: false,
                error: 'Email already exists'
            };
        }
        console.error('Error while updating user:', error);
        throw error;
    }
};