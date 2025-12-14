import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import QuoteForm from "./QuoteForm";

const features = [
  "24/7 Customer Support",
  "Real-time Tracking",
  "Secure Cargo Handling",
  "Competitive Pricing",
];

const About = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} id="about" className="pt-8 pb-12 md:pt-8 md:pb-16 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: parallaxY, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </motion.div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
            style={{ willChange: 'transform, opacity' }}
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
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all duration-300 mt-8"
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
            {features.map((feature, index) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const directions = [-80, 80, -80, 80]; // alternate left-right
              const mobileX = isMobile ? directions[index % 4] : 0;
              
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: mobileX, y: isMobile ? 20 : 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm transition-all duration-300 group"
                  style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
                >
                <motion.div
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-accent" />
                </motion.div>
                <p className="text-foreground font-semibold text-sm leading-tight">
                  {feature}
                </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </section>
  );
};

export default About;
