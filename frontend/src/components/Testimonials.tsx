import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const defaultTestimonials = [
    {
      name: "Kouassi Jean-Marc",
      role: "Propriétaire, Villa Moderne",
      content:
        "Travail impeccable sur mon portail et ma clôture. L'équipe est très professionnelle et le résultat dépasse mes attentes.",
      rating: 5,
    },
    {
      name: "Diallo Aminata",
      role: "Gérante, Restaurant Le Palmier",
      content:
        "Ils ont fabriqué tout le mobilier métallique de mon restaurant. Design moderne, solide et livraison rapide.",
      rating: 5,
    },
    {
      name: "N'Guessan Patrick",
      role: "Directeur, Entreprise BTP",
      content:
        "Partenaire fiable pour nos charpentes métalliques. Qualité irréprochable et respect des normes.",
      rating: 5,
    },
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  // Load saved comments
  useEffect(() => {
    const saved = localStorage.getItem("testimonials");
    if (saved) setTestimonials([...defaultTestimonials, ...JSON.parse(saved)]);
  }, []);

  // Add new testimonial
  const handleAdd = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const content = e.target.content.value;

    const newTestimonial = {
      name,
      role,
      content,
      rating: 5,
    };

    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);

    // save in storage (only user-added)
    const customOnly = updated.slice(defaultTestimonials.length);
    localStorage.setItem("testimonials", JSON.stringify(customOnly));

    e.target.reset();
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Avis de nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6 text-base md:text-lg leading-relaxed flex-grow line-clamp-6">
            La satisfaction de nos clients est notre priorité
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto h-[300px] md:h-[360px]  flex items-center">
         <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setIsAnimating(false)}
            className="
              bg-card border p-6 md:p-10 rounded-xl shadow-lg relative
              w-full
              h-[320px] md:h-[300px]
              flex flex-col justify-between
            "
          >
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed overflow-auto max-h-[140px]">
              "{testimonials[current].content}"
            </p>

            <div>
              <div className="font-bold text-foreground">{testimonials[current].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>


          {/* Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-card p-3 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-card p-3 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Add Testimonial Form */}
        <div className="mt-16 max-w-3xl mx-auto bg-card p-8 border rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-6">Laissez votre avis</h3>

          <form onSubmit={handleAdd} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="w-full p-3 border rounded-lg bg-background"
            />

            <input
              type="text"
              name="role"
              placeholder="Votre profession ou entreprise"
              required
              className="w-full p-3 border rounded-lg bg-background"
            />

            <textarea
              name="content"
              placeholder="Votre commentaire..."
              required
              className="w-full p-3 border rounded-lg bg-background h-32"
            />

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition"
            >
              Envoyer mon avis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
