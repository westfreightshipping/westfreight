import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useRef, useState } from "react";

// Partner companies organized by category
const partnerCategories = [
  {
    category: "Air Cargo Carriers",
    partners: [
      { name: "Emirates SkyCargo", domain: "emirates.com", logo: null },
      { name: "Qatar Airways Cargo", domain: "qatarairways.com", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHZkqS9-3IN9A/company-logo_200_200/company-logo_200_200/0/1630578202866/qatar_airways_cargo_logo?e=2147483647&v=beta&t=z22ZSuO5eIJjl1Dc4FnDLhMe4PopKYpPWBMkBHcqf94" },
      { name: "Etihad Cargo", domain: "etihad.com", logo: null },
    ]
  },
  {
    category: "Ocean Shipping Lines",
    partners: [
      { name: "Maersk", domain: "maersk.com", logo: null },
      { name: "MSC", domain: "msc.com", logo: "https://assets.msc.com/api/public/content/0d2d7d7124c84ecbbc73f0da9689f43b?v=18064e2e&la=en&h=713&w=658" },
      { name: "CMA CGM", domain: "cma-cgm.com", logo: null },
    ]
  },
  {
    category: "Express & Courier",
    partners: [
      { name: "DHL Express", domain: "dhl.com", logo: "https://www.citypng.com/public/uploads/preview/download-round-dhl-express-delivery-logo-icon-png-701751695035671nhorrw95xk.png" },
      { name: "FedEx", domain: "fedex.com", logo: "https://1000logos.net/wp-content/uploads/2017/07/FedEx-logo.jpg" },
    ]
  },
];

// Flatten partners for display
const partners = partnerCategories.flatMap(category => category.partners);

// Component to handle individual partner logo with fallback
const PartnerLogo = ({ partner, size = "medium" }: { partner: typeof partners[0]; size?: "medium" | "large" }) => {
  const [imageError, setImageError] = useState(false);
  const [currentSource, setCurrentSource] = useState(0);
  
  // Build logo sources array - use direct logo first if available, then fallbacks
  const logoSources = partner.logo 
    ? [
        partner.logo,
        `https://logo.clearbit.com/${partner.domain}`,
        `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`,
        `https://icon.horse/icon/${partner.domain}`,
      ]
    : [
        `https://logo.clearbit.com/${partner.domain}`,
        `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`,
        `https://icon.horse/icon/${partner.domain}`,
      ];

  const handleImageError = () => {
    if (currentSource < logoSources.length - 1) {
      setCurrentSource(currentSource + 1);
    } else {
      setImageError(true);
    }
  };

  const sizeClasses = size === "large" ? "w-20 h-20" : "w-16 h-16";
  const initialSize = size === "large" ? "text-3xl" : "text-2xl";

  if (imageError) {
    return (
      <div className={`${sizeClasses} bg-accent/10 rounded-full flex items-center justify-center`}>
        <span className={`${initialSize} font-bold text-accent`}>
          {partner.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} flex items-center justify-center`}>
      <img
        src={logoSources[currentSource]}
        alt={`${partner.name} logo`}
        className="max-w-full max-h-full object-contain"
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="pt-8 pb-12 md:pt-8 md:pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3 md:mb-4">
            Our Network Includes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Partnering with world-class carriers and logistics providers to deliver exceptional service.
          </p>
        </motion.div>

        {/* Partners organized by category */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground text-center">
                {category.category}
              </h3>
              
              {/* Mobile: Grid view */}
              <div className="grid grid-cols-2 gap-4 md:hidden">
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-4 min-h-[140px] transition-all duration-300"
                  >
                    <PartnerLogo partner={partner} size="medium" />
                    <p className="text-sm font-semibold text-foreground text-center leading-tight">
                      {partner.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Desktop: Horizontal scroll */}
              <div className="hidden md:block relative overflow-hidden">
                <div className="flex gap-6 justify-center flex-wrap">
                  {category.partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition-all duration-300 w-[200px] flex flex-col items-center justify-center gap-4 grayscale"
                    >
                      <PartnerLogo partner={partner} size="large" />
                      <p className="text-sm font-semibold text-foreground text-center leading-tight">
                        {partner.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Partners;