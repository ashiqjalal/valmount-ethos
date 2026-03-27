import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import galleryPink from "@/assets/gallery-linen-pink.jpg";
import galleryLavender from "@/assets/gallery-linen-lavender.jpg";
import galleryMint from "@/assets/gallery-linen-mint.jpg";
import gallerySkyblue from "@/assets/gallery-linen-skyblue.jpg";
import galleryPeach from "@/assets/gallery-linen-peach.jpg";
import galleryCream from "@/assets/gallery-linen-cream.jpg";
import galleryDustyrose from "@/assets/gallery-linen-dustyrose.jpg";
import gallerySage from "@/assets/gallery-linen-sage.jpg";

const galleryItems = [
  { image: galleryPink, name: "Riviera Linen — Blush", price: 195 },
  { image: galleryLavender, name: "Riviera Linen — Lavender", price: 195 },
  { image: galleryMint, name: "Riviera Linen — Mint", price: 195 },
  { image: gallerySkyblue, name: "Riviera Linen — Sky", price: 195 },
  { image: galleryPeach, name: "Riviera Linen — Peach", price: 195 },
  { image: galleryCream, name: "Riviera Linen — Cream", price: 195 },
  { image: galleryDustyrose, name: "Riviera Linen — Dusty Rose", price: 195 },
  { image: gallerySage, name: "Riviera Linen — Sage", price: 195 },
];

const LinenGallery = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">
            The Pastel Edit
          </p>
          <h2 className="luxury-heading text-2xl lg:text-3xl mb-4">
            Linen Shirts — Every Shade of Summer
          </h2>
          <p className="luxury-body text-sm text-muted-foreground max-w-lg mx-auto">
            Pure Italian linen in a curated palette of pastel tones. Each shirt washed for effortless softness, cut with a relaxed Mediterranean silhouette.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to="/shop" className="group block">
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-heading text-sm font-medium group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm font-body font-light text-muted-foreground">
                    €{item.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground luxury-subheading text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Shop All Linen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LinenGallery;
