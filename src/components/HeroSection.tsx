import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-fried-onions.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(headlineRef.current, { y: 60, opacity: 0, duration: 1, delay: 0.5 })
      .from(subtextRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(imageRef.current, { scale: 0.8, opacity: 0, duration: 1 }, "-=0.8");

    // Floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((p, i) => {
        gsap.set(p, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: 0.3 + Math.random() * 0.7,
          opacity: 0.2 + Math.random() * 0.4,
        });
        gsap.to(p, {
          y: `-=${80 + Math.random() * 120}`,
          x: `+=${-40 + Math.random() * 80}`,
          rotation: `+=${Math.random() * 180}`,
          opacity: 0,
          duration: 6 + Math.random() * 6,
          repeat: -1,
          delay: i * 0.8,
          ease: "none",
        });
      });
    }

    // Mouse parallax on image
    const onMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(imageRef.current, { x, y, duration: 0.6, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-2 rounded-full"
            style={{ background: `hsl(30 ${50 + Math.random() * 30}% ${40 + Math.random() * 20}%)` }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent z-[1]" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Left */}
        <div className="space-y-8">
          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-cream"
          >
            Premium Crispy <br />
            <span className="text-gradient-gold">Fried Onions</span> <br />
            <span className="text-cream/80 text-3xl sm:text-4xl lg:text-5xl font-light">
              for Global Kitchens
            </span>
          </h1>

          <p
            ref={subtextRef}
            className="text-cream/60 font-body text-base sm:text-lg max-w-xl leading-relaxed"
          >
            High quality fried and dehydrated onion products sourced from the finest onions in Andhra Pradesh, India.
            Perfect for gravies, biryani, snacks, burgers, soups and premium food manufacturing.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector("#fried-onion")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              View Products
            </button>
            <a
              href="https://wa.me/919491291232"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Contact on WhatsApp
            </a>
          </div>
        </div>

        {/* Right - Hero image */}
        <div ref={imageRef} className="relative flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-glow-pulse" />
            <img
              src={heroImg}
              alt="Premium crispy fried onions in a ceramic bowl"
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
