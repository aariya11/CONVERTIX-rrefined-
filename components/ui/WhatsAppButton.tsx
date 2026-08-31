"use client";

import { MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed z-40 right-4 md:right-7 transition-all duration-300 pointer-events-auto"
      style={{
        // On mobile (<768px), explicitly placed above the 64px mobile bottom nav + safe area
        bottom: "calc(var(--mobile-nav-height, 64px) + env(safe-area-inset-bottom, 0px) + 16px)",
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
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-black shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-black text-black" />
        <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-500 text-xs font-sans font-semibold tracking-normal text-black">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
