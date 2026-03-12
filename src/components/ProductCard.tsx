import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-foreground hover:text-accent"
          >
            <Heart size={14} />
          </button>
          {product.isNewArrival && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground luxury-subheading text-[10px]">
              New
            </span>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-heading text-sm font-medium group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm font-body font-light text-muted-foreground">€{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
