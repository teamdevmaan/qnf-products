import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ShieldCheck, Leaf, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certs = [
  { icon: ShieldCheck, label: "FSSAI" },
  { icon: Award, label: "MSME" },
 ];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".about-anim");
    els?.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section id="about" ref={ref} className="section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="about-anim text-golden font-body text-sm tracking-[0.3em] uppercase mb-4 text-center">
            About Us
          </p>
          <h2 className="about-anim font-display text-4xl sm:text-5xl font-bold text-cream text-center mb-12">
            QNF <span className="text-gradient-gold">Products</span>
          </h2>

          <div className="about-anim space-y-6 text-cream/70 font-body text-base leading-relaxed text-center">
            <p>
              We specialize in exporting premium dehydrated onion products renowned for their exceptional quality.
              Sourced from the finest onions, our products retain rich flavor and nutritional value ensuring
              optimal freshness and taste.
            </p>
            <p>
              Ideal for diverse culinary applications, they offer a convenient and long-lasting solution for
              enhancing dishes.
            </p>
            <p>
              <strong className="text-cream">QNF Products</strong> is a manufacturer and exporter of fried onions,
              dehydrated vegetables and spices based in <strong className="text-cream">Kurnool, Andhra Pradesh, India</strong>.
              Our facility is equipped with modern equipment and automated production lines.
            </p>
          </div>

          {/* Certifications */}
          <div className="about-anim grid grid-cols-2 gap-6 mt-16 max-w-md mx-auto">
            {certs.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-golden/10 hover:border-golden/30 transition-all duration-300"
              >
                <c.icon size={32} className="text-golden" />
                <span className="font-body font-semibold text-cream text-sm">{c.label}</span>
                <span className="text-cream/40 text-xs font-body">Certified</span>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="about-anim grid md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 rounded-xl border border-golden/10 space-y-4">
              <h3 className="font-display text-2xl font-semibold text-golden">Our Mission</h3>
              <p className="text-cream/60 font-body text-sm leading-relaxed">
                Strive to deliver quality and safe products on time, meet customer needs and ensure continued
                development.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-golden/10 space-y-4">
              <h3 className="font-display text-2xl font-semibold text-golden">Our Vision</h3>
              <p className="text-cream/60 font-body text-sm leading-relaxed">
                To be a leading manufacturer of food products conforming to global standards using advanced
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
