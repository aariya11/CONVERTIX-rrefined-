"use client";

import { motion } from "framer-motion";

export function AIPrioritizationEngine() {
  return (
    <section id="ai-engine" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            INTELLIGENCE // ML PROTOCOL
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            AI THAT KNOWS
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              who
            </span>{" "}
            MATTERS NOW<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Pure Typography & Data Layout */}
        <div className="border border-white/10 rounded-3xl p-8 sm:p-16 bg-[#0e0e0e] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Giant Score (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
              REALTIME INTENT SCORE
            </span>
            <div className="text-8xl sm:text-9xl font-display font-black text-[#f3f1ec] leading-none">
              97<span className="text-[#e05a2b]">.</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b] font-bold block">
              HIGH CONVERSION PROBABILITY
            </span>
          </div>

          {/* Right: Editorial Data Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-8 border-l border-white/10 pl-0 lg:pl-10">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block">
                SIGNAL EVALUATION
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Vehicle Segment: Premium SUV (₹28.5L Budget)
              </h3>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block">
                DISPATCH SLA
              </span>
              <p className="text-sm font-mono text-[#b8b5af]">
                Immediate Test Drive Requested • Dispatched to Senior Consultant in &lt;15 Seconds
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/40">
              Machine learning models quietly rank hundreds of daily inquiries so consultants always dial ready buyers first.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
