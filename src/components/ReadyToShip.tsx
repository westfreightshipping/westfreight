import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import QuoteForm from "./QuoteForm";

const ReadyToShip = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "97141234567";
  const message = "Hello! I'd like to inquire about your freight services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
      {/* Background decorative elements with parallax */}
      <motion.div 
        style={{ y: parallaxY1, scale }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>
      <motion.div 
        style={{ y: parallaxY2 }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6"
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Ship? We're Ready to Help.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get fast, accurate pricing for your next shipment within minutes.
          </p>
          
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Contact us today for a free consultation and quote
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.button
              onClick={() => setIsQuoteFormOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              <span>Request a Quote</span>
            </motion.button>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-base border border-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </section>
  );
};

export default ReadyToShip;

