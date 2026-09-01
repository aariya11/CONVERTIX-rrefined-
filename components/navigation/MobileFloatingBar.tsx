"use client";

import Link from "next/link";
import { Home, Layers, Sparkles, Calculator, Send } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileBottomNavProps {
  onOpenContact: () => void;
}

export function MobileFloatingBar({ onOpenContact }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-2xl border-t border-white/10"
      style={{
        paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="flex items-center justify-around px-2 py-1.5">
        {/* Home */}
        <Link
          href="/"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-[#b8b5af] hover:text-white active:text-[#e05a2b] transition-colors touch-manipulation"
        >
          <Home className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Home</span>
        </Link>

        {/* Services */}
        <Link
          href="/#services"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-[#b8b5af] hover:text-white active:text-[#e05a2b] transition-colors touch-manipulation"
        >
          <Layers className="w-4 h-4 mb-1 text-[#e05a2b]" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Services</span>
        </Link>

        {/* Capabilities */}
        <Link
          href="/#capabilities"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-[#b8b5af] hover:text-white active:text-[#e05a2b] transition-colors touch-manipulation"
        >
          <Sparkles className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Capabilities</span>
        </Link>

        {/* ROI Calculator */}
        <Link
          href="/#roi"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-[#b8b5af] hover:text-white active:text-[#e05a2b] transition-colors touch-manipulation"
        >
          <Calculator className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">ROI</span>
        </Link>

        {/* Action: Hire Us / Start Project */}
        <button
          type="button"
          onClick={() => {
            soundManager.playChirp();
            onOpenContact();
          }}
          className="flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 px-3 rounded-xl bg-[#e05a2b] text-white font-sans font-semibold transition-all active:scale-95 shadow-lg shadow-[#e05a2b]/25 touch-manipulation cursor-pointer"
        >
          <Send className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[11px] font-sans font-bold tracking-tight">Hire Us</span>
        </button>
      </div>
    </nav>
  );
}
