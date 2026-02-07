import { RequestHandler } from "express";
import { ContactSubmission, ContactResponse } from "@shared/api";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const DATA_FILE = path.join(process.cwd(), "server", "data", "contact_submissions.json");

export const handleContact: RequestHandler = async (req, res) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        // Read existing submissions
        let submissions: (ContactSubmission & { timestamp: string })[] = [];
        try {
            const fileContent = await fs.readFile(DATA_FILE, "utf-8");
            submissions = JSON.parse(fileContent);
        } catch (error) {
            // If file doesn't exist or is invalid, start with empty array
            submissions = [];
        }

        // Add new submission
        const newSubmission = {
            ...validatedData,
            timestamp: new Date().toISOString(),
        };
        submissions.push(newSubmission);

        // Save back to file
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

        const response: ContactResponse = {
            success: true,
            message: "Thank you! Your message has been received.",
        };
        res.status(200).json(response);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const response: ContactResponse = {
                success: false,
                message: error.errors.map(e => e.message).join(", "),
            };
            return res.status(400).json(response);
        }

        console.error("Contact submission error:", error);
        const response: ContactResponse = {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
        res.status(500).json(response);
    }
};
