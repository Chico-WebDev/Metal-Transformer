import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-MT.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Soudure industrielle & Métallique", href: "#services" },
      { label: "Portails & Clôtures", href: "#services" },
      { label: "Charpentes", href: "#services" },
      { label: "Escaliers", href: "#services" },
      { label: "Meubles Métalliques", href: "#services" },
    ],
    company: [
      { label: "À Propos", href: "#about" },
      { label: "Nos Réalisations", href: "#gallery" },
      { label: "Avis Clients", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Metal Transformer" className="h-12 w-12" />
              <div>
                <div className="text-lg font-bold text-gradient">METAL TRANSFORMER</div>
                <div className="text-xs text-muted-foreground">Excellence en Soudure</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Spécialiste de la soudure métallique et fabrication sur-mesure à Abidjan. 
              Qualité professionnelle garantie.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+22501020304"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>+225 07 49 62 45 33</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:metaltransformer78@gmail.com"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>metaltransformer78@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Metal Transformer. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
