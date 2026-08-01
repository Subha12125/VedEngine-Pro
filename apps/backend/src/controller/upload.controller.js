import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { uploadService } from "../services/upload.service.js";


export const uploadController = async (req, res) => {
    try{
        // Get uploaded file from Fastify multipart
        const data = await req.file();

        if(!data){
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        // With attachFieldsToBody: false (default for req.file()),
        // body fields come from data.fields
        const title = data.fields.title?.value || "";
        const description = data.fields.description?.value || "";

        // Define upload directory
        const uploadDir = path.join("./uploads");
        // Create upload directory if not exists
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive: true});
        }

        // Generate unique file name
        const uniqueFileName = `${Date.now()}-${data.filename}`;

        // Define file path
        const filePath = path.join(uploadDir, uniqueFileName);

        // Save file to disk
        await pipeline(data.file, fs.createWriteStream(filePath));

        // Get actual file size from disk after saving
        const stats = fs.statSync(filePath);

        // Call upload service to extract text and store in DB
        const document = await uploadService(
            {
                originalname: data.filename,
                mimetype: data.mimetype,
                size: stats.size,
                filePath: filePath,
            },
            title,
            description
        );

        // Get file metadata
        const fileMetadata = {
            file: {
                fieldname: data.fieldname,
                originalName: data.filename,
                encoding: data.encoding,
                mimetype: data.mimetype,
                size: stats.size,
                destination: uploadDir,
                filename: uniqueFileName,
            },
            body:{
                title,
                description,
            }
        }
        console.log(fileMetadata);

        return res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            data: { ...fileMetadata, document },
        });
    }
    catch(error){
        throw error;
    }
}