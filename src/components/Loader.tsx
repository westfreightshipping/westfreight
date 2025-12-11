import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Display loader for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation before calling onComplete
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, hsl(25 95% 55%), hsl(4 85% 50%))",
      }}
    >
      <div className="relative inline-block">
        {/* Logo */}
        <img
          src={logo}
          alt="West Freight Shipping"
          className="h-24 md:h-32 w-auto block relative z-10"
          style={{
            filter: "grayscale(100%) brightness(0) invert(1)",
          }}
        />
        
        {/* Shine effect - slanted opacity gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: `url(${logo})`,
            WebkitMaskImage: `url(${logo})`,
            maskSize: "auto 100%",
            WebkitMaskSize: "auto 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          <motion.div
            className="h-full w-[150%]"
            style={{
              background: "linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.8) 70%, transparent 100%)",
              transform: "skewX(-25deg)",
            }}
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.8,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;

