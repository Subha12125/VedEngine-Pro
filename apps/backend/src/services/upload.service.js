import prisma from "../config/prisma.config.js";
import path from "path";
import fs from "fs";
import { invalidateSearchCache } from "./cache.service.js";


/**
 * Upload service for handling document uploads
 * @param file - file object with { originalname, mimetype, size, filePath }
 * @param title - title of the document
 * @param description - description of the document
 * @returns - created document record
 */

/**
 * Upload text file
 * 1. Extract content from the file
 * 2. Create a new document in the database
 * 3. Return the document
 * 4. Handle errors
 */

export const uploadService = async (file, title, description) => {
    try {
        // Read file content based on file type
        let content="";

        // Get file extension
        const fileExtension = path.extname(file.originalname).toLowerCase();

        // Extract content based on file type
        // .txt .pdf .docx
        switch(fileExtension){
            case '.txt':
                content = fs.readFileSync(file.filePath, 'utf-8');
                break;
            case '.pdf':
                content = await extractTextFromPDF(file.filePath);
                break;
            case '.docx':
                content = await extractTextFromDocx(file.filePath);
                break;
            default:
                throw new Error('Unsupported file type');
        }

        // Create document in database
        const document = await prisma.document.create({
            data: {
                title,
                content,
                description,
                fileName: file.originalname,
                fileType: file.mimetype,
                fileSize: file.size,
                fileUrl: file.filePath,
            },
        });

        // Invalidate search cache so newly uploaded document is instantly searchable
        await invalidateSearchCache();

        return document;
    }
    catch(error){
        throw error;
    }
}

/**
 * Extract text from docx file
 * @param filePath - path to the docx file
 * @returns - extracted text
 */
export const extractTextFromDocx = async (filePath) => {
    try {
        const mammoth = await import("mammoth").then(m => m.default || m).catch(() => null);
        if (!mammoth) {
            throw new Error("mammoth package is not installed");
        }
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    } catch (error) {
        throw error;
    }
};

export const extractTextFromPDF = async (filePath) => {
    try {
        const pdfParse = await import("pdf-parse").then(m => m.default || m).catch(() => null);
        if (!pdfParse) {
            throw new Error("pdf-parse package is not installed");
        }
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        throw error;
    }
};