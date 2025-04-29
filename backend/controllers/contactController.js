import Contact from "../models/contactModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export async function handleContact(req, res) {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    await sendEmail(req.body);
    // debug
    console.log(req.body);
    
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    // Actual error logging
    console.error("Contact Form Error:", error);  // Basic console logging
    
    // Enhanced error response
    res.status(503).json({ 
      error: "Internal Server Error",
      // Include additional info for debugging (optional)
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}




// import Contact from "../models/contactModel.js";
// import { sendEmail } from "../utils/sendEmail.js";

// export async function handleContact(req, res) {
//   try {
//     const contact = new Contact(req.body);
//     await contact.save();
    
//     await sendEmail(req.body);
    
//     res.status(201).json({ message: "Message sent successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
