import nodemailer from "nodemailer";



export async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    secure: true,
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER, // send mail to yourself
    subject: `New Inquiry from ${data.name}`,
    html: `
      <h3>New Inquiry</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Services:</b> ${data.services.join(", ")}</p>
      <p><b>Budget:</b> ${data.budget}</p>
      <p><b>Discovery Source:</b> ${data.discoverySource}</p>
      <p><b>Message:</b> ${data.message}</p>
    `
  });
}
