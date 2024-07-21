import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (email, subject, text) => {
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: "mjwa qaau nrcq kjeu",
    },
  });

  
  const mailOptions = {
    from: process.env.EMAIL_FROM, 
    to: email, 
    subject: subject, 
    text: text, 
  };

  
  await transporter.sendMail(mailOptions);
};
