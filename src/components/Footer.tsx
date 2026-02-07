import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 text-slate-800 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img 
                src={logo} 
                alt="West Freight Shipping – Logistics Services Dubai, UAE" 
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your trusted logistics partner in Dubai. We provide innovative freight solutions for businesses of all sizes across the UAE and beyond.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-accent hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-slate-600 transition-colors inline-flex items-center gap-2 hover:text-accent"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h3>
            <ul className="space-y-3">
              {[
                "Air Freight",
                "Ocean Freight",
                "Road Transportation",
                "Warehousing & Distribution",
                "Customs Clearance",
                "Supply Chain Solutions",
                "Logistics Coordination",
                "General Trading",
              ].map((service) => (
                <li key={service}>
                  <div className="text-slate-600 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Al+Quasis+1+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-slate-600 transition-colors">
                    Al Quasis 1, Dubai<br />
                    P.O Box 77660, UAE
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971547810370"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-600 transition-colors">
                    +971 54 781 0370
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@westfreightshipping.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-600 transition-colors">
                    info@westfreightshipping.com
                  </span>
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-slate-200/60 rounded-lg">
              <p className="text-sm font-medium text-slate-800 mb-2">Business Hours</p>
              <p className="text-slate-600 text-sm">Mon - Fri: 9:00 - 18:00</p>
              <p className="text-slate-500 text-xs mt-1">GST (Dubai Time)</p>
            </div>
          </motion.div>
        </div>
      </div>

  

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2025 West Freight Shipping. All rights reserved. | Dubai, UAE
            </p>
            <motion.button
              onClick={scrollToTop}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
