import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import QuoteForm from "./QuoteForm";

const features = [
  "24/7 Customer Support",
  "Real-time Tracking",
  "Secure Cargo Handling",
  "Competitive Pricing",
];

const About = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  return (
    <section id="about" className="pt-8 pb-12 md:pt-8 md:pb-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-wider text-sm inline-block"
            >
              About Us
            </motion.span>
         
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                West Freight Shipping delivers comprehensive logistics solutions across UAE, Middle East, and worldwide destinations. With over a decade of expertise, we combine cutting-edge technology with personalized service to move your cargo efficiently and securely.
              </p>
              <p>
                From air and ocean freight to customs clearance and supply chain management, we're your trusted partner in global trade.
              </p>
            </div>

            <motion.button
              onClick={() => setIsQuoteFormOpen(true)}
              whileHover={{ scale: 1.05, gap: '1rem' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent hover:bg-orange-hover text-accent-foreground px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all duration-300 mt-8"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right - Features in cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-accent" />
                </motion.div>
                <p className="text-foreground font-semibold text-sm leading-tight">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </section>
  );
};

export default About;
