import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "New Arrivals", path: "/shop?filter=new" },
    { label: "Best Sellers", path: "/shop?filter=best" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center py-2">
        <p className="luxury-subheading text-xs">Complimentary Shipping on Orders Over €250</p>
      </div>

      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Nav links left */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="luxury-subheading text-xs text-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link to="/" className="luxury-heading text-xl lg:text-2xl font-semibold text-foreground tracking-[0.2em]">
            VALMOUNT
          </Link>

          {/* Nav links right */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="luxury-subheading text-xs text-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="hidden lg:block text-foreground hover:text-accent transition-colors">
              <Heart size={18} />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-foreground hover:text-accent transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="luxury-subheading text-sm text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
