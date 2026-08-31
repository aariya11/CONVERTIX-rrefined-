"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FinalCtaProps {
  onOpenContact: () => void;
}

export function FinalCta({ onOpenContact }: FinalCtaProps) {
  return (
    <section className="relative py-40 sm:py-60 bg-[#0a0a0a] border-t border-white/10 overflow-hidden text-center defer-render flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#e05a2b] block">
          AUTOMOTIVE RETAIL INTELLIGENCE
        </span>

        <h2 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
          READY TO
          <br />
          <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
            move
          </span>{" "}
          FASTER<span className="text-[#e05a2b]">?</span>
        </h2>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => {
              soundManager.playChirp();
              onOpenContact();
            }}
            data-cursor="TALK"
            className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#f3f1ec] hover:text-[#e05a2b] transition-colors inline-flex items-center gap-3 group"
          >
            <span>TALK TO SALES</span>
            <ArrowUpRight className="w-8 h-8 text-[#e05a2b] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </button>

          <span className="text-white/20 hidden sm:inline">•</span>

          <a
            href="tel:+917888028729"
            className="text-base sm:text-xl font-mono text-[#b8b5af] hover:text-white transition-colors"
          >
            Direct: +91 7888 028 729
          </a>
        </div>
      </div>
    </section>
  );
}
