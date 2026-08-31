"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FinalCtaProps {
  onOpenContact: () => void;
}

export function FinalCta({ onOpenContact }: FinalCtaProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

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

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <button
            type="button"
            onClick={() => {
              soundManager.playChirp();
              onOpenContact();
            }}
            data-cursor="TALK"
            className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#f3f1ec] hover:text-[#e05a2b] transition-colors inline-flex items-center gap-3 group"
          >
            <span>TALK TO SALES</span>
            <ArrowUpRight className="w-6 h-6 text-[#e05a2b] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-mono uppercase tracking-widest text-[#25D366] hover:text-white transition-colors py-3 px-6 rounded-full border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+919078019472"
            className="text-sm sm:text-base font-mono text-[#b8b5af] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#e05a2b]" />
            <span>+91 9078 019 472</span>
          </a>
        </div>
      </div>
    </section>
  );
}
