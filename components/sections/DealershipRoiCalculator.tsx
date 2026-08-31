"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatINR } from "../lib/utils";
import { soundManager } from "../lib/sound";

interface DealershipRoiCalculatorProps {
  onOpenContact?: () => void;
}

export function DealershipRoiCalculator({ onOpenContact }: DealershipRoiCalculatorProps) {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(1200);
  const [currentConversion, setCurrentConversion] = useState<number>(6);
  const [avgMargin, setAvgMargin] = useState<number>(35000);

  // Convertix lifts conversion by +3.5% through 10-minute speed and >90% follow-up retention
  const additionalCars = Math.round(monthlyLeads * 0.035);
  const recoveredMonthlyProfit = additionalCars * avgMargin + Math.round(monthlyLeads * 0.8 * 850);
  const annualLift = recoveredMonthlyProfit * 12;

  return (
    <section id="roi" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            FINANCIAL IMPACT MODEL
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            WHAT DOES
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              slow response
            </span>
            <br />
            COST YOU<span className="text-[#e05a2b]">?</span>
          </h2>
        </div>

        {/* Minimalist Editorial Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Inputs as Large Typography (6 cols) */}
          <div className="lg:col-span-6 space-y-10">
            {/* Input 1: Monthly Leads */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                MONTHLY INCOMING LEADS
              </span>
              <div className="text-4xl sm:text-6xl font-display font-black text-white">
                {monthlyLeads.toLocaleString()}
              </div>
              <input
                type="range"
                min="300"
                max="5000"
                step="100"
                value={monthlyLeads}
                onChange={(e) => {
                  setMonthlyLeads(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer"
              />
            </div>

            {/* Input 2: Current Conversion Rate */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                CURRENT CONVERSION RATE
              </span>
              <div className="text-4xl sm:text-6xl font-display font-black text-white">
                {currentConversion}%
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="0.5"
                value={currentConversion}
                onChange={(e) => {
                  setCurrentConversion(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer"
              />
            </div>

            {/* Input 3: Avg Margin */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                AVERAGE GROSS PROFIT PER VEHICLE
              </span>
              <div className="text-4xl sm:text-6xl font-display font-black text-white">
                {formatINR(avgMargin)}
              </div>
              <input
                type="range"
                min="15000"
                max="75000"
                step="2500"
                value={avgMargin}
                onChange={(e) => {
                  setAvgMargin(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Output: Dramatic Number Reveal (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-8 sm:p-14 bg-[#0e0e0e] space-y-8 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b] block mb-2 font-bold">
                ESTIMATED MONTHLY NET PROFIT RECOVERED
              </span>
              <div className="text-5xl sm:text-7xl font-display font-black text-[#f3f1ec] tracking-tight leading-none mb-4">
                {formatINR(recoveredMonthlyProfit)}
                <span className="text-sm font-mono text-white/40 block mt-2 font-normal">
                  ≈ {formatINR(annualLift)} Projected Annual Impact
                </span>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-4 text-xs font-mono text-[#b8b5af]">
                <div className="flex justify-between">
                  <span>Additional Cars Sold:</span>
                  <span className="text-white font-bold">+{additionalCars} Units / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop Retention Lift:</span>
                  <span className="text-white font-bold">+12% Service Revenue</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact?.();
                }}
                data-cursor="MOVE"
                className="w-full py-4 px-8 rounded-full bg-[#f3f1ec] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#e05a2b] hover:text-white transition-colors flex items-center justify-center gap-3"
              >
                <span>Deploy Dealership OS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
