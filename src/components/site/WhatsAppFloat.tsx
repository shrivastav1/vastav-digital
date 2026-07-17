import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hi%20Vastav%20Digital%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
