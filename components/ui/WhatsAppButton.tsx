"use client";

import { MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => soundManager.playChirp()}
      data-cursor="CHAT"
      aria-label="Chat on WhatsApp with Convertix"
      className="fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-500 text-xs font-mono font-bold uppercase tracking-wider text-black">
        WhatsApp Desk
      </span>
    </a>
  );
}
