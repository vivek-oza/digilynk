import { inquiryTemplate } from "./emailTemplate.js";
import { transporter } from "./nodemailer.config.js";
import dotenv from "dotenv";

dotenv.config();




// // const mailOptions = {
// //   from: {
// //     name: "Notesy",
// //     address: "placementor.dev@gmail.com",
// //   }, //sender address
// //   to: ["vivek7@gmail.com", "testuser123234@yopmail.com"], //list of receivers
// //   subject: "Test Email using NODEMAILER for NOTESY - Notes project", //subject line
// //   text: "This is a test email", //plain text body
// //   html: "<b>This is a test email OTP : <h1>453268</h1></b>", //html body
// // };


export const sendInquiryEmail = async (data) => {
  try {
    const mailOptions = {
      from: {
        name: "Digilynk",
        address: process.env.MAIL_USER,
      },
      to: [process.env.MAIL_USER, "vivekoza297@gmail.com"], // Or your support email
      subject: `New Inquiry from ${data.name}`,
      html: inquiryTemplate(data),
      // Optional text version for email clients that don't support HTML
      // text: `
      //   New Inquiry Received:
      //   Name: ${data.name}
      //   Email: ${data.email}
      //   Phone: ${data.phone}
      //   Services: ${data.services.join(", ")}
      //   Budget: ${data.budget}
      //   Discovery Source: ${data.discoverySource}
      //   Message: ${data.message}
      // `
    };

    //CC/BCC if needed (Add in env variables)
    if (process.env.CC_EMAILS) {
      mailOptions.cc = process.env.CC_EMAILS.split(',');
    }
    if (process.env.BCC_EMAILS) {
      mailOptions.bcc = process.env.BCC_EMAILS.split(',');
    }

    const response = await transporter.sendMail(mailOptions);
    console.log("Inquiry email sent successfully:", response.messageId);
    return { success: true, messageId: response.messageId };
  } catch (error) {
    console.error("Error in sending inquiry email:", error.message);
    throw new Error("Failed to send inquiry email");
  }
};















// import { inquiryTemplate } from "./emailTemplate.js";
// import { transporter } from "./nodemailer.config.js";
// import dotenv from "dotenv";

// dotenv.config();

// // const mailOptions = {
// //   from: {
// //     name: "Notesy",
// //     address: "placementor.dev@gmail.com",
// //   }, //sender address
// //   to: ["vivek7@gmail.com", "testuser123234@yopmail.com"], //list of receivers
// //   subject: "Test Email using NODEMAILER for NOTESY - Notes project", //subject line
// //   text: "This is a test email", //plain text body
// //   html: "<b>This is a test email OTP : <h1>453268</h1></b>", //html body
// // };

// export const inquiryEmail = async (email, fullname) => {
//   try {
//     const response = await transporter.sendMail({
//       from: {
//         name: "Digilynk",
//         address: process.env.MAIL_USER,
//       }, //sender address
//       subject: `New Inquiry from ${data.name}`, //subject line,
//       to: process.env.MAIL_USER, //receiver email, [can be sent to multiple emails by passing an array of emails]
//       html: inquiryTemplate(fullname), //html body
//     });
//     console.log("Welcome email sent successfully");
//   } catch (error) {
//     console.error("Error in sending welcome email:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Error in sending welcome email",
//     });
//   }
// };