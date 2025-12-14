import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Clock, Award, HeadphonesIcon, Plane, Ship, Truck, Package } from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your cargo is protected with our comprehensive insurance and advanced security measures throughout the journey.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We guarantee punctual deliveries with our optimized routes and real-time monitoring systems.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Fresh perspective with modern logistics solutions, bringing innovative approaches to your shipping needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any queries or concerns.",
  },
];

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} id="why-us" className="py-20 bg-navy text-primary-foreground relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
          <Plane className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-10">
          <Ship className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 opacity-10">
          <Truck className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 opacity-10">
          <Package className="w-full h-full text-primary-foreground" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
            The West Freight Advantage
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Discover why businesses across the UAE trust West Freight for their
            logistics needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-accent to-orange rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative"
                style={{ perspective: "1000px" }}
              >
                <reason.icon className="w-12 h-12 text-accent-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
