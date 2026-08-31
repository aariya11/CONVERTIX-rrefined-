"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

const STEPS = [
  { time: "10 Mins", contact: "94%", probability: "High Intent", desc: "Customer is actively reviewing brochure specs. Highest callback pickup rate." },
  { time: "30 Mins", contact: "86%", probability: "Peak Retention", desc: "Customer remembers inquiry details. High willingness to book test drive." },
  { time: "2 Hours", contact: "52%", probability: "Cooling Off", desc: "48% calls go to voicemail. Prospect starts looking at competitor models." },
  { time: "6 Hours", contact: "31%", probability: "Severe Loss", desc: "Competitor dealer has already called. Customer expresses frustration." },
  { time: "24 Hours", contact: "6%", probability: "Lost Opportunity", desc: "Booking token already paid at another showroom. Deal permanently lost." },
];

export function ResponseTimeScrubber() {
  const [index, setIndex] = useState(0);
  const current = STEPS[index];

  return (
    <section className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-20 sm:mb-28">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b] mb-4 block">
            SPEED-TO-LEAD BENCHMARK
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.88]">
            THE ADVANTAGE
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              of
            </span>{" "}
            SPEED<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Minimal Timeline Scrubber Interface */}
        <div className="border border-white/10 rounded-3xl p-8 sm:p-16 bg-[#0e0e0e] space-y-12">
          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {STEPS.map((step, i) => (
              <button
                key={step.time}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIndex(i);
                }}
                className={`p-4 sm:p-6 rounded-2xl border text-left transition-all ${
                  index === i
                    ? "bg-[#141414] border-[#e05a2b] shadow-xl"
                    : "bg-transparent border-white/8 hover:border-white/20 text-[#b8b5af]"
                }`}
              >
                <span className="text-[10px] font-mono text-white/40 block mb-1">STAGE 0{i + 1}</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-white block">
                  {step.time}
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Typographic Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                CUSTOMER CONTACT EXECUTION PROBABILITY
              </span>
              <div className="text-6xl sm:text-8xl font-display font-black text-[#f3f1ec]">
                {current.contact}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 border-l border-white/10 pl-0 lg:pl-8">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block font-bold">
                {current.probability}
              </span>
              <p className="text-base text-[#b8b5af] leading-relaxed font-normal">
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
