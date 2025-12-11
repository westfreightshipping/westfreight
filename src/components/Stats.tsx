import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Package, Globe2, Warehouse, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: 500,
    suffix: "+",
    label: "Shipments Delivered",
    description: "Successfully handled and delivered across UAE and Middle East",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: TrendingUp,
    value: 1200,
    suffix: "+",
    label: "Tons Transported",
    description: "Total cargo weight moved for our valued clients",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Globe2,
    value: 15,
    suffix: "+",
    label: "Countries Served",
    description: "Growing international network across key trading regions",
    bgImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Warehouse,
    value: 3,
    suffix: "",
    label: "Partner Warehouses",
    description: "Strategic storage facilities in Dubai and Abu Dhabi",
    bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
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
    <section ref={ref} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Animated background gradient blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Grid of stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Background Image */}
              <motion.div 
                className="absolute inset-0"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={stat.bgImage} 
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Animated overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"
                whileHover={{ 
                  background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles effect on hover */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/60 rounded-full"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${40 + i * 15}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                {/* Icon with continuous animation */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <stat.icon className="w-10 h-10 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
                </motion.div>

                <div>
                  {/* Number with outline and pulse */}
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold mb-3 group-hover:text-accent"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px rgb(235, 231, 229)',
                      fontFamily: 'var(--font-heading)',
                      filter: 'drop-shadow(0 0 10px rgba(255, 127, 41, 0.3))',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      filter: 'drop-shadow(0 0 20px rgba(255, 127, 41, 0.6))',
                    }}
                  >
                    <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
                  </motion.div>
                  
                  {/* Label with slide up animation */}
                  <motion.h3 
                    className="text-white text-lg md:text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-white/80 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {stat.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
