import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The fried onions from QNF Products have excellent crispness and flavor. Perfect for our restaurant chain.",
    name: "Satwick R",
    company: "SV Restaurant",
    stars: 5,
  },
  {
    quote: "Consistent quality and reliable export service. Highly recommended supplier.",
    name: "Parikshith Gowda",
    company: "NR Foods Trading",
    stars: 5,
  },
  {
    quote: "The dehydrated onion flakes are very convenient for our food production line.",
    name: "Sarah ",
    company: "NJK Food Industries",
    stars: 5,
  },
  {
    quote: "I can't explain the way these fried onions helps me save time,Thank you QNF ",
    name: "Riddhi Verma",
    company: "Riddhi's Cloud Kitchen",
    stars: 5,
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.querySelector(".testi-heading");
    if (el) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });
    }

    const cards = ref.current?.querySelectorAll(".testi-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.15,
      });
    });

    // Auto-scroll slider
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollWidth = slider.scrollWidth - slider.clientWidth;
      if (scrollWidth > 0) {
        gsap.to(slider, {
          scrollLeft: scrollWidth,
          duration: 15,
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: 2,
        });
      }
    }
  }, []);

  return (
    <section ref={ref} className="section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 testi-heading">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="testi-card flex-shrink-0 w-80 sm:w-96 p-8 rounded-xl border border-golden/15 hover:border-golden/30 transition-all duration-500 snap-center"
              style={{ background: "rgba(197, 122, 42, 0.05)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} className="fill-golden text-golden" />
                ))}
              </div>
              <p className="text-cream/70 font-body text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display text-base font-semibold text-cream">{t.name}</p>
                {t.company && <p className="text-golden/70 font-body text-xs mt-1">{t.company}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
