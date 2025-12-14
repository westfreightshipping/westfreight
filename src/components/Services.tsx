import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, Globe, FileText, Container, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

const services = [
  {
    icon: Plane,
    title: "Freight Coordination",
    description: "Air, ocean, and road freight arrangements worldwide coordinated through accredited global carriers and partners.",
    subServices: ["Air Freight Coordination", "Ocean Freight Coordination", "Road Freight Coordination"]
  },
  {
    icon: Warehouse,
    title: "Storage & Distribution Support",
    description: "Reliable warehousing and distribution options across key UAE locations, ensuring smooth storage, handling, and movement of goods.",
    subServices: ["Warehousing Solutions", "End to End Supply Chain Management"]
  },
  {
    icon: FileText,
    title: "Customs & Documentation",
    description: "End-to-end documentation assistance with seamless customs processes that keep your shipments moving without delays or complications.",
    subServices: ["Customs Processing Assistance", "Import/Export Documentation"]
  },
  {
    icon: Globe,
    title: "Global Freight Solutions",
    description: "Cross-border logistics covering multiple regions and trade lanes, enabling fast, efficient, and dependable cargo movement worldwide.",
    subServices: ["International Freight Options", "Multi-Region Logistics Support"]
  },
  {
    icon: Container,
    title: "Container Handling Support",
    description: "Smooth handling for containerized shipments, including stuffing, de-stuffing, loading, and operational supervision at key UAE facilities.",
    subServices: ["Container Loading/Unloading Support", "Cargo Handling Oversight"]
  },
  {
    icon: Package,
    title: "General Trading",
    description: "Comprehensive trading services facilitating international commerce with expertise in procurement, sourcing, and trade management across global markets.",
    subServices: ["International Trading", "Procurement & Sourcing"]
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
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
          style={{ willChange: 'transform, opacity' }}
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
          {services.map((service, index) => {
            // Alternate directions for mobile: even from left, odd from right
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const isEven = index % 2 === 0;
            const mobileX = isMobile ? (isEven ? -80 : 80) : 0;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: mobileX, y: isMobile ? 30 : 70, rotateX: -10, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
                className="group bg-card rounded-xl p-6 shadow-card transition-all duration-300 border border-border relative overflow-hidden flex flex-col"
                style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
              >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center mb-4 shadow-md relative transition-all duration-300"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <service.icon className="w-7 h-7 text-white transition-colors duration-300" style={{ transform: "translateZ(10px)" }} />
              </motion.div>
              
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 relative z-10 transition-colors duration-300">
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
            );
          })}
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
