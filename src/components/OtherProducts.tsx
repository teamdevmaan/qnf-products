import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import thulsiImg from "@/assets/thulasi-honey.png";
import jamunImg from "@/assets/jamun-honey.png";
import multifloralImg from "@/assets/multi-flora.png";
import beePollenImg from "@/assets/bee-pollen.jpg";

import curryleavesImg from "@/assets/curry-leaves.png";
import fenugreekImg from "@/assets/fenugreek.png";
import garlicPowderImg from "@/assets/garlic.png";
import gingerImg from "@/assets/ginger.png";
import chilliImg from "@/assets/chilli-flakes.png";
import jackfruitImg from "@/assets/jackfruit.png";
import okraImg from "@/assets/okra.png";
import moringaleavesImg from "@/assets/moringa-leaves.png";
import moringapowderImg from "@/assets/moringa-powder.png";
import papayaImg from "@/assets/papaya.png";
import bananaflakesImg from "@/assets/bananaflakes.png";
import bananapowderImg from "@/assets/bananapowder.png";
import sorrelleavesImg from "@/assets/sorrelleaves.png";
import guavaleavesImg from "@/assets/guavaleaves.png";
import bitterguardImg from "@/assets/bitterguard.png";
import carrotImg from "@/assets/carrot.png";
import amlaImg from "@/assets/amla.png";
import beetrootImg from "@/assets/beetroot.png";
import bitterguardpowderImg from "@/assets/bitterguardpowder.png";
import carrotpowderImg from "@/assets/carrotpowder.png";
import spinachpowderImg from "@/assets/spinachpowder.png";
import onionpowderImg from "@/assets/onionpowder.png";


gsap.registerPlugin(ScrollTrigger);

const honeyProducts = [
  {
    title: "QNF Thulasi Honey",
    image: thulsiImg,
    description:
      "Thulasi Honey is collected from bees that gather nectar from Tulsi (holy basil) flowers, known for their natural medicinal properties. It has a smooth texture with a mild herbal aroma and is valued for supporting immunity and respiratory wellness. Perfect for herbal teas, natural remedies, and everyday healthy sweetening.",
  },
  {
    title: "QNF Black Jamun Honey",
    image: jamunImg,
    description:
      "Black Jamun Honey is harvested from the nectar of Jamun tree blossoms, giving it a naturally dark color and rich flavor. It is widely appreciated for its antioxidant content and digestive health benefits. A premium honey ideal for daily consumption, wellness drinks, and natural sweetening.",
  },
  {
    title: "QNF Multi-Floral Honey",
    image: multifloralImg,
    description:
      "Multi Flora Honey is produced when bees collect nectar from multiple seasonal flowers, resulting in a balanced flavor and natural sweetness. It contains a variety of nutrients and enzymes derived from diverse floral sources. Ideal for daily use in tea, breakfast foods, desserts, and healthy diets.",
  },
  {
    title: "QNF Bee Pollen",
    image: beePollenImg,
    description:
      "Bee Pollen is a natural superfood collected by bees from flower pollen and packed with proteins, vitamins, minerals, and antioxidants. It is widely consumed as a nutritional supplement to support energy, immunity, and overall wellness. Commonly added to smoothies, yogurt, cereals, or consumed directly.",
  },
];

