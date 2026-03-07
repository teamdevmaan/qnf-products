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
import mangoslicesImg from "@/assets/mangoslices.png";
gsap.registerPlugin(ScrollTrigger);

/* ---------------- Honey ---------------- */

const honeyProducts = [
  {
    title: "QNF Thulasi Honey",
    image: thulsiImg,
    description:
      "Thulasi Honey is collected from bees that gather nectar from Tulsi flowers known for their medicinal benefits and rich herbal aroma.",
  },
  {
    title: "QNF Black Jamun Honey",
    image: jamunImg,
    description:
      "Dark and rich honey harvested from Jamun blossoms, valued for its antioxidant properties and natural sweetness.",
  },
  {
    title: "QNF Multi-Floral Honey",
    image: multifloralImg,
    description:
      "Honey collected from multiple seasonal flowers creating a balanced flavor and nutrient-rich profile.",
  },
  {
    title: "QNF Bee Pollen",
    image: beePollenImg,
    description:
      "Natural bee pollen packed with vitamins, minerals, proteins and antioxidants used as a powerful superfood supplement.",
  },
];

/* ---------------- Vegetable Powders ---------------- */

const vegetablePowders = [
  { name: "QNF Dehydrated Curry Leaves Powder", image: curryleavesImg, desc: "Finely ground curry leaves powder ideal for seasoning blends and traditional dishes." },
  { name: "QNF Garlic Powder", image: garlicPowderImg, desc: "Premium dehydrated garlic powder with strong aroma used in seasoning and sauces." },
  { name: "QNF Dehydrated Ginger Powder", image: gingerImg, desc: "Natural ginger powder with warm spicy flavor for beverages and health formulations." },
  { name: "QNF Dehydrated Beetroot Powder", image: beetrootImg, desc: "Beetroot powder retaining natural color and nutrients used in foods and beverages." },
  { name: "QNF Dehydrated Bitter Gourd Powder", image: bitterguardpowderImg, desc: "Carefully processed bitter gourd powder retaining natural health benefits." },
  { name: "QNF Dehydrated Carrot Powder", image: carrotpowderImg, desc: "Carrot powder preserving natural sweetness and nutrients for soups and health foods." },
  { name: "QNF Dehydrated Spinach Powder", image: spinachpowderImg, desc: "Nutritious spinach powder ideal for smoothies and nutritional blends." },
  { name: "QNF Dehydrated Red Onion Powder", image: onionpowderImg, desc: "Rich aromatic onion powder widely used in seasoning blends." },
];

/* ---------------- Fruit Powders ---------------- */

const fruitPowders = [
  { name: "QNF Dehydrated Jackfruit Powder", image: jackfruitImg, desc: "Natural jackfruit powder with mild sweetness suitable for beverages and health foods." },
  { name: "QNF Dehydrated Papaya Powder", image: papayaImg, desc: "Papaya powder with natural sweetness used in beverages and desserts." },
  { name: "QNF Dehydrated Raw Banana Powder", image: bananapowderImg, desc: "Raw banana powder rich in natural starch used in baby foods and health foods." },
  { name: "QNF Dehydrated Amla Powder", image: amlaImg, desc: "Vitamin C rich amla powder used in herbal supplements and wellness products." },
];
const fruitslices = [
  { name: "QNF Dehydrated Mango Slices", image: mangoslicesImg, desc: "Premium Dehydrated Mango Slices produced from fresh ripe mangoes using advanced dehydration technology to remove moisture while preserving natural flavor, color, and nutrients. Ideal for snacks, bakery, and food processing applications." },
];
/* ---------------- Vegetable Flakes ---------------- */

