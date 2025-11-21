import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import contactTemplate from "./emailTemplates/contactTemplate.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Transporteur Nodemailer (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, 
  },
});

// Route d’envoi email
app.post("/send-email", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const mailOptions = {
      from: `"Metal Transformer" <${process.env.MAIL_USER}>`,
      to: "chicowebdev@gmail.com", // destinataire
      subject: "Nouveau message - Metal Transformer",
      html: contactTemplate({ name, phone, email, message }),
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email envoyé !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur d'envoi" });
  }
});

app.listen(5000, () => console.log("Serveur lancé sur http://localhost:5000"));
