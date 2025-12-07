import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Smile, Globe, Package, Star, Rocket, BarChart } from "lucide-react";
import { useRef } from "react";

const stats = [
  { number: "50+", label: "Happy Clients", icon: Smile },
  { number: "20+", label: "Countries Served", icon: Globe },
  { number: "500+", label: "Deliveries Completed", icon: Package },
  { number: "100%", label: "Client Satisfaction", icon: Star },
];

const features = [
  "24/7 Customer Support",
  "Real-time Tracking",
  "Secure Cargo Handling",
  "Competitive Pricing",
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="about" className="py-20 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-5">
        <Rocket className="w-full h-full text-foreground" />
      </div>
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-5">
        <BarChart className="w-full h-full text-foreground" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats with parallax */}
          <motion.div style={{ x: leftX, opacity }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card p-6 rounded-xl shadow-card text-center group border border-border hover:border-accent/30 transition-all duration-300"
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-2 text-accent"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <stat.icon className="w-full h-full" />
                  </motion.div>
                  <span className="text-4xl font-bold text-accent">{stat.number}</span>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content with parallax */}
          <motion.div style={{ x: rightX, opacity }}>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-wider text-sm inline-block"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance"
            >
              A Fresh Approach to Global Logistics
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg"
            >
              West Freight Shipping is a dynamic startup revolutionizing the logistics
              industry. We combine innovative technology with personalized service to
              deliver freight solutions that help businesses of all sizes thrive.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg"
            >
              As a young company, we bring fresh ideas, agility, and a customer-first
              mindset to every shipment. Our growing global network and modern approach
              ensure your cargo reaches its destination safely and efficiently.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
