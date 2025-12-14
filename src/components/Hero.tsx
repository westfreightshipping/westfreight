import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const heroImages = [
  "https://m.media-amazon.com/images/G/31/Amazon-Global-Selling-IN/Blog-banners/Blog_400_What_is_shipping_Know_its_types_and_process.jpeg",
  "https://plus.unsplash.com/premium_photo-1661964050170-b9e54345217d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=3000",
];

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds (slower)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-28"
    >
      {/* Background image slider with smooth crossfade effect and parallax */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 overflow-hidden bg-black"
      >
        {heroImages.map((image, index) => {
          const isActive = index === currentImageIndex;
          const isPrevious = index === (currentImageIndex - 1 + heroImages.length) % heroImages.length;
          const shouldShow = isActive || isPrevious;
          
          if (!shouldShow) return null;
          
          return (
            <motion.div
              key={index}
              initial={isActive ? { opacity: 0 } : { opacity: 1 }}
              animate={{ 
                opacity: isActive ? 1 : 0 
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Dark overlay - stronger to prevent white showing through */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-20 md:py-32"
      >
        {/* Centered content - LOGICO style */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Logistics Simplified —
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block"
              >
                Your Freight, Trading &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block"
              >
                Supply Chain Partner
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Delivering excellence in freight forwarding, international trading, and end-to-end supply chain solutions across UAE, Middle East, and worldwide destinations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full shadow-xl transition-all duration-300">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-12 h-12 bg-white/30 rounded-full"
                    />
                    <div className="relative w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="text-lg font-semibold">Watch video</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/cvH-mHe3GZ4?si=LLhFKHPFpv-zIK8l&autoplay=1"
                title="West Freight Shipping"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
