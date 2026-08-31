"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, PhoneCall } from "lucide-react";
import { DealershipPipelineSim } from "./DealershipPipelineSim";
import { MagneticButton } from "../ui/MagneticButton";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] pt-24 xs:pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Gradients & Grids */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[#d4ff00]/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f58c] animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/90">
            Convertix AI 3.2 Live
          </span>
          <span className="text-white/30 hidden xs:inline">•</span>
          <span className="text-[10px] sm:text-[11px] font-mono text-[#d4ff00] hidden xs:inline">
            Automotive Dealership Protocol
          </span>
        </motion.div>

        {/* Oversized Cinematic Editorial Headline */}
        <div className="mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white leading-[0.92] sm:leading-[0.88] uppercase break-words"
          >
            THE DEALERSHIP
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase tracking-tight">
              operating
            </span>{" "}
            SYSTEM.
          </motion.h1>
        </div>

        {/* Supporting Statement & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-white/10 pb-8 sm:pb-10"
        >
          <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            AI-powered lead, service and insurance workflows engineered specifically for modern automotive retail networks. Replace delayed manual assignments with 10-minute response precision.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <MagneticButton
              variant="primary"
              onClick={onOpenContact}
              cursorText="BOOK"
              className="!py-3 !px-5 sm:!py-3.5 sm:!px-6 text-xs w-full sm:w-auto"
            >
              <span>Explore Convertix OS</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </MagneticButton>

            <a
              href="tel:+917888028729"
              className="w-full sm:w-auto text-center justify-center px-4 sm:px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00f58c]" />
              <span>Talk to Sales</span>
            </a>
          </div>
        </motion.div>

        {/* Live Dealership Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-14"
        >
          <DealershipPipelineSim />
        </motion.div>

        {/* Benchmark Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1 truncate">
              Lead Response Window
            </span>
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-[#d4ff00]">
                10–30 MIN
              </span>
              <span className="text-[9px] sm:text-[11px] font-mono text-white/40 line-through">DMS: 24h</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1 truncate">
              Follow-Up Rate
            </span>
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-[#00f58c]">
                &gt;90%
              </span>
              <span className="text-[9px] sm:text-[11px] font-mono text-white/40 line-through">DMS: &lt;40%</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1 truncate">
              DMS Synchronization
            </span>
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">
                2-WAY
              </span>
              <span className="text-[9px] sm:text-[11px] font-mono text-[#00d8f6]">Zero Data Lag</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1 truncate">
              Telephony Verification
            </span>
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">
                SIM-NATIVE
              </span>
              <span className="text-[9px] sm:text-[11px] font-mono text-[#d4ff00]">Auto-Logged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
