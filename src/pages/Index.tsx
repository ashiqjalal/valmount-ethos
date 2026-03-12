import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-main.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import collectionSummer from "@/assets/collection-summer.jpg";
import collectionEssentials from "@/assets/collection-essentials.jpg";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen">
        <img src={heroImage} alt="VALMOUNT luxury fashion" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-xl"
            >
              <p className="luxury-subheading text-xs text-cream mb-4">Autumn/Winter 2026</p>
              <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-cream font-semibold leading-tight mb-6">
                Timeless Style.<br />Modern Elegance.
              </h1>
              <p className="luxury-body text-sm text-cream/80 mb-8 max-w-md">
                Classic European-inspired fashion for the modern gentleman. Every piece crafted with intention, designed to endure.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-foreground luxury-subheading text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Explore Collection
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider mb-8" />
            <p className="luxury-subheading text-xs text-muted-foreground mb-6">The VALMOUNT Philosophy</p>
            <h2 className="font-heading text-2xl lg:text-3xl mb-6 leading-relaxed">
              Where Heritage Meets<br />Contemporary Refinement
            </h2>
            <p className="luxury-body text-muted-foreground">
              Founded on the principle that true luxury lies in subtlety, VALMOUNT creates garments that speak through quality, not volume. Each piece is a quiet declaration of impeccable taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { img: collectionSummer, title: "Summer Collection", subtitle: "Mediterranean Ease" },
              { img: collectionEssentials, title: "Essentials", subtitle: "Timeless Foundations" },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to="/shop" className="group relative block overflow-hidden aspect-[16/9]">
                  <img
                    src={col.img}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                    <p className="luxury-subheading text-[10px] mb-2">{col.subtitle}</p>
                    <h3 className="luxury-heading text-xl lg:text-2xl">{col.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="luxury-subheading text-xs text-muted-foreground mb-3">Curated Selection</p>
            <h2 className="luxury-heading text-2xl lg:text-3xl">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {bestSellers.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground luxury-subheading text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle banner */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={lifestyle1} alt="VALMOUNT lifestyle" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-12"
            >
              <p className="luxury-subheading text-xs text-muted-foreground mb-4">The Art of Detail</p>
              <h2 className="font-heading text-2xl lg:text-3xl mb-6 leading-relaxed">
                Crafted for Those Who<br />Appreciate the Finer Things
              </h2>
              <p className="luxury-body text-muted-foreground mb-8">
                Every VALMOUNT piece is a testament to meticulous craftsmanship. From the selection of the finest natural fabrics to the precision of every stitch, we honor the traditions of European tailoring while embracing modern sensibilities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 luxury-subheading text-xs text-foreground hover:text-accent transition-colors duration-300"
              >
                Discover Our Story
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle banner 2 */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <img src={lifestyle2} alt="VALMOUNT Mediterranean" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="luxury-subheading text-xs text-cream/80 mb-3">Destination</p>
            <h2 className="luxury-heading text-3xl lg:text-4xl text-cream mb-6">The Mediterranean Life</h2>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-foreground luxury-subheading text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Shop Summer
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-lg">
          <p className="luxury-subheading text-xs text-primary-foreground/50 mb-3">Newsletter</p>
          <h2 className="luxury-heading text-2xl mb-4">Stay in the World of VALMOUNT</h2>
          <p className="luxury-body text-sm text-primary-foreground/60 mb-8">
            Be the first to discover new collections, exclusive offers, and stories of craftsmanship.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 text-sm font-body focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-accent-foreground luxury-subheading text-xs hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-10">
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">@VALMOUNT</p>
          <h2 className="luxury-heading text-2xl">Follow Our World</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {products.map((p) => (
            <a key={p.id} href="#" className="group relative block aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
