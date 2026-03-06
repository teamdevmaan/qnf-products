import { useEffect, useRef, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Fried Onion", href: "#fried-onion" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, ease: "power3.out" });
    }
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-golden">QNF</span>
          <span className="font-display text-2xl font-light text-cream">Products</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="relative text-sm font-body font-medium text-cream/80 hover:text-golden transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919491291232"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-cream/70 hover:text-golden transition-colors"
          >
            <MessageCircle size={18} className="text-green-500" />
            <span className="font-body">+91 94912 91232</span>
          </a>
        </div>

        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-nav border-t border-golden/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="block text-cream/80 hover:text-golden font-body text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919491291232"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-cream/70 hover:text-golden transition-colors pt-2"
          >
            <MessageCircle size={18} className="text-green-500" />
            <span>+91 94912 91232</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
