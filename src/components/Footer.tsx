import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Crispy Fried Onion",
  "Dehydrated Onion",
  "Honey",
  "Vegetable Powders",
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="section-dark border-t border-golden/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-golden">QNF</span>
              <span className="font-display text-2xl font-light text-cream">Products</span>
            </div>
            <p className="text-cream/50 font-body text-sm leading-relaxed">
              Premium Fried Onion & Dehydrated Food Products
            </p>
            <p className="text-cream/40 font-body text-xs">Manufacturer & Exporter</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-cream">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleClick(l.href)}
                  className="block text-cream/50 hover:text-golden font-body text-sm transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-cream">Products</h4>
            <div className="space-y-2">
              {productLinks.map((p) => (
                <p key={p} className="text-cream/50 font-body text-sm">{p}</p>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-cream">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cream/50 font-body text-sm">
                <Phone size={16} className="text-golden" />
                +91 9491291232
              </div>
              <div className="flex items-center gap-3 text-cream/50 font-body text-sm">
                <Mail size={16} className="text-golden" />
                qnfproducts@gmail.com
              </div>
              <div className="flex items-start gap-3 text-cream/50 font-body text-sm">
                <MapPin size={16} className="text-golden mt-0.5" />
                Survey No. 852/3, Swaraj Nagar, Atmakur,Kurnool, Andhra Pradesh, India - 518422
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/919491291232" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-golden/20 flex items-center justify-center text-cream/50 hover:text-golden hover:border-golden/50 transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-golden/10 pt-6 text-center">
          <p className="text-cream/30 font-body text-xs">
            © {new Date().getFullYear()} QNF Products. All rights reserved.
          </p>
        </div>
        <div className="mt-6 text-center text-sm text-cream/50 font-body">
  Designed & Developed by{" "}
  <a
    href="https://devmaan.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-golden hover:text-golden/80 transition-colors duration-300 font-medium"
  >
    DevMaan Technologies
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;
