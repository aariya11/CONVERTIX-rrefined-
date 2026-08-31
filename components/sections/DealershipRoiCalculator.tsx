"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Calculator, ArrowRight, DollarSign, TrendingUp } from "lucide-react";
import { formatINR } from "../lib/utils";
import { soundManager } from "../lib/sound";

interface DealershipRoiCalculatorProps {
  onOpenContact?: () => void;
}

export function DealershipRoiCalculator({ onOpenContact }: DealershipRoiCalculatorProps) {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(1200);
  const [currentConversion, setCurrentConversion] = useState<number>(6); // 6%
  const [avgMargin, setAvgMargin] = useState<number>(35000); // ₹35,000 per car
  const [workshopCars, setWorkshopCars] = useState<number>(3500);

  // Convertix lifts conversion by an average of +3.5% due to 10m response speed & 90% follow-up
  const additionalCars = Math.round(monthlyLeads * 0.035);
  const recoveredSalesProfit = additionalCars * avgMargin;

  // Workshop retention lift: +12% on service bookings, avg ticket ₹6,500 with ₹2,200 margin
  const additionalServices = Math.round(workshopCars * 0.08);
  const recoveredServiceProfit = additionalServices * 2200;

  const totalMonthlyGain = recoveredSalesProfit + recoveredServiceProfit;
  const annualGain = totalMonthlyGain * 12;

  const handleCelebrate = () => {
    soundManager.playChirp();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#d4ff00", "#00f58c", "#ffffff"],
    });
  };

  return (
    <section id="roi" className="relative py-20 sm:py-28 bg-[#07080a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#d4ff00] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>FINANCIAL REVENUE PROJECTION MODEL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
            CALCULATE YOUR DEALERSHIP ROI.
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-4">
            See the exact monthly net profit recovered by reducing response latency from 14 hours to 10 minutes and increasing follow-up adherence above 90%.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Inputs (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-[#0d1017] border border-white/12 space-y-6 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-white/60 block pb-2 border-b border-white/10">
              Dealership Operational Volume
            </span>

            {/* Slider 1: Monthly Leads */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70">Monthly Showroom & Digital Inquiries</span>
                <span className="text-[#d4ff00] font-bold">{monthlyLeads.toLocaleString()} Leads</span>
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
                className="w-full accent-[#d4ff00] cursor-pointer"
              />
            </div>

            {/* Slider 2: Current Showroom Conversion */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70">Current Baseline Conversion Rate</span>
                <span className="text-white font-bold">{currentConversion}%</span>
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
                className="w-full accent-white cursor-pointer"
              />
            </div>

            {/* Slider 3: Average Vehicle Gross Margin */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70">Average Gross Profit Margin / Car</span>
                <span className="text-[#00f58c] font-bold">{formatINR(avgMargin)}</span>
              </div>
              <input
                type="range"
                min="15000"
                max="80000"
                step="2500"
                value={avgMargin}
                onChange={(e) => {
                  setAvgMargin(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#00f58c] cursor-pointer"
              />
            </div>

            {/* Slider 4: Workshop Customer Fleet */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70">Active Dealership Workshop Customer Base</span>
                <span className="text-[#00d8f6] font-bold">{workshopCars.toLocaleString()} Vehicles</span>
              </div>
              <input
                type="range"
                min="500"
                max="12000"
                step="250"
                value={workshopCars}
                onChange={(e) => {
                  setWorkshopCars(Number(e.target.value));
                  soundManager.playClick();
                }}
                className="w-full accent-[#00d8f6] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Output Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-[#121620] border border-[#d4ff00]/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4ff00]/10 blur-[90px] rounded-full pointer-events-none" />

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
                PROJECTED RECOVERED PROFIT
              </span>
              <h3 className="text-3xl font-display font-black text-white mb-6">
                Monthly Net Profit Lift
              </h3>

              <div className="p-6 rounded-2xl bg-[#090b10] border border-white/10 mb-6">
                <div className="text-xs font-mono text-white/50 mb-1">TOTAL ESTIMATED GAIN</div>
                <div className="text-4xl sm:text-5xl font-display font-black text-[#d4ff00] tracking-tight">
                  {formatINR(totalMonthlyGain)}
                  <span className="text-xs font-mono text-white/60 font-normal ml-2">/ month</span>
                </div>
                <div className="text-xs font-mono text-[#00f58c] mt-1 font-semibold">
                  ≈ {formatINR(annualGain)} Additional Annual Net Profit
                </div>
              </div>

              {/* Sub-breakdown */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <span className="text-white/40 block mb-1">ADDITIONAL CARS SOLD</span>
                  <div className="text-xl font-display font-bold text-white">
                    +{additionalCars} Units / mo
                  </div>
                  <span className="text-[#00f58c] text-[10px]">
                    +{formatINR(recoveredSalesProfit)}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <span className="text-white/40 block mb-1">WORKSHOP SERVICE LIFT</span>
                  <div className="text-xl font-display font-bold text-white">
                    +{additionalServices} Bays / mo
                  </div>
                  <span className="text-[#00d8f6] text-[10px]">
                    +{formatINR(recoveredServiceProfit)}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleCelebrate}
                className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>Trigger ROI Simulation</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact?.();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10"
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
