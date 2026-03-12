import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="luxury-heading text-lg mb-6 tracking-[0.2em]">VALMOUNT</h3>
            <p className="luxury-body text-sm text-primary-foreground/70 leading-relaxed">
              A luxury lifestyle fashion brand inspired by timeless European elegance and refined modern minimalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="luxury-subheading text-xs mb-6 text-primary-foreground/50">Quick Links</h4>
            <ul className="space-y-3">
              {["Shop All", "New Arrivals", "Best Sellers", "Collections"].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-sm font-body font-light text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="luxury-subheading text-xs mb-6 text-primary-foreground/50">Customer Care</h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Size Guide", "FAQ", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to="/contact"
                    className="text-sm font-body font-light text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="luxury-subheading text-xs mb-6 text-primary-foreground/50">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs font-body font-light text-primary-foreground/40 tracking-wider">
            © {new Date().getFullYear()} VALMOUNT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
