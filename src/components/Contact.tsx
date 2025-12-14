import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import QuoteForm from "./QuoteForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Al Quasis 1, Dubai", "P.O Box 77660, UAE"],
    link: "https://maps.google.com/?q=Al+Quasis+1+Dubai",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+971 4 123 4567"],
    link: "tel:+97141234567",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@westfreightshipping.com"],
    link: "mailto:info@westfreightshipping.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 - 18:00"],
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
    message: "",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, show success toast - backend can be connected later
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 2 business hours.",
      });
      setFormData({ name: "", email: "", phone: "", requirements: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={containerRef} id="contact" className="pt-12 pb-12 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background decoration with parallax */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to streamline your logistics? Contact our Dubai team today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-card p-6 rounded-xl shadow-card border border-border/50 group"
                  style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
                >
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-colors">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm transition-colors">
                          {detail}
                        </p>
                      ))}
                    </a>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Quote Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <motion.button
                onClick={() => setIsQuoteFormOpen(true)}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 px-6 rounded-full font-semibold text-base shadow-lg transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>Get Quick Quote</span>
              </motion.button>
            </motion.div>

            {/* Map embed placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 rounded-xl overflow-hidden shadow-card border border-border/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28859.45375953959!2d55.37095!3d25.28489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ca1cd3!2sAl%20Qusais%20-%20Dubai!5e0!3m2!1sen!2sae!4v1699900000000!5m2!1sen!2sae"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Freight Shipping Location - Al Quasis Dubai"
                className="grayscale transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card border border-border/50">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  />
                </motion.div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Shipping Requirements (e.g., Air freight from China to Dubai, 500kg electronics)"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="Additional Details (origin, destination, cargo type, timeline...)"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 mb-4 resize-none"
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>

              <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>We typically respond within 2 business hours during working days (Mon-Fri, 9AM-6PM GST)</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </section>
  );
};

export default Contact;
