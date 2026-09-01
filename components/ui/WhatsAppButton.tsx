"use client";

import { MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed z-40 right-4 sm:right-7 transition-all duration-300 pointer-events-auto"
      style={{
        bottom: "max(20px, env(safe-area-inset-bottom, 20px))",
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundManager.playChirp()}
        data-cursor="CHAT"
        aria-label="Chat directly on WhatsApp with Convertix"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group touch-manipulation cursor-pointer border border-white/20"
      >
        <MessageCircle className="w-6 h-6 fill-black text-black" />
        <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-500 text-xs font-sans font-semibold tracking-normal text-black">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
