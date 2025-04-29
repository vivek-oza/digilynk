import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transportObject = {
  service: "gmail",
  host: "smtp.gmail.email",
  secure: true,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

export const transporter = nodemailer.createTransport(transportObject);
