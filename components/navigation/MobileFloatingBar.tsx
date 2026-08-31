"use client";

import Link from "next/link";
import { Home, Zap, RotateCw, Calculator, Calendar } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileBottomNavProps {
  onOpenContact: () => void;
}

export function MobileFloatingBar({ onOpenContact }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-2xl border-t border-white/10"
      style={{
        paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {/* Home */}
        <Link
          href="/"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-[#b8b5af] hover:text-white transition-colors"
        >
          <Home className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Home</span>
        </Link>

        {/* Leads */}
        <Link
          href="/products/lead-management"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-[#b8b5af] hover:text-white transition-colors"
        >
          <Zap className="w-4 h-4 mb-1 text-[#e05a2b]" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Leads</span>
        </Link>

        {/* Service */}
        <Link
          href="/products/service-insurance"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-[#b8b5af] hover:text-white transition-colors"
        >
          <RotateCw className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">Service</span>
        </Link>

        {/* ROI Calculator */}
        <a
          href="#roi"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-[#b8b5af] hover:text-white transition-colors"
        >
          <Calculator className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-sans font-medium tracking-tight">ROI</span>
        </a>

        {/* Action: Book Demo */}
        <button
          type="button"
          onClick={() => {
            soundManager.playChirp();
            onOpenContact();
          }}
          className="flex flex-col items-center justify-center min-w-[62px] min-h-[44px] py-1 px-2.5 rounded-xl bg-[#e05a2b] text-white font-sans font-semibold transition-all active:scale-95 shadow-md shadow-[#e05a2b]/20"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-sans font-bold tracking-tight">Demo</span>
        </button>
      </div>
    </nav>
  );
}
