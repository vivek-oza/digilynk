// schemas/contactSchema.js
import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    budget: z.string({
        required_error: "Please select your budget range",
    }),
    services: z.array(z.string()).nonempty({
        message: "Please select at least one service",
    }),
    discoverySource: z.string({
        required_error: "Please let us know how you found us",
    }),
    message: z.string().min(5, "Message must be at least 5 characters"),
});