// controllers/contactController.js
import Contact from "../models/contactModel.js";
import { sendInquiryEmail } from "../utils/nodemailer/sendEmails.js";

export async function handleContact(req, res) {
  try {
    // Data is already validated by middleware at this point
    const contact = new Contact({
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    });

    await contact.save();

    // Fire-and-forget email
    sendInquiryEmail(req.body)
      .catch(error => console.error('Email Error:', error));

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: {
        contactId: contact._id,
        name: contact.name,
        services: contact.services
      }
    });

  } catch (error) {
    console.error("Contact Submission Error:", {
      message: error.message,
      stack: error.stack
    });

    const statusCode = error.name === 'ValidationError' ? 400 : 500;
    
    res.status(statusCode).json({
      success: false,
      error: "Internal server error",
      // ...(process.env.NODE_ENV === "development" && {
      //   debug: error.message,
      //   type: error.name
      // })
      // DEBUG , REMOVE THIS LATER
      ...(process.env.NODE_ENV === "production" && {
        debug: error.message,
        type: error.name
      })
    });
  }
}









// // controllers/contactController.js
// import Contact from "../models/contactModel.js";
// import { sendInquiryEmail } from "../utils/nodemailer/sendEmails.js";
// import { contactFormSchema } from "../schemas/contactSchema.js";

// // Rate limiter configuration
// export const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // limit each IP to 5 requests
//   standardHeaders: true,
//   legacyHeaders: false,
//   handler: (req, res) => {
//     res.status(429).json({
//       success: false,
//       error: 'Too many submission attempts. Please try again later.'
//     });
//   }
// });

// export async function handleContact(req, res) {
//   try {
//     // 1. Validate with Zod
//     const validatedData = await contactFormSchema.parseAsync(req.body);

//     // 2. Save to database
//     const contact = new Contact({
//       ...validatedData,
//       ipAddress: req.ip,
//       userAgent: req.headers['user-agent']
//     });

//     await contact.save();

//     // 3. Send email (fire-and-forget)
//     sendInquiryEmail(validatedData)
//       .catch(error => {
//         console.error('Email Error:', error);
//         // Consider logging to a monitoring service
//       });

//     // 4. Success response
//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       data: {
//         contactId: contact._id,
//         name: contact.name,
//         services: contact.services
//       }
//     });

//   } catch (error) {
//     // Handle Zod validation errors
//     if (error.errors) { // Zod error check
//       return res.status(400).json({
//         success: false,
//         error: "Validation failed",
//         details: error.errors.map(e => ({
//           path: e.path.join('.'),
//           message: e.message
//         }))
//       });
//     }

//     // Handle other errors
//     console.error("Contact Submission Error:", {
//       message: error.message,
//       stack: error.stack,
//       body: req.body
//     });

//     const statusCode = error.name === 'ValidationError' ? 400 : 500;
    
//     res.status(statusCode).json({
//       success: false,
//       error: "Internal server error",
//       ...(process.env.NODE_ENV === "development" && {
//         debug: error.message,
//         type: error.name
//       })
//     });
//   }
// }









// import Contact from "../models/contactModel.js";
// import { sendInquiryEmail } from "../utils/nodemailer/sendEmails.js";

// export async function handleContact(req, res) {
//   try {
//     const contact = new Contact(req.body);
//     await contact.save();
    
//     await sendInquiryEmail(req.body);
//     // debug
//     console.log(req.body);
    
//     res.status(201).json({ message: "Message sent successfully" });
//   } catch (error) {
//     // Actual error logging
//     console.error("Contact Form Error:", error);  // Basic console logging
    
//     // Enhanced error response
//     res.status(503).json({ 
//       error: "Internal Server Error",
//       // Include additional info for debugging (optional)
//       details: process.env.NODE_ENV === "development" ? error.message : undefined
//     });
//   }
// }