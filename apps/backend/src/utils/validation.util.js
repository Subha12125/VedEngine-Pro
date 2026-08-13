/**
 * Utility to validate data against a Zod schema
 * @param {import('zod').ZodSchema} schema
 * @param {object} data
 * @returns {object} validated data
 */
export const validate = (schema, data) => {
    return schema.parse(data);
};
