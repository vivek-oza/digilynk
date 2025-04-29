// middlewares/validateRequest.js
import { contactFormSchema } from "../schemas/contactSchema.js";

export async function validateContact(req, res, next) {
  console.log('validate contatct hit');
  try {
    // Validate the request body against the schema
    const validatedData = await contactFormSchema.parseAsync(req.body);
    
    // Replace body with validated data (optional but recommended)
    req.body = validatedData;
    
    console.log('validate contatct success');

    // Proceed to controller
    next();
  } catch (error) {
    // Handle validation errors
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: error.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message
      }))
    });
  }
}








// import { z } from "zod";

// const contactSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   phone: z.string().min(10),
//   budget: z.string(),
//   services: z.array(z.string()),
//   discoverySource: z.string(),
//   message: z.string().min(5),
// });

// export function validateContact(req, res, next) {
//   try {
//     contactSchema.parse(req.body);
//     next();
//   } catch (error) {
//     return res.status(400).json({ error: error.errors });
//   }
// }
