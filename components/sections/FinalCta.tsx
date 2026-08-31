"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { soundManager } from "../lib/sound";

interface FinalCtaProps {
  onOpenContact: () => void;
}

export function FinalCta({ onOpenContact }: FinalCtaProps) {
  return (
    <section className="relative py-32 bg-[#07080a] border-t border-white/10 overflow-hidden text-center">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4ff00]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/12 text-xs font-mono text-[#d4ff00] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN INDIA'S LEADING AUTOMOTIVE DEALERSHIPS</span>
        </div>

        {/* Large Emerging Typography */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.88] mb-6">
          READY TO
          <br />
          <span className="text-[#d4ff00]">MOVE FASTER?</span>
        </h2>

        <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Bring sales, service, and insurance workflows into one intelligent operating system. Start with Lead Management or Service Automation—or deploy the complete unified suite.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <MagneticButton
            variant="primary"
            onClick={onOpenContact}
            cursorText="START"
            className="!py-4 !px-8 text-xs font-bold"
          >
            <span>Talk to Convertix</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <Link
            href="/pricing"
            onClick={() => soundManager.playClick()}
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>Explore Introductory Editions</span>
          </Link>
        </div>

        {/* Direct Phone & Trust SLA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/50 pt-8 border-t border-white/5">
          <a
            href="tel:+917888028729"
            className="text-white hover:text-[#00f58c] flex items-center gap-2 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00f58c]" />
            <span>Direct Enterprise Desk: +91 7888 028 729</span>
          </a>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-white/70">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4ff00]" />
            OEM DMS Certified • 24/7 Dedicated Account Director
          </span>
        </div>
      </div>
    </section>
  );
}
