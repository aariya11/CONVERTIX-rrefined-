"use client";

import { MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed z-40 right-4 sm:right-6 transition-all duration-300 pointer-events-auto"
      style={{
        bottom: "calc(var(--mobile-nav-height, 64px) + env(safe-area-inset-bottom, 0px) + 14px)",
      }}
    >
      <style jsx>{`
        @media (min-width: 768px) {
          aside {
            bottom: 28px !important;
          }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundManager.playChirp()}
        data-cursor="CHAT"
        aria-label="Chat directly on WhatsApp with Convertix"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group touch-manipulation cursor-pointer border border-white/20"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black" />
        <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-500 text-xs font-sans font-semibold tracking-normal text-black">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
