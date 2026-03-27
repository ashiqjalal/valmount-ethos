import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";

const About = () => {
  return (
    <div className="pt-28 lg:pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">Our Story</p>
          <h1 className="luxury-heading text-3xl lg:text-4xl mb-6">About CAVELLONE</h1>
          <div className="luxury-divider mb-8" />
          <p className="luxury-body text-muted-foreground">
            A luxury lifestyle fashion brand inspired by timeless European elegance and refined modern minimalism.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={heroImage} alt="CAVELLONE heritage" className="w-full aspect-[21/9] object-cover" />
        </motion.div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="luxury-subheading text-xs text-muted-foreground mb-4">Heritage</p>
            <h2 className="font-heading text-2xl lg:text-3xl mb-6 leading-relaxed">
              Born from a Reverence<br />for European Tradition
            </h2>
            <p className="luxury-body text-muted-foreground mb-6">
              CAVELLONE was founded with a singular vision: to create clothing that transcends trends and seasons. Drawing inspiration from the sun-washed villas of the Mediterranean, the tailoring houses of Milan, and the understated elegance of old European aristocracy.
            </p>
            <p className="luxury-body text-muted-foreground">
              Every garment is conceived as an heirloom — crafted from the world's finest natural materials and finished with the precision of master artisans. We believe that true luxury is felt, not displayed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={lifestyle2} alt="CAVELLONE inspiration" className="w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="luxury-subheading text-xs text-muted-foreground mb-3">Our Values</p>
            <h2 className="luxury-heading text-2xl lg:text-3xl">The CAVELLONE Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Craftsmanship", desc: "Each piece passes through the hands of skilled artisans who uphold generations of tailoring tradition. We never compromise on construction or finishing." },
              { title: "Sustainability", desc: "We source responsibly, produce consciously, and design to last. Our garments are meant to be worn for years, not seasons." },
              { title: "Timelessness", desc: "We reject the frenzy of fast fashion. Our designs are rooted in enduring style — pieces that look as relevant a decade from now as they do today." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="luxury-divider mb-6" />
                <h3 className="font-heading text-lg mb-4">{v.title}</h3>
                <p className="luxury-body text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-lg">
          <p className="luxury-subheading text-xs text-muted-foreground mb-3">Explore</p>
          <h2 className="luxury-heading text-2xl mb-6">Discover the Collection</h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground luxury-subheading text-xs hover:bg-charcoal-light transition-colors"
          >
            Shop Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
