import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kouassi Jean-Marc",
      role: "Propriétaire, Villa Moderne",
      content: "Travail impeccable sur mon portail et ma clôture. L'équipe est professionnelle, ponctuelle et le résultat dépasse mes attentes. Je recommande vivement Metal Transformer !",
      rating: 5,
    },
    {
      name: "Diallo Aminata",
      role: "Gérante, Restaurant Le Palmier",
      content: "Ils ont fabriqué tout le mobilier métallique de mon restaurant. Design moderne, solide et livraison dans les temps. Un vrai plaisir de travailler avec eux.",
      rating: 5,
    },
    {
      name: "N'Guessan Patrick",
      role: "Directeur, Entreprise BTP",
      content: "Partenaire de confiance pour nos charpentes métalliques. Qualité irréprochable et respect des normes. Plusieurs projets réalisés ensemble avec succès.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-secondary/30">
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
            Avis de nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-metal transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-card border border-border rounded-xl"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-5xl font-bold text-gradient">5.0</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">
            Note moyenne basée sur plus de 100 avis clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
