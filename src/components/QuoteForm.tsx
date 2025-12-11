import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm = ({ isOpen, onClose }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    deliverCity: "",
    departureCity: "",
    freightType: "Truck Freight",
    incoterms: "EXW",
    weight: "",
    height: "",
    length: "",
    width: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-white p-6 md:p-8 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 text-gray-600 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Request a quote
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="overflow-y-auto p-6 md:p-8 space-y-4 bg-white">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Deliver City */}
              <div>
                <input
                  type="text"
                  name="deliverCity"
                  placeholder="Deliver City"
                  value={formData.deliverCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* City of departure */}
              <div>
                <input
                  type="text"
                  name="departureCity"
                  placeholder="City of departure"
                  value={formData.departureCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Freight Type */}
              <div>
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Freight Type
                  </label>
                  <select
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all appearance-none bg-white cursor-pointer text-accent font-medium"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option>Truck Freight</option>
                    <option>Air Freight</option>
                    <option>Ocean Freight</option>
                    <option>Rail Freight</option>
                  </select>
                </div>
              </div>

              {/* Incoterms */}
              <div>
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Incoterms
                  </label>
                  <select
                    name="incoterms"
                    value={formData.incoterms}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all appearance-none bg-white cursor-pointer text-accent font-medium"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option>EXW</option>
                    <option>FOB</option>
                    <option>CIF</option>
                    <option>DAP</option>
                    <option>DDP</option>
                  </select>
                </div>
              </div>

              {/* Weight */}
              <div>
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Height */}
              <div>
                <input
                  type="text"
                  name="height"
                  placeholder="Height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Length */}
              <div>
                <input
                  type="text"
                  name="length"
                  placeholder="Length"
                  value={formData.length}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Width */}
              <div>
                <input
                  type="text"
                  name="width"
                  placeholder="Width"
                  value={formData.width}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Additional information..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none text-foreground placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-orange-hover text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 mt-6"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteForm;

