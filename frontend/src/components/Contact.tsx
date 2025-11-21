import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
  }

    // Message WhatsApp
const handleWhatsAppSubmit = (e) => {
  e.preventDefault();

  const whatsappMessage = `
*Bonjour Metal Transformer,*

Je vous contacte pour une prise d'information / demande de service.

*Nom :* ${formData.name}
*Téléphone :* ${formData.phone}
*Email :* ${formData.email}

*Message :*
${formData.message}

Merci de votre retour.
Metal Transformer ⚙️🔥
`;

  const whatsappUrl = `https://wa.me/2250749624533?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, "_blank");
  toast.success("Redirection vers WhatsApp...");

  setFormData({ name: "", phone: "", email: "", message: "" });
};


const handleEmailSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://metal-transformer.onrender.com/send-email", formData);

    if (res.data.success) {
      toast.success("Email envoyé !");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      toast.error("Erreur d'envoi !");
    }
  } catch (err) {
    console.error(err);
    toast.error("Erreur d'envoi !");
  }
};

  

  const handleWhatsApp = () => {
    window.open("https://wa.me/2250749624533?text=Bonjour%20Metal%20Transformer,%20je%20souhaite%20un%20devis", "_blank");
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 07 49 62 45 33",
      href: "tel:+2250749624533",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@metaltransformer.ci",
      href: "mailto:chicowebdev@gmail.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Abidjan, Côte d'Ivoire",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? Nous sommes à votre écoute 24/7
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                        <div className="font-semibold">{info.content}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-primary/10 border border-primary/30 rounded-xl"
            >
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Besoin urgent ?</h4>
              <p className="text-muted-foreground mb-4">
                Contactez-nous directement sur WhatsApp pour une réponse immédiate
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nom complet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Téléphone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+225 XX XX XX XX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>
              <div className="flex gap-2 md:gap-4 lg:gap-6">
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="w-full flex items-center justify-center gap-2 px-2 py-3 lg:px-8 lg:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer via WhatsApp
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    Vous serez redirigé vers WhatsApp pour finaliser l'envoi
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                <button
                  onClick={handleEmailSubmit}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 lg:px-8 lg:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  Envoyer via Email
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Vous serez redirigé vers Gmail pour finaliser l'envoi
                </p>
              </div>
            </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
