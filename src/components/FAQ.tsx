import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What freight services does West Freight offer in Dubai?",
    answer:
      "West Freight offers comprehensive logistics services including air freight, ocean freight, road transportation, warehousing, customs clearance, and supply chain management throughout Dubai, UAE, and internationally. We handle everything from small packages to large industrial cargo.",
  },
  {
    question: "How long does shipping typically take?",
    answer:
      "Shipping times vary based on the service and destination. Air freight typically takes 1-5 days for international shipments, ocean freight takes 2-6 weeks depending on the route, and road freight within the UAE is usually same-day or next-day. We'll provide exact timelines when you request a quote.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes! Our expert customs brokerage team handles all import and export documentation, ensuring hassle-free clearance at all UAE ports and airports. We navigate complex regulations so you don't have to.",
  },
  {
    question: "What types of cargo do you transport?",
    answer:
      "We transport all types of cargo including general goods, perishables, hazardous materials (with proper certification), oversized cargo, vehicles, and specialized equipment. Our team has expertise in handling sensitive and high-value shipments.",
  },
  {
    question: "Do you offer warehousing services?",
    answer:
      "Yes, we offer secure warehousing facilities in strategic locations across Dubai and the UAE. Our warehouses feature climate control, 24/7 security, inventory management systems, and flexible short-term or long-term storage options.",
  },
  {
    question: "How do I get a quote for my shipment?",
    answer:
      "Getting a quote is easy! You can fill out our online quote form, call us at +971 543703221, or email info@westfreight.com with your shipment details. We typically respond within 2 hours during business hours.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Our office is open Monday to Friday, 9:00 AM to 6:00 PM (GST). However, our logistics operations run 24/7 to ensure timely deliveries. For urgent inquiries outside business hours, you can still reach us via phone.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border last:border-b-0 py-2"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 flex items-start justify-between gap-4 text-left group transition-all hover:bg-accent/5 rounded-lg"
      >
        <span className="text-base md:text-lg font-semibold text-foreground pr-8 group-hover:text-accent transition-colors">
          {faq.question}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors"
        >
          <Plus className={`w-4 h-4 transition-colors ${isOpen ? 'text-accent' : 'text-muted-foreground group-hover:text-white'}`} strokeWidth={2.5} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground leading-relaxed pb-4 pt-2 px-4 text-sm md:text-base">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="pt-8 pb-12 md:pt-8 md:pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3"
          >
            Questions & Answers
          </motion.span>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our freight and logistics services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden"
        >
          <div className="p-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;