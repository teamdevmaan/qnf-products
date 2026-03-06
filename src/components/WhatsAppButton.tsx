import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919491291232"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
    style={{ background: "#25D366" }}
  >
    <MessageCircle size={22} className="text-cream" />
    <span className="font-body text-sm font-semibold text-cream hidden sm:inline">Chat with us</span>
  </a>
);

export default WhatsAppButton;
