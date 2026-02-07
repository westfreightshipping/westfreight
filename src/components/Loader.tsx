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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      {/* Logo on top */}
      <div className="relative inline-block mb-8">
        <img
          src={logo}
          alt="West Freight Shipping"
          className="h-24 md:h-32 w-auto block relative z-10"
        />
        {/* Shine effect - brand green tint */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-30"
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
            className="h-full w-[150%] bg-[hsl(100,58%,55%)]"
            style={{
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
      {/* Loading bar in brand green */}
      <motion.div
        className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="h-full rounded-full bg-[hsl(100,58%,55%)]"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "40%" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;

