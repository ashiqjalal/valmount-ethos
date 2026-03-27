import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">Get in Touch</p>
          <h1 className="luxury-heading text-3xl lg:text-4xl mb-6">Contact Us</h1>
          <div className="luxury-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-xl mb-4">We'd Love to Hear from You</h2>
              <p className="luxury-body text-sm text-muted-foreground">
                Whether you have a question about our collections, need styling advice, or wish to share feedback, our team is here to assist you.
              </p>
            </div>
            {[
              { icon: MapPin, label: "Visit Us", value: "12 Rue du Faubourg, Paris, France" },
              { icon: Mail, label: "Email", value: "contact@cavellone.com" },
              { icon: Phone, label: "Phone", value: "+33 1 42 00 00 00" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="luxury-subheading text-[10px] text-muted-foreground mb-1">{label}</p>
                  <p className="text-sm font-body">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="luxury-subheading text-[10px] text-muted-foreground mb-2 block">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm font-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="luxury-subheading text-[10px] text-muted-foreground mb-2 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                required
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm font-body focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground luxury-subheading text-xs hover:bg-charcoal-light transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