const vegetableFlakes = [
  { name: "QNF Dehydrated Green Chilli Flakes", image: chilliImg, desc: "Premium chilli flakes delivering vibrant heat and flavor." },
  { name: "QNF Dehydrated Okra Flakes", image: okraImg, desc: "Okra flakes retaining natural taste ideal for ready-to-cook foods." },
  { name: "QNF Dehydrated Raw Banana Flakes", image: bananaflakesImg, desc: "Crunchy raw banana flakes suitable for snacks and traditional dishes." },
  { name: "QNF Dehydrated Bitter Gourd Flakes", image: bitterguardImg, desc: "Bitter gourd flakes carefully processed to retain nutrients." },
  { name: "QNF Dehydrated Carrot Flakes", image: carrotImg, desc: "Carrot flakes preserving natural sweetness and color." },
];

/* ---------------- Herbal Leaves ---------------- */

const herbalLeaves = [
  { name: "QNF Dehydrated Fenugreek Leaves", image: fenugreekImg, desc: "Premium dried fenugreek leaves with strong aroma used in gravies and spice mixes." },
  { name: "QNF Dehydrated Moringa Leaves", image: moringaleavesImg, desc: "Nutrient-rich moringa leaves widely used in herbal and health products." },
  { name: "QNF Dry Sorrel Leaves", image: sorrelleavesImg, desc: "Tangy dehydrated sorrel leaves ideal for soups and herbal dishes." },
  { name: "QNF Dry Guava Leaves", image: guavaleavesImg, desc: "Natural dried guava leaves used in herbal teas and traditional remedies." },
];

const OtherProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".op-card");

    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.92, y: 40 },
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

  const renderProducts = (products:any[]) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {products.map((p) => (
        <div key={p.name} className="op-card group p-6 rounded-xl bg-charcoal border border-golden/10 hover:border-golden/30 transition-all duration-500 hover:-translate-y-2">
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <h4 className="font-display text-base font-semibold text-cream mb-2">{p.name}</h4>
          <p className="text-cream/60 font-body text-xs leading-relaxed mb-3">{p.desc}</p>
          <a href="https://wa.me/919491291232" target="_blank" rel="noreferrer" className="text-golden text-sm font-body font-semibold hover:text-warm-orange transition-colors">
            Inquire Now →
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <section id="products" ref={sectionRef} className="section-light py-24">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
        </div>

        {/* Honey */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Premium <span className="text-gradient-gold">Honey</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {honeyProducts.map((p) => (
              <div key={p.title} className="op-card group rounded-xl overflow-hidden bg-charcoal border border-golden/10 hover:border-golden/30 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                </div>
                <div className="p-5 space-y-3">
                  <h4 className="font-display text-lg font-semibold text-cream">{p.title}</h4>
                  <p className="text-cream/60 font-body text-xs leading-relaxed">{p.description}</p>
                  <a href="https://wa.me/919491291232" target="_blank" rel="noreferrer" className="inline-block mt-2 text-golden text-sm font-body font-semibold hover:text-warm-orange transition-colors">
                    Inquire Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vegetable Powders */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Dehydrated <span className="text-gradient-gold">Vegetable Powders</span>
          </h3>
          {renderProducts(vegetablePowders)}
        </div>

        {/* Fruit Powders */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Dehydrated <span className="text-gradient-gold">Fruit Powders</span>
          </h3>
          {renderProducts(fruitPowders)}
        </div>
        <div className="mb-20">
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Dehydrated <span className="text-gradient-gold">Fruit Slices</span>
          </h3>
          {renderProducts(fruitslices)}
        </div>
        {/* Vegetable Flakes */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Dehydrated <span className="text-gradient-gold">Vegetable Flakes</span>
          </h3>
          {renderProducts(vegetableFlakes)}
        </div>

        {/* Herbs */}
        <div>
          <h3 className="font-display text-3xl font-semibold text-charcoal text-center mb-10">
            Dehydrated <span className="text-gradient-gold">Herbs & Leaves</span>
          </h3>
          {renderProducts(herbalLeaves)}
        </div>

      </div>
    </section>
  );
};

export default OtherProducts;