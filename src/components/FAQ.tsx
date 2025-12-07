import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our freight and logistics services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-card hover:border-accent/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
