"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FinalCtaProps {
  onOpenContact: () => void;
}

export function FinalCta({ onOpenContact }: FinalCtaProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20commission%20a%20website%20for%20our%20service%20business.";

  return (
    <section className="relative py-28 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden text-center defer-render flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 space-y-8 sm:space-y-10">
        <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block">
          Digital Design & Web Engineering Studio
        </span>

        <h2 className="h1-editorial text-[#f3f1ec]">
          Ready to build
          <br />
          <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
            your
          </span>{" "}
          website<span className="text-[#e05a2b]">?</span>
        </h2>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => {
              soundManager.playChirp();
              onOpenContact();
            }}
            data-cursor="START"
            className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm sm:text-base hover:bg-white hover:text-black active:scale-95 transition-all inline-flex items-center justify-center gap-2 shadow-xl shadow-[#e05a2b]/25 group touch-manipulation cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playChirp()}
            data-cursor="CHAT"
            className="w-full sm:w-auto min-h-[50px] px-6 py-3.5 rounded-full border border-[#25D366]/40 text-[#25D366] font-sans font-medium text-sm hover:bg-[#25D366] hover:text-black active:scale-95 transition-all inline-flex items-center justify-center gap-2 touch-manipulation"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+919078019472"
            onClick={() => soundManager.playClick()}
            className="min-h-[44px] text-sm font-sans font-medium text-[#b8b5af] hover:text-white transition-colors inline-flex items-center justify-center gap-2 touch-manipulation py-2"
          >
            <Phone className="w-4 h-4 text-[#e05a2b]" />
            <span>+91 9078 019 472</span>
          </a>
        </div>
      </div>
    </section>
  );
}
