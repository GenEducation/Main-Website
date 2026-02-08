import { RequestHandler } from "express";
import { ContactResponse } from "@shared/api";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export const handleContact: RequestHandler = async (req, res) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error("Missing GOOGLE_SHEETS_WEBHOOK_URL environment variable");
            const response: ContactResponse = {
                success: false,
                message: "Server configuration error. Please contact the administrator.",
            };
            return res.status(500).json(response);
        }

        // Forward to Google Apps Script
        // We use a simple POST request. Google Apps Script requires a redirect follow usually,
        // but fetch should handle this or we can just send it and assume success if it hits.
        const googleResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validatedData),
        });

        if (!googleResponse.ok) {
            throw new Error(`Google Apps Script responded with status: ${googleResponse.status}`);
        }

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
            message: error instanceof Error ? `Server error: ${error.message}` : "Something went wrong. Please try again later.",
        };
        res.status(500).json(response);
    }
};
