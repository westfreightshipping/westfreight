import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-lg shadow-nav" : "bg-background"}`}>
      {/* Top bar with logo and contact info */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="West Freight Shipping - Freight Company Dubai" className="h-12 md:h-14" />
            </motion.a>

            {/* Contact info - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <motion.a 
                href="tel:+971543703221"
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="text-foreground font-medium">+971 543703221</p>
                  <p className="text-muted-foreground">info@westfreight.com</p>
                </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="text-foreground font-medium">Al Quasis 1, Dubai</p>
                  <p className="text-muted-foreground">P.O Box 77660</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="text-foreground font-medium">9:00 - 18:00</p>
                  <p className="text-muted-foreground">Monday - Friday</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Navigation bar - desktop */}
      <nav className="hidden lg:block bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative
                  ${activeLink === link.href 
                    ? "text-accent" 
                    : "text-foreground hover:text-accent"
                  }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeLink === link.href && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" 
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsOpen(false);
                  }}
                  className={`py-3 px-4 text-sm font-medium uppercase tracking-wide rounded-md transition-all duration-300
                    ${activeLink === link.href 
                      ? "text-accent bg-accent/10" 
                      : "text-foreground hover:text-accent hover:bg-muted"
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <a href="tel:+971543703221" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+971 543703221</span>
                </a>
                <a href="mailto:info@westfreight.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>info@westfreight.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Al Quasis 1, Dubai</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Mon - Fri: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
