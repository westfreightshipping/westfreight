import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Package, Globe, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: 500,
    suffix: "+",
    label: "Shipments Delivered",
    description: "Successful deliveries",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Covered",
    description: "Global reach",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted partnerships",
  },
  {
    icon: Award,
    value: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Reliability guaranteed",
  },
];

const CountUp = ({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, inView]);

  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center"
              >
                <stat.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-primary-foreground font-medium">{stat.label}</p>
              <p className="text-primary-foreground/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
