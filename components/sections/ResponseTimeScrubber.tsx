"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

const STEPS = [
  { time: "10 Mins", contact: "94%", label: "High Intent", desc: "Customer is actively reviewing specs. Highest callback answer rate and test drive booking conversion." },
  { time: "30 Mins", contact: "86%", label: "Active Interest", desc: "Customer clearly remembers submitting the inquiry. Receptive to dealership consultation." },
  { time: "2 Hours", contact: "52%", label: "Cooling Off", desc: "Nearly half of inquiries go unanswered. Customer starts browsing competing brands." },
  { time: "6 Hours", contact: "31%", label: "Severe Leakage", desc: "A rival dealer group has already connected. Customer shows high friction." },
  { time: "24 Hours", contact: "6%", label: "Lost Sale", desc: "Booking token or test drive already committed elsewhere. Lead is permanently lost." },
];

export function ResponseTimeScrubber() {
  const [index, setIndex] = useState(0);
  const current = STEPS[index];

  return (
    <section className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
            Speed-to-Lead Benchmark
          </span>
          <h2 className="h2-editorial text-[#f3f1ec]">
            The advantage
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              of
            </span>{" "}
            speed<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Timeline Interface */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] space-y-10">
          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
            {STEPS.map((step, i) => (
              <button
                key={step.time}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIndex(i);
                }}
                className={`min-h-[52px] p-3.5 sm:p-5 rounded-2xl border text-left transition-all ${
                  index === i
                    ? "bg-[#161616] border-[#e05a2b] shadow-lg"
                    : "bg-transparent border-white/10 hover:border-white/20 text-[#b8b5af]"
                }`}
              >
                <span className="text-[11px] font-sans text-[#b8b5af] block mb-0.5">Stage 0{i + 1}</span>
                <span className="text-lg sm:text-xl font-sans font-bold text-white block">
                  {step.time}
                </span>
              </button>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-white/10">
            <div className="lg:col-span-6 space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Contact Execution Probability
              </span>
              <div className="text-6xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                {current.contact}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3 border-l border-white/10 pl-0 lg:pl-8">
              <span className="text-sm font-sans text-[#e05a2b] font-semibold block">
                {current.label}
              </span>
              <p className="body-standard">
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
