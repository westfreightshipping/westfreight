import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // WhatsApp phone number (remove spaces and special characters)
  const phoneNumber = "97141234567";
  const message = "Hello! I'd like to inquire about your freight services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing background effect */}
      <motion.div
        className="absolute inset-0 bg-accent rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Main button */}
      <div className="relative bg-accent text-white rounded-full p-4 shadow-2xl transition-all duration-300">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
      </div>

      {/* Tooltip - shows on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none opacity-0 transition-all duration-300">
        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-navy" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;

