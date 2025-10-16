// controllers/contactController.js
import Contact from "../models/contactModel.js";
import { sendInquiryEmail } from "../utils/nodemailer/sendEmails.js";

export async function handleContact(req, res) {
  console.log("contatct endpoint hit");

  try {
    // Data is already validated by middleware at this point
    const contact = new Contact({
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
    });

    await contact.save();

    // Fire-and-forget email
    sendInquiryEmail(req.body).catch((error) =>
      console.error("Email Error:", error)
    );

    console.log("contatct endpoint hit success");

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: {
        contactId: contact._id,
        name: contact.name,
      },
    });
  } catch (error) {
    console.log("contatct endpoint hit error");

    console.error("Contact Submission Error:", {
      message: error.message,
      stack: error.stack,
    });

    const statusCode = error.name === "ValidationError" ? 400 : 500;

    res.status(statusCode).json({
      success: false,
      error: "Internal server error",
      ...(process.env.NODE_ENV === "development" && {
        debug: error.message,
        type: error.name,
      }),
    });
  }
}
