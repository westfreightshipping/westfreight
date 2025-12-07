import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air freight services for time-sensitive cargo. Global reach with major airline partnerships.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Cost-effective sea freight solutions for large shipments. FCL and LCL options available worldwide.",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description:
      "Comprehensive road transport services with real-time tracking. Nationwide coverage and cross-border solutions.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Secure storage facilities with inventory management. Strategic locations for optimal distribution.",
  },
  {
    icon: Package,
    title: "Custom Clearance",
    description:
      "Expert customs brokerage services. Hassle-free import and export documentation handling.",
  },
  {
    icon: Globe,
    title: "Supply Chain",
    description:
      "End-to-end supply chain solutions. Integrated logistics for seamless operations.",
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div style={{ y: decorY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-navy/5 rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of freight and logistics services tailored to
            meet your unique business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 relative overflow-hidden"
            >
              {/* Subtle accent background on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center mb-6 shadow-lg relative group-hover:from-accent group-hover:to-orange transition-all duration-300"
                whileHover={{ rotateY: 20, rotateX: 10 }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <service.icon className="w-10 h-10 text-white transition-colors duration-300" style={{ transform: "translateZ(10px)" }} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
