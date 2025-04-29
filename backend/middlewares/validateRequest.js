import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  budget: z.string(),
  services: z.array(z.string()),
  discoverySource: z.string(),
  message: z.string().min(5),
});

export function validateContact(req, res, next) {
  try {
    contactSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
}
