import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, Globe, FileText, Container, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const services = [
  {
    icon: Ship,
    title: "Freight Services",
    description: "Air, Ocean & Road freight solutions for all cargo types. Global network with real-time tracking.",
    subServices: ["Air Freight", "Ocean Freight", "Road Freight"]
  },
  {
    icon: Warehouse,
    title: "Storage & Distribution",
    description: "Warehousing and end-to-end supply chain management. Strategic locations across UAE.",
    subServices: ["Warehousing", "Supply Chain Management"]
  },
  {
    icon: Package,
    title: "Customs & Clearance",
    description: "Expert customs brokerage and documentation services. Hassle-free import/export processing.",
    subServices: ["Customs Clearance", "Documentation"]
  },
  {
    icon: Container,
    title: "Specialized Cargo",
    description: "Project cargo, exhibition logistics, and oversized shipments. Expert handling for unique requirements.",
    subServices: ["Project Cargo", "Exhibition Logistics", "Heavy Equipment"]
  },
  {
    icon: FileText,
    title: "Trading Services",
    description: "Complete trade management including compliance, documentation, and international trade facilitation.",
    subServices: ["General Trading", "Trade Compliance"]
  },
  {
    icon: Globe,
    title: "Global Solutions",
    description: "Comprehensive international logistics across 15+ countries. Trusted partnerships worldwide.",
    subServices: ["International Shipping", "Cross-border Logistics"]
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
    <section ref={containerRef} id="services" className="pt-12 pb-6 bg-background relative overflow-hidden">
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
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3 text-balance">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            We offer a wide range of freight and logistics services tailored to meet your unique business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 relative overflow-hidden flex flex-col"
            >
              {/* Subtle accent background on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center mb-4 shadow-md relative group-hover:from-accent group-hover:to-orange transition-all duration-300"
                whileHover={{ rotateY: 20, rotateX: 10 }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <service.icon className="w-7 h-7 text-white transition-colors duration-300" style={{ transform: "translateZ(10px)" }} />
              </motion.div>
              
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 relative z-10 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 relative z-10">
                {service.description}
              </p>
              
              {/* Sub-services list */}
              <ul className="space-y-1.5 relative z-10">
                {service.subServices.map((subService, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                    <span>{subService}</span>
                  </li>
                ))}
              </ul>
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
         
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
