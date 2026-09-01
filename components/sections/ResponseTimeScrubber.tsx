"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

const STEPS = [
  { time: "0.5s", contact: "96%", label: "Sub-Second Elite", desc: "Instant page render. Zero layout shift. High-ticket clients explore services immediately with maximum conversion." },
  { time: "1.5s", contact: "88%", label: "Good Performance", desc: "Smooth user experience. Prospective clients stay engaged and read through service offerings." },
  { time: "3.0s", contact: "54%", label: "Visitor Friction", desc: "Over 40% of mobile users abandon the site before reading your value proposition." },
  { time: "5.0s", contact: "28%", label: "Severe Ad Waste", desc: "Paid ad traffic from Google and Instagram bounces heavily. High customer acquisition cost." },
  { time: "8.0s+", contact: "6%", label: "Complete Drop-off", desc: "Bloated template plugins and unoptimized scripts destroy inquiry generation completely." },
];

export function ResponseTimeScrubber() {
  const [index, setIndex] = useState(0);
  const current = STEPS[index];

  return (
    <section className="relative py-20 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-24">
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
            Web Speed & Conversion Benchmark
          </span>
          <h2 className="h2-editorial text-[#f3f1ec]">
            The direct cost
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              of
            </span>{" "}
            slow page speed<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Timeline Interface */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] space-y-8 sm:space-y-10">
          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {STEPS.map((step, i) => (
              <button
                key={step.time}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIndex(i);
                }}
                className={`min-h-[50px] p-3 sm:p-5 rounded-2xl border text-left transition-all touch-manipulation cursor-pointer active:scale-95 ${
                  index === i
                    ? "bg-[#181818] border-[#e05a2b] shadow-lg shadow-[#e05a2b]/15"
                    : "bg-transparent border-white/10 hover:border-white/20 text-[#b8b5af]"
                } ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <span className="text-[10px] sm:text-[11px] font-sans text-[#b8b5af] block mb-0.5">Stage 0{i + 1}</span>
                <span className="text-base sm:text-xl font-sans font-bold text-white block">
                  {step.time}
                </span>
              </button>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-6 border-t border-white/10">
            <div className="lg:col-span-6 space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Visitor Retention Probability
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                {current.contact}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2 sm:space-y-3 border-l border-white/10 pl-0 lg:pl-8">
              <span className="text-sm font-sans text-[#e05a2b] font-semibold block">
                {current.label}
              </span>
              <p className="body-standard text-xs sm:text-sm">
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
