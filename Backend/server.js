import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactTemplate from "./emailTemplates/contactTemplate.js";
import path from "path";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

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


// 📩 ROUTE D’ENVOI EMAIL AVEC RESEND
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    await resend.emails.send({
      from: process.env.MAIL_FROM || "Metal Transformer <onboarding@resend.dev>",
      to: process.env.MAIL_TO || "chicowebdev@gmail.com", // Destinataire final
      reply_to: email || undefined,
      subject: "Nouveau message - Metal Transformer",
      html: contactTemplate({ name, phone, email, message }),
    });

    res.json({ success: true, message: "Email envoyé !" });
  } catch (err) {
    console.error("Erreur Resend:", err);
    res.status(500).json({ success: false, message: "Erreur d'envoi" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
