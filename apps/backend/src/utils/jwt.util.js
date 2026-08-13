import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Generate JWT token
 * @param {object} user
 * @returns {string}
 */
export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN,
        }
    );
};

/**
 * Verify JWT token
 * @param {string} token
 * @returns {object}
 */
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

/**
 * Decode JWT token
 * @param {string} token
 * @returns {object}
 */
export const decodeToken = (token) => {
    return jwt.decode(token);
};