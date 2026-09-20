import { z } from "zod";

// Common validation schema for search
// Query must be atleast two characters
// Page must be atleast 1 and default to 1
// Limit must be atleast 1 and atmost 100 and default to 10
export const searchSchema = z.object({
    q: z.string().trim().min(2, "Query must be atleast two characters"),
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(10),
    sort: z.enum(["newest", "oldest"]).optional().default("newest"),
    fileType: z.enum(["all", "pdf", "docx", "txt", "web"]).optional().default("all"),
    from: z.string().optional(),
    to: z.string().optional(),
})


// Validation schema for search suggestion
// Query must be atleast two characters
export const searchSuggestionSchema = z.object({
    q: z.string().trim().min(2, "Query must be atleast two characters"),
})
