import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogDehydrated from "@/assets/blog-dehydrated.jpg";
import blogBiryani from "@/assets/blog-biryani.jpg";
import blogHoney from "@/assets/blog-honey.jpg";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    title: "Benefits of Using Dehydrated Onions in Cooking",
    preview:
      "Dehydrated onions improve shelf life, offer unmatched convenience and deliver consistent flavor in every dish. Discover why top food manufacturers prefer them.",
    image: blogDehydrated,
  },
  {
    title: "Why Fried Onions Are Essential for Biryani",
    preview:
      "Crispy fried onions add the signature golden crunch and caramelized depth that make biryani unforgettable. Learn how they elevate traditional recipes.",
    image: blogBiryani,
  },
  {
    title: "Health Benefits of Natural Honey",
    preview:
      "Natural honey is packed with antioxidants, supports immunity, and provides sustained energy. Explore the science behind this ancient superfood.",
    image: blogHoney,
  },
];

const LatestBlogs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".blog-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.15,
      });
    });
  }, []);

  return (
    <section id="blogs" ref={ref} className="section-light py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-golden font-body text-sm tracking-[0.3em] uppercase mb-4">Insights</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Latest <span className="text-gradient-gold">Blogs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogs.map((b) => (
            <div
              key={b.title}
              className="blog-card group rounded-xl overflow-hidden bg-cream shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-charcoal/5"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-lg font-semibold text-charcoal leading-snug">{b.title}</h3>
                <p className="text-charcoal/60 font-body text-sm leading-relaxed">{b.preview}</p>
                <button className="text-golden text-sm font-body font-semibold hover:text-warm-orange transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
