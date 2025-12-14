import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Network, Award, Shield, Headphones, Zap, DollarSign, Users } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Consistent",
    description: "Reliable delivery timelines and unwavering service quality across all our logistics operations",
  },
  {
    icon: Network,
    title: "Connected",
    description: "Seamlessly integrated global network spanning UAE, Middle East, and worldwide destinations",
  },
  {
    icon: Award,
    title: "Committed",
    description: "Dedicated to excellence in every shipment with 24/7 support and personalized solutions",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "We ensure cargo safety with proper documentation, handling standards, and controlled processes across every stage of transit.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "From booking to documentation, clearance, and door delivery, we manage the entire process smoothly.",
  },
  {
    icon: Zap,
    title: "Fast Quoting",
    description: "Quick and accurate quotations with clear pricing — helping you make fast decisions and avoid delays.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Smart logistics planning that helps you reduce costs without compromising service quality or shipment timelines.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "A skilled logistics team with hands-on expertise across freight, documentation, and global cargo handling.",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} id="why-us" className="pt-8 pb-8 md:pt-8 md:pb-12 bg-white relative overflow-hidden">
      {/* Background decorative elements with parallax */}
      <motion.div 
        style={{ y: parallaxY1 }}
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </motion.div>
      <motion.div 
        style={{ y: parallaxY2 }}
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold uppercase tracking-wider text-sm inline-block mb-3"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Your Trusted Logistics Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We deliver excellence through our core values that drive every aspect of our service
          </p>
        </motion.div>

        {/* Values Grid - First 3 items in one row, remaining items in rows below */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
          {values.slice(0, 3).map((value, index) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const directions = [-100, 0, 100]; // left, center, right
            const mobileX = isMobile ? directions[index % 3] : 0;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: mobileX, y: isMobile ? 20 : 60, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group relative"
                style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
              >
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <motion.div
                  className="relative w-12 h-12 mb-4"
                >
                  {/* Pulsing background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-accent rounded-full"
                  />
                  <div className="relative w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center transition-colors">
                    <value.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
              </motion.div>
            );
          })}
          </div>

          {/* Second row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
          {values.slice(3, 6).map((value, index) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const directions = [-100, 0, 100];
            const mobileX = isMobile ? directions[index % 3] : 0;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: mobileX, y: isMobile ? 20 : 60, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: (index + 3) * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group relative"
                style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
              >
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <motion.div
                  className="relative w-12 h-12 mb-4"
                >
                  {/* Pulsing background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index + 3) * 0.3,
                    }}
                    className="absolute inset-0 bg-accent rounded-full"
                  />
                  <div className="relative w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center transition-colors">
                    <value.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
              </motion.div>
            );
          })}
          </div>

          {/* Third row - 2 items centered */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {values.slice(6).map((value, index) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const mobileX = isMobile ? (index === 0 ? -80 : 80) : 0;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: mobileX, y: isMobile ? 20 : 60, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: (index + 6) * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group relative"
                style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
              >
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <motion.div
                  className="relative w-12 h-12 mb-4"
                >
                  {/* Pulsing background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index + 6) * 0.3,
                    }}
                    className="absolute inset-0 bg-accent rounded-full"
                  />
                  <div className="relative w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center transition-colors">
                    <value.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

