"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, AlertTriangle, CheckCircle2, TrendingDown, ArrowRight } from "lucide-react";
import { soundManager } from "../lib/sound";

const TIMELINE_STEPS = [
  {
    time: "10 Mins",
    hours: 0.16,
    stage: "CONVERTIX SPEED ZONE",
    contactRate: 94,
    testDriveProb: 88,
    competitorRisk: "Zero Competitor Outreach",
    color: "#d4ff00",
    status: "Lead is actively browsing brochure. Intent at absolute peak.",
  },
  {
    time: "30 Mins",
    hours: 0.5,
    stage: "CONVERTIX SLA LIMIT",
    contactRate: 86,
    testDriveProb: 79,
    competitorRisk: "Low Risk",
    color: "#00f58c",
    status: "Lead still remembers submission. High callback engagement.",
  },
  {
    time: "2 Hours",
    hours: 2,
    stage: "TRADITIONAL CRM DELAY",
    contactRate: 52,
    testDriveProb: 44,
    competitorRisk: "Competitor Call Triggered",
    color: "#ffaa00",
    status: "Lead occupied with work. 48% calls go to voicemail.",
  },
  {
    time: "6 Hours",
    hours: 6,
    stage: "DMS ENTRY BACKLOG",
    contactRate: 31,
    testDriveProb: 22,
    competitorRisk: "Competitor Test Drive Booked",
    color: "#ff5500",
    status: "Customer has inquired with 2 other dealership brands.",
  },
  {
    time: "18 Hours",
    hours: 18,
    stage: "SEVERE COOL-DOWN",
    contactRate: 14,
    testDriveProb: 9,
    competitorRisk: "Critical Lead Loss",
    color: "#ff2200",
    status: "Customer is annoyed by late outreach. High objection rate.",
  },
  {
    time: "24 Hours+",
    hours: 24,
    stage: "TRADITIONAL DMS BENCHMARK",
    contactRate: 6,
    testDriveProb: 3,
    competitorRisk: "Deal Lost",
    color: "#880000",
    status: "Customer has already paid booking token at rival dealership.",
  },
];

export function ResponseTimeScrubber() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentStep = TIMELINE_STEPS[selectedIndex];

  return (
    <section className="relative py-28 bg-[#07080a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#d4ff00] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>THE SPEED-TO-LEAD PARADOX</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
            WHY 10 MINUTES BEATS 24 HOURS.
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-4">
            Drag the interactive timeline scrubber below to observe how vehicle buyer intent decays as dealership response latency increases.
          </p>
        </div>

        {/* Interactive Timeline Visualizer Card */}
        <div className="rounded-3xl bg-[#0d0f15] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Top Timeline Track */}
          <div className="mb-12">
            <div className="flex justify-between text-xs font-mono text-white/50 mb-3 px-2">
              <span className="text-[#d4ff00] font-bold">⚡ CONVERTIX (10–30 MIN)</span>
              <span className="text-[#ff5500] font-bold">⏳ TRADITIONAL DMS (6–24 HRS)</span>
            </div>

            {/* Step Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.time}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedIndex(idx);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedIndex === idx
                      ? "bg-[#161a24] border-[#d4ff00] shadow-lg shadow-[#d4ff00]/10 scale-105"
                      : "bg-white/5 border-white/5 hover:border-white/20 text-white/60"
                  }`}
                >
                  <div className="text-[10px] font-mono text-white/40 mb-0.5">T +</div>
                  <div
                    className={`font-display font-bold text-sm sm:text-base ${
                      selectedIndex === idx ? "text-white" : "text-white/80"
                    }`}
                  >
                    {step.time}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Metrics Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10">
            {/* Left Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `${currentStep.color}20`, color: currentStep.color }}
                >
                  {currentStep.stage}
                </span>
                <span className="text-xs font-mono text-white/40">
                  Elapsed Time: {currentStep.time}
                </span>
              </div>

              {/* Progress Bar 1: Contact Rate */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-white/70">Customer Contact Success Rate</span>
                  <span className="font-bold font-mono" style={{ color: currentStep.color }}>
                    {currentStep.contactRate}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: `${currentStep.contactRate}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: currentStep.color }}
                  />
                </div>
              </div>

              {/* Progress Bar 2: Test Drive Booking Probability */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-white/70">Test Drive Booking Probability</span>
                  <span className="font-bold font-mono" style={{ color: currentStep.color }}>
                    {currentStep.testDriveProb}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: `${currentStep.testDriveProb}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: currentStep.color }}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase">
                    Competitor Threat Level: {currentStep.competitorRisk}
                  </h4>
                  <p className="text-xs text-white/60 mt-1">{currentStep.status}</p>
                </div>
              </div>
            </div>

            {/* Right Summary Verdict Box (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141722] border border-white/15 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00] block mb-2">
                  THE CONVERTIX ADVANTAGE
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {selectedIndex < 2
                    ? "Immediate Buyer Capture"
                    : "Severe Lead Degradation"}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  {selectedIndex < 2
                    ? "Convertix automates lead allocation to sales executives within 15 seconds of inquiry, triggering instant SIM dialing and WhatsApp confirmation."
                    : "Traditional DMS batches leads for manual end-of-day assignment. Over 80% of customer intent is permanently lost during this window."}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/40">Benchmark: 2-Way Sync</span>
                <span className="text-[#00f58c] font-bold">10–30 Min Target</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
