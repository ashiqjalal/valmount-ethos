import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 text-center py-20">
        <p className="luxury-body text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-flex items-center gap-2 luxury-subheading text-xs text-accent">
          <ArrowLeft size={14} /> Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
  };

  return (
    <div className="pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mb-8 luxury-subheading text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="luxury-subheading text-[10px] text-muted-foreground mb-2">{product.category}</p>
            <h1 className="font-heading text-2xl lg:text-3xl mb-2">{product.name}</h1>
            <p className="text-xl font-body font-light mb-6">€{product.price}</p>

            <div className="luxury-divider !mx-0 mb-6" />

            <p className="luxury-body text-sm text-muted-foreground mb-8">{product.description}</p>

            {/* Size */}
            <div className="mb-6">
              <p className="luxury-subheading text-[10px] text-muted-foreground mb-3">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-10 px-3 text-xs font-body transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-foreground hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="luxury-subheading text-[10px] text-muted-foreground mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-8 text-center font-body">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 py-4 bg-primary text-primary-foreground luxury-subheading text-xs hover:bg-charcoal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selectedSize ? "Add to Bag" : "Select a Size"}
              </button>
              <button className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-all">
                <Heart size={16} />
              </button>
            </div>

            {/* Product details */}
            <div className="mt-10 pt-8 border-t border-border space-y-4">
              <div>
                <p className="luxury-subheading text-[10px] text-muted-foreground mb-1">Collection</p>
                <p className="text-sm font-body">{product.collection}</p>
              </div>
              <div>
                <p className="luxury-subheading text-[10px] text-muted-foreground mb-1">Care</p>
                <p className="text-sm font-body text-muted-foreground">Dry clean recommended. See label for detailed instructions.</p>
              </div>
              <div>
                <p className="luxury-subheading text-[10px] text-muted-foreground mb-1">Shipping</p>
                <p className="text-sm font-body text-muted-foreground">Complimentary shipping on orders over €250. Express delivery available.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="text-center mb-10">
              <p className="luxury-subheading text-xs text-muted-foreground mb-3">You May Also Like</p>
              <h2 className="luxury-heading text-2xl">Related Products</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
