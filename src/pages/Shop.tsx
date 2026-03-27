import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (filter === "new") result = result.filter((p) => p.isNewArrival);
    if (filter === "best") result = result.filter((p) => p.isBestSeller);
    if (selectedCategory !== "All") result = result.filter((p) => p.category === selectedCategory);
    return result;
  }, [filter, selectedCategory]);

  const title = filter === "new" ? "New Arrivals" : filter === "best" ? "Best Sellers" : "Shop All";

  return (
    <div className="pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">CAVELLONE Collection</p>
          <h1 className="luxury-heading text-3xl lg:text-4xl">{title}</h1>
        </motion.div>

        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <p className="text-sm font-body text-muted-foreground">{filteredProducts.length} products</p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 luxury-subheading text-xs text-foreground hover:text-accent transition-colors"
          >
            <SlidersHorizontal size={14} />
            {showFilters ? "Hide" : "Filter"}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8 pb-8 border-b border-border"
          >
            <div>
              <p className="luxury-subheading text-[10px] text-muted-foreground mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-body transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-foreground hover:border-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={12} />
                Clear filters
              </button>
            )}
          </motion.div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="luxury-body text-muted-foreground">No products match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
