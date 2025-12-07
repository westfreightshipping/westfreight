import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, FileText, Globe } from "lucide-react";

interface ServiceIcon3DProps {
  type: "air" | "ocean" | "road" | "warehouse" | "customs" | "supply";
  className?: string;
}

export const ServiceIcon3D = ({ type, className = "" }: ServiceIcon3DProps) => {
  const icons: Record<string, { icon: typeof Plane; gradient: string }> = {
    air: { icon: Plane, gradient: "from-blue-400 to-sky-500" },
    ocean: { icon: Ship, gradient: "from-cyan-400 to-blue-600" },
    road: { icon: Truck, gradient: "from-orange-400 to-orange-600" },
    warehouse: { icon: Warehouse, gradient: "from-gray-400 to-gray-600" },
    customs: { icon: FileText, gradient: "from-green-400 to-emerald-600" },
    supply: { icon: Globe, gradient: "from-purple-400 to-indigo-600" },
  };

  const iconData = icons[type];
  const IconComponent = iconData.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotateY: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${iconData.gradient} flex items-center justify-center shadow-lg`}
        style={{
          transform: "rotateX(10deg) rotateY(-10deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <IconComponent className="w-10 h-10 text-white" style={{ transform: "translateZ(10px)" }} />
      </div>
      {/* Shadow effect */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full blur-md"
        style={{ transform: "translateZ(-20px)" }}
      />
    </motion.div>
  );
};

interface LogisticsIllustrationProps {
  className?: string;
}

export const LogisticsIllustration = ({ className = "" }: LogisticsIllustrationProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full"
      >
        {/* Globe base */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-48 h-48 rounded-full border-2 border-dashed border-accent/30" />
        </motion.div>

        {/* Orbiting elements */}
        {[0, 1, 2].map((i) => {
          const icons = [Plane, Ship, Truck];
          const IconComponent = icons[i];
          return (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{ transform: `rotate(${i * 120}deg)` }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                <IconComponent className="w-8 h-8 text-accent" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 text-accent"
          >
            <Globe className="w-full h-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