const powders = [
  {
    name: "QNF Dehydrated Curry Leaves Powder",
    image: curryleavesImg,
    desc: "Finely ground dehydrated curry leaves with rich aroma and natural flavor, ideal for seasoning blends, curries, and traditional dishes.",
  },
  {
    name: "QNF Garlic Powder",
    image: garlicPowderImg,
    desc: "High-quality dehydrated garlic powder with strong flavor and aroma, widely used for seasoning, sauces, marinades, and spice blends.",
  },
  {
    name: "QNF Dehydrated Ginger Powder",
    image: gingerImg,
    desc: "Pure dehydrated ginger powder with a warm, spicy flavor, ideal for beverages, baked goods, seasonings, and health formulations.",
  },
  {
    name: "QNF Dehydrated Jackfruit Powder",
    image: jackfruitImg,
    desc: "Natural dehydrated jackfruit powder with mild sweetness and rich nutrition, suitable for health foods, beverages, and baking applications.",
  },
  {
    name: "QNF Dehydrated Moringa Powder",
    image: moringapowderImg,
    desc: "Finely milled moringa powder rich in vitamins and antioxidants, perfect for smoothies, supplements, and wellness products.",
  },
  {
    name: "QNF Dehydrated Papaya Powder",
    image: papayaImg,
    desc: "High-quality papaya powder with natural sweetness and vibrant color, ideal for beverages, desserts, and food processing.",
  },
  {
    name: "QNF Dehydrated Raw Banana Powder",
    image: bananapowderImg,
    desc: "Premium raw banana powder rich in natural starch and nutrients, widely used in health foods, baby foods, and bakery products.",
  },
  {
    name: "QNF Dehydrated Amla Powder",
    image: amlaImg,
    desc: "Premium dehydrated amla powder carefully processed to preserve its natural nutrients and tangy flavor. Ideal for herbal formulations, health supplements, beverages, and wellness products.",
  },
  {
    name: "QNF Dehydrated Beetroot Powder",
    image: beetrootImg,
    desc: "Premium dehydrated beetroot powder made from carefully selected beetroots, retaining natural color, flavor, and nutrients. Ideal for beverages, health foods, bakery products, and natural food coloring.",
  },
  {
    name: "QNF Dehydrated Bitter Guard Powder",
    image: bitterguardpowderImg,
    desc: "Premium dehydrated amla powder carefully processed to preserve its natural nutrients and tangy flavor. Ideal for herbal formulations, health supplements, beverages, and wellness products.",
  },
  {
    name: "QNF Dehydrated Carrot Powder",
    image: carrotpowderImg,
    desc: "Premium dehydrated carrot powder made from carefully selected carrots, retaining natural color, flavor, and nutrients. Ideal for soups, sauces, health foods, and food processing applications.",
  },
  {
    name: "QNF Dehydrated Spinach Powder",
    image: spinachpowderImg,
    desc: "Premium dehydrated spinach powder made from carefully selected spinach leaves, retaining natural color, nutrients, and flavor. Ideal for health foods, smoothies, soups, and nutritional formulations.",
  },
  {
    name: "QNF Dehydrated Red Onion Powder",
    image: onionpowderImg,
    desc: "Premium dehydrated red onion powder made from carefully selected onions, delivering rich aroma and natural flavor. Ideal for seasoning blends, sauces, soups, and food processing applications.",
  },
  {
    name: "QNF Dehydrated Fenugreek Leaves",
    image: fenugreekImg,
    desc: "Premium dehydrated fenugreek leaves carefully dried to preserve their distinctive aroma and taste, perfect for gravies, breads, and spice mixes.",
  },
  {
    name: "QNF Dehydrated Moringa Leaves",
    image: moringaleavesImg,
    desc: "Premium dried moringa leaves packed with natural nutrients, commonly used in health foods, teas, and herbal formulations.",
  },
  {
    name: "QNF Dry Sorrel Leaves",
    image: sorrelleavesImg,
    desc: "Premium dehydrated sorrel leaves with a naturally tangy flavor and vibrant aroma, ideal for soups, sauces, herbal dishes, and traditional recipes. Carefully processed to preserve freshness, taste, and nutritional value.",
  },
  {
    name: "QNF Dry Guava Leaves",
    image: guavaleavesImg,
    desc: "Carefully dried guava leaves known for their natural herbal benefits and mild earthy flavor. Commonly used in herbal teas, wellness formulations, and traditional remedies.",
  },
  {
    name: "QNF Dehydrated Green Chilli Flakes",
    image: chilliImg,
    desc: "Premium dried green chilli flakes delivering vibrant heat and fresh chili flavor, perfect for snacks, sauces, and spice mixes.",
  },
  {
    name: "QNF Dehydrated Okra Flakes",
    image: okraImg,
    desc: "Carefully dehydrated okra flakes retaining natural taste and nutrients, ideal for soups, curries, and ready-to-cook mixes.",
  },
  {
    name: "QNF Dehydrated Raw Banana Flakes",
    image: bananaflakesImg,
    desc: "Crunchy dehydrated raw banana flakes with natural flavor, suitable for snacks, cereals, and traditional recipes.",
  },
  {
    name: "QNF Dehydrated Bitter Guard Flakes",
    image: bitterguardImg,
    desc: "Premium dehydrated bitter gourd flakes processed to retain their natural flavor and nutrients. Ideal for traditional dishes, health foods, and ready-to-cook mixes.",
  },
  {
    name: "QNF Dehydrated carrot Flakes",
    image: carrotImg,
    desc: "Premium dehydrated carrots carefully processed to retain their natural sweetness, color, and nutrients. Ideal for soups, ready-to-cook meals, seasonings, and food processing applications.",
  },
];

const OtherProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const cards = sectionRef.current?.querySelectorAll(".op-card");

  if (!cards) return;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      scale: 0.92,
      y: 40,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    }
  );
}, []);

  return (
    <section id="products" ref={sectionRef} className="section-light py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
        </div>

        {/* Honey Products */}
        <div className="mb-20">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-10">
            Premium <span className="text-gradient-gold">Honey</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {honeyProducts.map((p) => (
              <div
                key={p.title}
                className="op-card group rounded-xl overflow-hidden bg-charcoal border border-golden/10 hover:border-golden/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h4 className="font-display text-lg font-semibold text-cream">
                    {p.title}
                  </h4>
                  <p className="text-cream/60 font-body text-xs leading-relaxed line-clamp-4">
                    {p.description}
                  </p>
                  <a
                    href="https://wa.me/919491291232"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-golden text-sm font-body font-semibold hover:text-warm-orange transition-colors"
                  >
                    Inquire Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vegetable & Fruit Powders */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-10">
            Vegetable & Fruit <span className="text-gradient-gold">Powders</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {powders.map((p) => (
              <div
                key={p.name}
                className="op-card group p-6 rounded-xl bg-charcoal border border-golden/10 hover:border-golden/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-display text-base font-semibold text-cream mb-2">
                  {p.name}
                </h4>
                <p className="text-cream/60 font-body text-xs leading-relaxed mb-3">
                  {p.desc}
                </p>
                <a
                  href="https://wa.me/919491291232"
                  target="_blank"
                  rel="noreferrer"
                  className="text-golden text-sm font-body font-semibold hover:text-warm-orange transition-colors"
                >
                  Inquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;