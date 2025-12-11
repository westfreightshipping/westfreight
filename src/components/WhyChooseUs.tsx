import { motion } from "framer-motion";
import { Target, Network, Award, Shield, Headphones } from "lucide-react";

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
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="pt-8 pb-8 md:pt-8 md:pb-12 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
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

        {/* Values Grid - First 3 items in one row, last 2 centered in second row */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
          {values.slice(0, 3).map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
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
                  <div className="relative w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
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
          ))}
          </div>

          {/* Second row - 2 items centered */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {values.slice(3).map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                {/* Icon with animated background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-16 h-16 mb-6"
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
                  <div className="relative w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.15 + 0.3 }}
                  className="h-1 bg-accent rounded-full mt-6"
                />
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

