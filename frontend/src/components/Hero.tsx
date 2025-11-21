import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-welding.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2250749624533?text=Bonjour%20Metal%20Transformer,%20je%20souhaite%20un%20devis", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Soudure professionnelle"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <span className="text-primary font-semibold">🔥 Excellence en Soudure Métallique</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transformez Vos Idées en{" "}
              <span className="text-gradient">Structures d'Acier</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Spécialiste de la soudure métallique à Abidjan. Portails, charpentes, escaliers et meubles sur-mesure. 
              Qualité professionnelle garantie.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={handleWhatsApp}
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Devis Gratuit WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold text-lg border border-border hover:bg-secondary/80 transition-all duration-300"
              >
                Voir nos services
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "10+", label: "Ans d'Expérience" },
              { value: "500+", label: "Projets Réalisés" },
              { value: "100%", label: "Satisfaction Client" },
              { value: "24/7", label: "Service Disponible" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
