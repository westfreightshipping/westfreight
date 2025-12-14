import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Operations Director",
    company: "Gulf Trading Co.",
    content: "West Freight has transformed our supply chain operations. Their reliability and professionalism are unmatched in the Dubai logistics sector.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Import Manager",
    company: "Emirates Retail Group",
    content: "Outstanding service! From air freight to customs clearance, West Freight handles everything seamlessly. They've become our go-to logistics partner.",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    role: "CEO",
    company: "Al Baraka Exports",
    content: "As a startup ourselves, we appreciate how West Freight understands our needs. Fast, reliable, and always transparent with pricing.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    role: "Supply Chain Manager",
    company: "Asia Connect FZE",
    content: "Their ocean freight services are exceptional. West Freight consistently delivers our shipments on time, even during peak seasons.",
    rating: 5,
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="testimonials" className="pt-8 pb-12 md:pt-8 md:pb-16 bg-white relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div style={{ y: decorY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-5">
          <Quote className="w-full h-full text-foreground" />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Client Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by businesses across Dubai, UAE, and the Middle East for reliable freight and logistics solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60, rotateX: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent relative group transition-all"
              style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
            >
              {/* Quote icon */}
              <motion.div 
                className="absolute -top-4 right-6 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
