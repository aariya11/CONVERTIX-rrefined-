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
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Gradients & Grids */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4ff00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f58c] animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-white/90">
            Convertix AI Engine 3.2 Live
          </span>
          <span className="text-white/30">•</span>
          <span className="text-[11px] font-mono text-[#d4ff00]">Automotive Dealership Protocol</span>
        </motion.div>

        {/* Oversized Cinematic Editorial Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white leading-[0.88] uppercase"
          >
            THE DEALERSHIP
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase tracking-tight">
              operating
            </span>{" "}
            SYSTEM.
          </motion.h1>
        </div>

        {/* Supporting Statement & Actions Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-10"
        >
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            AI-powered lead, service and insurance workflows engineered specifically for modern automotive retail networks. Replace delayed manual assignments with 10-minute response precision.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              variant="primary"
              onClick={onOpenContact}
              cursorText="BOOK"
              className="!py-3.5 !px-6 text-xs"
            >
              <span>Explore Convertix OS</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a
              href="tel:+917888028729"
              className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00f58c]" />
              <span>Talk to Sales</span>
            </a>
          </div>
        </motion.div>

        {/* Live Dealership Environment Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <DealershipPipelineSim />
        </motion.div>

        {/* Live Benchmark Key Metric Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              Lead Response Window
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#d4ff00]">
                10–30 MIN
              </span>
              <span className="text-[11px] font-mono text-white/40 line-through">DMS: 24 hrs</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              Follow-Up Execution Rate
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#00f58c]">
                &gt;90%
              </span>
              <span className="text-[11px] font-mono text-white/40 line-through">DMS: &lt;40%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              DMS Bi-Directional Sync
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-display font-black text-white">
                2-WAY
              </span>
              <span className="text-[11px] font-mono text-[#00d8f6]">Zero Data Lag</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              Telephony Verification
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-display font-black text-white">
                SIM-NATIVE
              </span>
              <span className="text-[11px] font-mono text-[#d4ff00]">Auto-Logged</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
