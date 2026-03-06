import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, ShieldCheck, Globe, Factory, Timer, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Gem, title: "Premium Quality Raw Materials", desc: "Finest onions sourced from Gujarat's best farms." },
  { icon: ShieldCheck, title: "Strict Quality Control", desc: "Rigorous testing at every production stage." },
  { icon: Globe, title: "Global Export Standards", desc: "Products conforming to international food safety norms." },
  { icon: Factory, title: "Advanced Production Facility", desc: "Modern equipment and automated production lines." },
  { icon: Timer, title: "Long Shelf Life Products", desc: "Optimized dehydration for maximum freshness." },
  { icon: Sparkles, title: "Consistent Taste & Freshness", desc: "Every batch delivers the same premium quality." },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".why-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section id="why-us" ref={ref} className="section-light py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">Excellence</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="why-card p-8 rounded-xl border border-charcoal/10 hover:border-golden/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1 bg-cream"
            >
              <r.icon
                size={36}
                className="text-golden mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{r.title}</h3>
              <p className="text-charcoal/60 font-body text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quality Control */}
        <div className="mt-20 max-w-3xl mx-auto text-center space-y-6">
          <h3 className="font-display text-3xl font-bold text-charcoal">
            Quality <span className="text-gradient-gold">Control</span>
          </h3>
          <p className="text-charcoal/60 font-body text-base leading-relaxed">
            Ensuring the highest quality in fried onion and dehydrated onion production involves a strict process.
            From the selection of raw materials, manufacturers evaluate onions and vegetables based on size,
            freshness, quality and flavor profile — ensuring consistent premium quality in every shipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
