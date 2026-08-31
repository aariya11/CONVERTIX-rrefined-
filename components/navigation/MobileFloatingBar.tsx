"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUpRight, Zap } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileFloatingBarProps {
  onOpenContact: () => void;
}

export function MobileFloatingBar({ onOpenContact }: MobileFloatingBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down past the hero
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
      <div className="pointer-events-auto max-w-md mx-auto p-1.5 rounded-full bg-[#0c0e14]/90 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-2">
        <a
          href="tel:+917888028729"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 text-white font-mono text-[11px] hover:bg-white/20 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#00f58c]" />
          <span>Call Desk</span>
        </a>

        <button
          type="button"
          onClick={() => {
            soundManager.playChirp();
            onOpenContact();
          }}
          className="flex-1 py-2 px-4 rounded-full bg-[#d4ff00] text-black font-mono font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#d4ff00]/15"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Book Private Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
