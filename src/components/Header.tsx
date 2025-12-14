import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ChevronDown, ChevronRight, FileText, ArrowUpRight, Facebook, Twitter, Linkedin, Play } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import QuoteForm from "./QuoteForm";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
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
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`transition-all duration-500 rounded-full bg-white ${
          scrolled 
            ? "shadow-lg" 
            : "shadow-md"
        }`}>
          <div className="flex items-center justify-between h-16 lg:h-20 px-6">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="West Freight Shipping" className="h-12 md:h-14 lg:h-16" />
            </motion.a>

            {/* Centered Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    ${activeLink === link.href 
                      ? "text-accent bg-accent/10" 
                      : "text-gray-700"
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Right side - Phone and CTA */}
            <div className="flex items-center gap-3">
              {/* Phone number - Desktop */}
              <motion.a
                href="tel:+97141234567"
                className="hidden xl:flex items-center text-gray-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">+971 4 123 4567</span>
              </motion.a>

              {/* Get Quote Button - Desktop */}
              <motion.button
                onClick={() => setIsQuoteFormOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                className="lg:hidden p-2 text-gray-700 hover:text-accent transition-colors rounded-full hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - LOGICO style sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                {/* Top icons */}
                <div className="flex items-center justify-end gap-2 p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600"
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteFormOpen(true);
                    }}
                    aria-label="Get a Quote"
                  >
                    <FileText className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="px-6 py-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between py-3.5 text-base font-normal transition-colors border-b border-gray-100
                        ${activeLink === link.href 
                          ? "text-accent" 
                          : "text-gray-800 hover:text-gray-900"
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${activeLink === link.href ? 'text-accent' : 'text-gray-400'}`} />
                    </motion.a>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="px-6 py-6 border-t border-gray-200 space-y-5">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Phone</h3>
                    <div className="space-y-2">
                      <a href="tel:+97141234567" className="block text-sm text-gray-600 transition-colors">
                        +971 4 123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Email</h3>
                    <a href="mailto:info@westfreightshipping.com" className="block text-sm text-gray-600 transition-colors">
                      info@westfreightshipping.com
                    </a>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                      {[
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Play, href: "#", label: "YouTube" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Get a Quote Button - Mobile */}
                <div className="px-6 py-6">
                  <motion.button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteFormOpen(true);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 px-6 rounded-full font-semibold text-base shadow-lg transition-all duration-300"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Get a Quote</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  );
};

export default Header;
