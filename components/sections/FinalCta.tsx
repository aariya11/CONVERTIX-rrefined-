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
    <section className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden text-center defer-render flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
        <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block">
          Automotive Retail Operating System
        </span>

        <h2 className="h1-editorial text-[#f3f1ec]">
          Ready to
          <br />
          <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
            move
          </span>{" "}
          faster<span className="text-[#e05a2b]">?</span>
        </h2>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={() => {
              soundManager.playChirp();
              onOpenContact();
            }}
            data-cursor="TALK"
            className="min-h-[50px] px-8 py-3.5 rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-base hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 shadow-lg shadow-[#e05a2b]/25 group"
          >
            <span>Talk to Sales</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            className="min-h-[50px] px-6 py-3.5 rounded-full border border-[#25D366]/40 text-[#25D366] font-sans font-medium text-sm hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+919078019472"
            className="text-sm font-sans font-medium text-[#b8b5af] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#e05a2b]" />
            <span>+91 9078 019 472</span>
          </a>
        </div>
      </div>
    </section>
  );
}
