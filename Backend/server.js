import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import contactTemplate from "./emailTemplates/contactTemplate.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static("public"));

// const __dirname = path.resolve();

app.use(cors({
	origin: ["http://localhost:8080", "https://metal-transformer.onrender.com", "https://metal-transformer.vercel.app"], // ou l'URL de ton frontend
	credentials: true, // 🔥 autorise les cookies cross-origin
}));



// servir les fichiers du frontend
// Pour __dirname avec ES modules
const __dirname = path.resolve();

// Sert le frontend build (Vite)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

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
