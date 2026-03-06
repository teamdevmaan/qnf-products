import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/fried-onion.png";
import coatedImg from "@/assets/coated-fried-onion.png";
import dehydratedImg from "@/assets/dehydrated-fried-onion.jpg";
import powderImg from "@/assets/onion-powder.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "QNF Fresh Fried Onion",
    variants: "White | Red | Pink",
    description:
      "Standard raw onion finely sliced and deep fried in oil till golden brown and crisp. These fried onions enhance everyday dishes and are widely used for gravies, korma, biryani, khichda, lagan seekh, akhni pulao and many other recipes.",
    image: heroImg,
  },
  {
    title: "QNF Coated Fried Onion",
    variants: "White | Red | Pink",
    description:
      "Large ring-shaped onions coated with batter and pan fried or deep fried until golden brown. Used as snack food, garnish or accompaniment for various dishes.",
    image: coatedImg,
  },
  {
    title: " QNF Dehydrated Fried Onion",
    variants: null,
    description:
      "A dried version of fried onions where fresh onion slices are fried until crispy and then dehydrated to remove moisture. This results in a crunchy, flavorful flake with long shelf life — perfect for soups, salads, burgers, curries and toppings.",
    image: dehydratedImg,
  },
  {
    title: "QNF Fried Onion Powder / Churi",
    variants: "Golden | Brown | Flake Churi",
    description:
      "Derived from onions that are sliced thinly, fried until golden brown and then ground into powder. This gives a rich caramelized flavor and enhances the depth and complexity of dishes.",
    image: powderImg,
  },
];

const FriedOnionProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".fo-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        y: 60,
        opacity: 0,
        duration: 0.2,
        delay: i * 0.15,
        ease: "power3.out",
      });
    });

    const heading = sectionRef.current?.querySelector("h2");
    if (heading) {
      gsap.from(heading, {
        scrollTrigger: { trigger: heading, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });
    }
  }, []);

  return (
    <section id="fried-onion" ref={sectionRef} className="section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">Our Specialty</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream">
            QNF Crispy Fried Onion <span className="text-gradient-gold">Products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.title} className="fo-card product-card group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                {p.variants && (
                  <p className="text-golden text-sm font-body font-medium">{p.variants}</p>
                )}
                <p className="text-cream/60 font-body text-sm leading-relaxed">{p.description}</p>
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
    </section>
  );
};

export default FriedOnionProducts;
