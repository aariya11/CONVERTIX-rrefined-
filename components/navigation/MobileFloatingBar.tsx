"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUpRight, Zap, MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileFloatingBarProps {
  onOpenContact: () => void;
}

export function MobileFloatingBar({ onOpenContact }: MobileFloatingBarProps) {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto max-w-md mx-auto p-1.5 rounded-full bg-[#0c0e14]/90 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-1.5">
        <a
          href="tel:+919078019472"
          className="flex items-center gap-1 px-2.5 py-2 rounded-full bg-white/10 text-white font-mono text-[10px] hover:bg-white/20 transition-colors"
        >
          <Phone className="w-3 h-3 text-[#e05a2b]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-2 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-mono text-[10px] hover:bg-[#25D366] hover:text-black transition-colors"
        >
          <MessageCircle className="w-3 h-3" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => {
            soundManager.playChirp();
            onOpenContact();
          }}
          className="flex-1 py-2 px-3 rounded-full bg-[#e05a2b] text-white font-mono font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg shadow-[#e05a2b]/20"
        >
          <Zap className="w-3 h-3" />
          <span>Book Demo</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
