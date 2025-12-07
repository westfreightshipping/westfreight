import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useRef } from "react";

// Real company domains for fetching logos
const partners = [
  { name: "Emirates Logistics", domain: "emirateslogistics.com" },
  { name: "DP World", domain: "dpworld.com" },
  { name: "Al Futtaim", domain: "alfuttaim.com" },
  { name: "Majid Al Futtaim", domain: "majidalfuttaim.com" },
  { name: "Aramex", domain: "aramex.com" },
  { name: "DEWA", domain: "dewa.gov.ae" },
  { name: "Emaar", domain: "emaar.com" },
  { name: "Etisalat", domain: "etisalat.ae" },
];

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Partners
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Trusted by Leading Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Across the UAE and Middle East, industry leaders trust West Freight
            for their logistics needs.
          </p>
        </motion.div>

        {/* Animated logos row */}
        <div className="relative w-full overflow-hidden">
          {/* Mask fading edges for better visual appeal */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-muted to-transparent z-10" />

          <motion.div style={{ x }} className="flex gap-8 justify-center flex-nowrap min-w-max px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 w-[180px] flex flex-col items-center justify-center gap-4"
              >
                <div className="w-20 h-20 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={`https://logo.clearbit.com/${partner.domain}?size=128`}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerText = partner.name[0];
                    }}
                  />
                </div>
                <p className="text-sm font-medium text-foreground/80 text-center">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16"
        >
          {[
            { icon: Award, text: "ISO 9001 Certified" },
            { icon: Shield, text: "Fully Insured" },
            { icon: CheckCircle, text: "Licensed Freight Forwarder" },
            { icon: Globe, text: "Global Network" },
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 bg-background px-5 py-3 rounded-full border border-border shadow-sm"
            >
              <badge.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;