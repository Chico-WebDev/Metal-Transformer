import { motion } from "framer-motion";
import { Award, Users, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Excellence et précision dans chaque soudure, respect des normes les plus strictes.",
    },
    {
      icon: Users,
      title: "Équipe Experte",
      description: "Soudeurs certifiés avec plus de 10 ans d'expérience dans la soudure industrielle & métallique.",
    },
    {
      icon: Target,
      title: "Sur-mesure",
      description: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques.",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Devis rapide, délais respectés et service après-vente disponible 24/7.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-gradient">Metal Transformer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Basés à Abidjan, nous sommes spécialisés dans la soudure industrielle & métallique et la fabrication 
              de structures sur-mesure depuis plus de 10 ans.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              Notre mission est de transformer vos idées en réalité métallique avec une qualité 
              professionnelle, des délais respectés et un service client irréprochable.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Notre Vision</h4>
                  <p className="text-muted-foreground">
                    Devenir la référence en soudure industrielle & métallique en Côte d'Ivoire, reconnue pour 
                    l'innovation et la qualité de nos réalisations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Notre Engagement</h4>
                  <p className="text-muted-foreground">
                    Satisfaction client à 100%, matériaux de première qualité et respect 
                    scrupuleux des normes de sécurité.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 shadow-card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
