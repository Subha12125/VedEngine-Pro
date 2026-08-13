import { email, z } from "zod";

/**
 * Register Validation schema 
 * name: required, trim, min 3, max 100 characters
 * email: required, trim, lowercase, valid email
 * password: required, trim, min 8 characters, at least one number, one lowercase letter, one uppercase letter, one special character
 */
export const registerValidationSchema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .trim()
        .min(3, 'Name must be at least 3 characters long')
        .max(100, 'Name must be at most 100 characters long'),

    email: z.string({ required_error: 'Email is required' })
        .trim()
        .toLowerCase()
        .email('Invalid email address'),

    password: z.string({ required_error: 'Password is required' })
        .trim()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
})

/**
 * Login Validation schema
 * email: required, trim, lowercase, valid email
 * password: required, trim, min 8 characters, at least one number, one lowercase letter, one uppercase letter, one special character
 */

export const loginValidationSchema = z.object({
    email: z.string({ required_error: 'Email is required' })
        .trim()
        .toLowerCase()
        .email('Invalid email address'),

    password: z.string({ required_error: 'Password is required' })
        .trim()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
})

/**
 * Update user validation schema
 * name: optional, trim, min 3, max 100 characters
 * email: optional, trim, lowercase, valid email
 * password: optional, trim, min 8 characters, at least one number, one lowercase letter, one uppercase letter, one special character
 */

export const updateUserValidationSchema = z.object({
    name: z.string()
        .trim()
        .min(3, 'Name must be at least 3 characters long')
        .max(100, 'Name must be at most 100 characters long')
        .optional(),

    email: z.string()
        .trim()
        .toLowerCase()
        .email('Invalid email address')
        .optional(),

    password: z.string()
        .trim()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
        .optional(),
})