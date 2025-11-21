export default function contactTemplate({ name, phone, email, message }) {
  return `
  <div style="width:100%; padding:20px; background:#f5f5f5; font-family:Arial, sans-serif;">

    <div style="max-width:700px; margin:auto; background:#ffffff; padding:20px; border-radius:10px; border-left:4px solid #E67E22">

      <!-- Logo -->
      <div style="text-align:center; margin-bottom:20px;">
        <img src="./logo-MT.jpg" width="130" alt="Logo Metal Transformer" />
      </div>

      <!-- Header -->
      <h2 style="text-align:center; color:#E67E22; margin-bottom:5px;">
        Nouveau message reçu ⚙️🔥
      </h2>
      <p style="text-align:center; color:#333; margin-bottom:30px;">
        Une demande vient d'être envoyée depuis le site Metal Transformer
      </p>

      <!-- Infos -->
      <div style="font-size:16px; line-height:1.6; color:#222;">
        <p><strong style="color:#E67E22;">Nom :</strong> ${name}</p>
        <p><strong style="color:#E67E22;">Téléphone :</strong> ${phone}</p>
        <p><strong style="color:#E67E22;">Email :</strong> ${email || "Non fourni"}</p>

        <p style="margin-top:25px; font-weight:bold; color:#E67E22; font-size:18px;">
          Message :
        </p>
        <div style="padding:15px; background:#fafafa; border-left:4px solid #E67E22;">
          ${message}
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align:center; margin-top:35px; color:#777; font-size:13px;">
        — Metal Transformer —<br />
        Métallerie • Soudure • Fabrication sur mesure <br />
        Abidjan, Côte d'Ivoire 🇨🇮
      </div>
    </div>
  </div>
  `;
}

