import poloNavy from "@/assets/product-polo-navy.jpg";
import linenWhite from "@/assets/product-linen-white.jpg";
import trousersBeige from "@/assets/product-trousers-beige.jpg";
import loafersBrown from "@/assets/product-loafers-brown.jpg";
import shirtBlue from "@/assets/product-shirt-blue.jpg";
import poloGreen from "@/assets/product-polo-green.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  image: string;
  description: string;
  sizes: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Heritage Polo — Navy",
    price: 145,
    category: "Polo Shirts",
    collection: "Essentials",
    image: poloNavy,
    description: "Crafted from premium long-staple Egyptian cotton piqué, this polo embodies quiet sophistication. The relaxed yet refined silhouette features mother-of-pearl buttons and a subtly embroidered VALMOUNT monogram.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Riviera Linen Shirt",
    price: 195,
    category: "Linen Shirts",
    collection: "Summer",
    image: linenWhite,
    description: "Pure Italian linen, washed for effortless softness. Cut with a relaxed Mediterranean silhouette, this shirt transitions seamlessly from coastal afternoons to candlelit evenings.",
    sizes: ["S", "M", "L", "XL"],
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Tailored Chinos — Sand",
    price: 175,
    category: "Trousers",
    collection: "Essentials",
    image: trousersBeige,
    description: "Impeccably tailored from brushed Italian cotton twill. The mid-rise slim fit with a gentle taper creates a clean, modern line. Finished with horn buttons and a hidden clasp.",
    sizes: ["28", "30", "32", "34", "36"],
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Classico Penny Loafers",
    price: 395,
    category: "Loafers",
    collection: "Essentials",
    image: loafersBrown,
    description: "Hand-stitched in a family-owned Italian atelier using full-grain calfskin leather. The Blake-stitched construction ensures flexibility and elegance, while the leather sole develops a beautiful patina over time.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    isNewArrival: true,
  },
  {
    id: "5",
    name: "Oxford Shirt — Celeste",
    price: 165,
    category: "Classic Shirts",
    collection: "Essentials",
    image: shirtBlue,
    description: "A wardrobe cornerstone crafted from Japanese selvedge oxford cloth. The button-down collar and precise tailoring reflect our commitment to understated excellence.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Heritage Polo — Sage",
    price: 145,
    category: "Polo Shirts",
    collection: "Summer",
    image: poloGreen,
    description: "The same impeccable construction as our Heritage Polo in a refined sage green. Premium Egyptian cotton piqué with a naturally breathable hand feel, perfect for warm-weather refinement.",
    sizes: ["S", "M", "L", "XL"],
    isNewArrival: true,
  },
];

export const categories = ["All", "Polo Shirts", "Classic Shirts", "Linen Shirts", "Trousers", "Loafers"];
export const collections = ["All", "Essentials", "Summer"];
