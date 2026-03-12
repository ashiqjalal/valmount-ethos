import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="luxury-subheading text-xs">Shopping Bag ({items.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-foreground hover:text-accent transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="mt-4 luxury-subheading text-xs">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-8 py-3 bg-primary text-primary-foreground luxury-subheading text-xs hover:bg-charcoal-light transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-heading font-medium">{item.product.name}</h3>
                      <p className="text-xs text-muted-foreground font-body mt-1">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-accent transition-colors"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-xs font-body w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-accent transition-colors"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                      <p className="text-sm font-body">€{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="text-muted-foreground hover:text-foreground transition-colors self-start"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex justify-between mb-4">
              <span className="luxury-subheading text-xs">Total</span>
              <span className="text-lg font-heading">€{totalPrice}</span>
            </div>
            <button className="w-full py-4 bg-primary text-primary-foreground luxury-subheading text-xs hover:bg-charcoal-light transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
