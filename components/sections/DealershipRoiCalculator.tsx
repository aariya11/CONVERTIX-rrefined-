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
    <section id="roi" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Financial Impact Model
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            What does
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              slow response
            </span>
            <br />
            cost you<span className="text-[#e05a2b]">?</span>
          </h2>
        </div>

        {/* Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          {/* Inputs (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Leads */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Monthly Incoming Leads
              </span>
              <div className="text-4xl sm:text-5xl font-sans font-bold text-white">
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
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2"
              />
            </div>

            {/* Conversion */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Current Conversion Rate
              </span>
              <div className="text-4xl sm:text-5xl font-sans font-bold text-white">
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
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2"
              />
            </div>

            {/* Margin */}
            <div className="space-y-2">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Average Gross Profit per Vehicle
              </span>
              <div className="text-4xl sm:text-5xl font-sans font-bold text-white">
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
                className="w-full accent-[#e05a2b] cursor-pointer h-2 bg-[#222] rounded-lg mt-2"
              />
            </div>
          </div>

          {/* Output Card (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-6 sm:p-12 bg-[#121212] space-y-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b] block mb-2">
                Estimated Monthly Profit Recovered
              </span>
              <div className="text-4xl sm:text-6xl font-sans font-bold text-[#f3f1ec] tracking-tight leading-none mb-3">
                {formatINR(recoveredMonthlyProfit)}
                <span className="text-sm font-sans text-[#b8b5af] block mt-2 font-normal">
                  ≈ {formatINR(annualLift)} Projected Annual Impact
                </span>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3 text-xs font-sans text-[#b8b5af]">
                <div className="flex justify-between">
                  <span>Additional Cars Delivered:</span>
                  <span className="text-white font-semibold">+{additionalCars} Units / month</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop Retention Lift:</span>
                  <span className="text-white font-semibold">+12% Service Revenue</span>
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
                data-cursor="MOVE"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#f3f1ec] text-black font-sans font-semibold text-sm hover:bg-[#e05a2b] hover:text-white transition-all flex items-center justify-center gap-2"
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
