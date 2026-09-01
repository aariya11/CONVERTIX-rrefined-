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
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(3000);
  const [currentConversion, setCurrentConversion] = useState<number>(2.5);
  const [avgClientValue, setAvgClientValue] = useState<number>(45000);

  // Convertix lifts conversion by +3.5% through sub-second speed, editorial trust, and 1-tap WhatsApp capture
  const additionalClients = Math.round(monthlyVisitors * 0.035);
  const recoveredMonthlyProfit = additionalClients * avgClientValue;
  const annualLift = recoveredMonthlyProfit * 12;

  return (
    <section id="roi" className="relative py-20 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Revenue Impact Model
          </span>
        </div>

        {/* Headline */}
        <div className="mb-12 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            What is a slow website
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              costing your
            </span>
            <br />
            service business<span className="text-[#e05a2b]">?</span>
          </h2>
        </div>

        {/* Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
          {/* Inputs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Visitors */}
            <div className="border-b border-white/10 pb-5 space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Monthly Website Visitors
              </span>
              <div className="text-3xl sm:text-5xl font-sans font-bold text-white">
                {monthlyVisitors.toLocaleString()}
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={monthlyVisitors}
                onChange={(e) => {
                  setMonthlyVisitors(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2 touch-manipulation"
              />
            </div>

            {/* Conversion */}
            <div className="border-b border-white/10 pb-5 space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Current Inquiry Conversion Rate
              </span>
              <div className="text-3xl sm:text-5xl font-sans font-bold text-white">
                {currentConversion}%
              </div>
              <input
                type="range"
                min="0.5"
                max="8"
                step="0.5"
                value={currentConversion}
                onChange={(e) => {
                  setCurrentConversion(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2 touch-manipulation"
              />
            </div>

            {/* Client Value */}
            <div className="space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Average Value per Client / Contract
              </span>
              <div className="text-3xl sm:text-5xl font-sans font-bold text-white">
                {formatINR(avgClientValue)}
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={avgClientValue}
                onChange={(e) => {
                  setAvgClientValue(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2 touch-manipulation"
              />
            </div>
          </div>

          {/* Output Card (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-6 sm:p-12 bg-[#121212] space-y-6 sm:space-y-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b] block mb-2">
                Projected Monthly Revenue Lift
              </span>
              <div className="text-3xl sm:text-6xl font-sans font-bold text-[#f3f1ec] tracking-tight leading-none mb-3">
                {formatINR(recoveredMonthlyProfit)}
                <span className="text-xs sm:text-sm font-sans text-[#b8b5af] block mt-2 font-normal">
                  ≈ {formatINR(annualLift)} Projected Annual Business Growth
                </span>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3 text-xs font-sans text-[#b8b5af]">
                <div className="flex justify-between">
                  <span>Additional Inquiries Converted:</span>
                  <span className="text-white font-semibold">+{additionalClients} High-Value Clients / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Multiplier:</span>
                  <span className="text-white font-semibold">+3.5% Baseline Lift</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact?.();
                }}
                data-cursor="START"
                className="w-full min-h-[50px] py-3.5 px-6 rounded-full bg-[#f3f1ec] text-black font-sans font-semibold text-sm hover:bg-[#e05a2b] hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation cursor-pointer"
              >
                <span>Build Your High-Converting Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
