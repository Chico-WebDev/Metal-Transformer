import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import contactTemplate from "./emailTemplates/contactTemplate.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));


// servir les fichiers du frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


// Transporteur Nodemailer (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, 
  },
});

// Route d’envoi email
app.post("/api/send-email", async (req, res) => {
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
