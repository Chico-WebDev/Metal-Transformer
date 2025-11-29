import { motion } from "framer-motion";
import { Flame, Shield, Drill, Home, Wrench, Settings, Factory, Hammer, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: "Soudure industriel & Métallique",
      description: "Soudure professionnelle MIG, TIG et ARC pour tous types de métaux. Précision et solidité garanties.",
    },
    {
      icon: Shield,
      title: "Portails & Clôtures",
      description: "Conception et installation de portails sur-mesure. Designs modernes et sécurité optimale.",
    },
    {
      icon: Drill,
      title: "Charpentes Métalliques",
      description: "Structures métalliques robustes pour bâtiments industriels et résidentiels.",
    },
    {
      icon: Home,
      title: "Escaliers & Garde-corps",
      description: "Escaliers métalliques élégants et garde-corps de sécurité conformes aux normes.",
    },
    // {
    //   icon: Wrench,
    //   title: "Meubles Métalliques",
    //   description: "Mobilier industriel personnalisé : tables, étagères, bureaux et créations uniques.",
    // },
    {
      icon: Settings,
      title: "Réparations & Modifications",
      description: "Service de réparation et modification de toutes structures métalliques existantes.",
    },
    {
      icon: Wrench,
      title: "Tuyauterie Industrielle",
      description:
        "Installation et fabrication de réseaux de tuyauterie adaptés aux systèmes industriels et résidentiels.",
    },
    {
      icon: Factory,
      title: "Chaudronnerie",
      description:
        "Fabrication, assemblage et transformation de pièces métalliques complexes selon vos besoins.",
    },
    {
      icon: Hammer,
      title: "Ferronnerie",
      description:
        "Créations métalliques décoratives et fonctionnelles : grilles, rampes, portails artistiques et plus.",
    },
    {
      icon: Building,
      title: "Construction Métallique",
      description:
        "Conception et réalisation de structures métalliques durables pour tous types de bâtiments.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes de soudure et fabrication métallique pour tous vos projets
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-metal"
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-primary/10 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Demander un devis personnalisé
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
