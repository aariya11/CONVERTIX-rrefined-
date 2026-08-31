"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Sliders, ShieldCheck, Zap, ArrowRight, UserCheck, Activity } from "lucide-react";
import { soundManager } from "../lib/sound";

export function AIPrioritizationEngine() {
  const [engagement, setEngagement] = useState<number>(85);
  const [budgetTier, setBudgetTier] = useState<number>(3); // 1 to 4
  const [testDriveRequested, setTestDriveRequested] = useState<boolean>(true);
  const [exchangeVehicle, setExchangeVehicle] = useState<boolean>(true);

  // Dynamic score calculation
  const calculatedScore = Math.min(
    99,
    Math.round(
      engagement * 0.4 +
        budgetTier * 10 +
        (testDriveRequested ? 18 : 0) +
        (exchangeVehicle ? 12 : 0)
    )
  );

  const getPriorityLabel = (score: number) => {
    if (score >= 90) return { label: "CRITICAL HIGH CONVERSION", color: "#d4ff00", exec: "Instant Senior Exec Dispatch" };
    if (score >= 75) return { label: "HIGH POTENTIAL LEAD", color: "#00f58c", exec: "Standard 15m Allocation" };
    if (score >= 50) return { label: "NURTURE WORKFLOW", color: "#00d8f6", exec: "Automated WhatsApp Drip" };
    return { label: "LOW INTENT / COOL", color: "#ff5500", exec: "Periodic Retargeting" };
  };

  const priorityInfo = getPriorityLabel(calculatedScore);

  return (
    <section id="ai-engine" className="relative py-20 sm:py-28 bg-[#090b10] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#d4ff00]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00]">
              Proprietary Automotive ML Algorithm
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            AI THAT KNOWS
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">who</span>{" "}
            MATTERS NOW.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
            Convertix evaluates multi-dimensional intent signals in real time—ranking incoming dealership leads so sales teams always dial high-conversion opportunities first.
          </p>
        </div>

        {/* Live Simulator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Signal Controls (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-[#0d1017] border border-white/12 flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-6">
                <Sliders className="w-4 h-4 text-white/60" />
                <span className="text-xs font-mono uppercase tracking-widest text-white">
                  Tune Live Lead Parameters
                </span>
              </div>

              {/* Slider 1: Engagement Velocity */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/70">Brochure & Spec Engagement Velocity</span>
                  <span className="text-[#d4ff00] font-bold">{engagement}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={engagement}
                  onChange={(e) => {
                    setEngagement(Number(e.target.value));
                    soundManager.playClick();
                  }}
                  className="w-full accent-[#d4ff00] cursor-pointer"
                />
              </div>

              {/* Slider 2: Vehicle Segment */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/70">Vehicle Segment / Budget Tier</span>
                  <span className="text-[#00f58c] font-bold">
                    {budgetTier === 1
                      ? "Entry Hatchback"
                      : budgetTier === 2
                      ? "Compact SUV"
                      : budgetTier === 3
                      ? "Mid-Size / Electric"
                      : "Premium 7-Seater / Luxury"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={budgetTier}
                  onChange={(e) => {
                    setBudgetTier(Number(e.target.value));
                    soundManager.playClick();
                  }}
                  className="w-full accent-[#00f58c] cursor-pointer"
                />
              </div>

              {/* Toggle 1: Test Drive Requested */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 mb-3 cursor-pointer"
                onClick={() => {
                  setTestDriveRequested(!testDriveRequested);
                  soundManager.playChirp();
                }}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    Immediate Test Drive Requested
                  </span>
                  <span className="text-[11px] font-mono text-white/50">
                    High intent multiplier (+18 pts)
                  </span>
                </div>
                <div
                  className={`w-10 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                    testDriveRequested ? "bg-[#d4ff00] justify-end" : "bg-white/20 justify-start"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-black shadow" />
                </div>
              </div>

              {/* Toggle 2: Vehicle Exchange */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer"
                onClick={() => {
                  setExchangeVehicle(!exchangeVehicle);
                  soundManager.playChirp();
                }}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    Used Car Exchange Provided
                  </span>
                  <span className="text-[11px] font-mono text-white/50">
                    Ready buyer multiplier (+12 pts)
                  </span>
                </div>
                <div
                  className={`w-10 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                    exchangeVehicle ? "bg-[#00f58c] justify-end" : "bg-white/20 justify-start"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-black shadow" />
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-white/40 pt-4 border-t border-white/5">
              Live scoring weights retrained across 450,000+ Indian automotive retail transactions.
            </div>
          </div>

          {/* Right: Real-time AI Lead Score Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-[#11141d] border border-white/15 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4ff00]/5 blur-[80px] rounded-full pointer-events-none" />

            <div>
              {/* Score Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                    AI Lead Qualification Matrix
                  </span>
                  <h3 className="text-2xl font-display font-black text-white">
                    Rahul Sharma (Verified Inquiry)
                  </h3>
                  <span className="text-xs font-mono text-white/60">
                    Target Vehicle: Safari Dark Edition XZA+
                  </span>
                </div>

                <div className="text-right">
                  <motion.div
                    key={calculatedScore}
                    initial={{ scale: 1.2, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-display font-black"
                    style={{ color: priorityInfo.color }}
                  >
                    {calculatedScore}
                  </motion.div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Score / 100
                  </span>
                </div>
              </div>

              {/* Priority Status Pill */}
              <div className="mt-6 p-4 rounded-xl border flex items-center justify-between"
                style={{
                  backgroundColor: `${priorityInfo.color}10`,
                  borderColor: `${priorityInfo.color}30`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: priorityInfo.color }}
                  />
                  <span
                    className="text-xs font-mono font-bold tracking-wider"
                    style={{ color: priorityInfo.color }}
                  >
                    {priorityInfo.label}
                  </span>
                </div>
                <span className="text-xs font-mono text-white/70">
                  {priorityInfo.exec}
                </span>
              </div>

              {/* Machine Learning Signal Breakdown */}
              <div className="mt-6 space-y-3">
                <span className="text-xs font-mono text-white/40 block">
                  ACTIVE PREDICTIVE SIGNALS
                </span>

                <div className="p-3 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/70">Price Sensitivity Band</span>
                  <span className="text-white font-semibold">₹25L – ₹30L (Approved Budget)</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/70">Conversion Window SLA</span>
                  <span className="text-[#d4ff00] font-semibold">&lt; 7 Days Expected Delivery</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/70">Automated Dispatch Protocol</span>
                  <span className="text-[#00f58c] font-semibold">Priority 1 (Top Queue)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono">
              <span className="text-white/40">Convertix ML Engine // v3.2</span>
              <span className="text-[#d4ff00] font-bold">2-Way DMS Sync Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
