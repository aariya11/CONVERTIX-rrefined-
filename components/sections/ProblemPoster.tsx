"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  { id: "01", text: "Slow 24-hour response delay across online leads." },
  { id: "02", text: "Missed follow-ups on active showroom inquiries." },
  { id: "03", text: "Disconnected OEM DMS, web portals, and aggregator silos." },
  { id: "04", text: "Unverified manual telecalls with zero leadership audit." },
  { id: "05", text: "Mistimed service reminders causing workshop bay churn." },
];

export function ProblemPoster() {
  return (
    <section id="problem" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            The Dealership Problem
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Every minute
            <br />
            <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
              costs a
            </span>{" "}
            lead<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          {/* Left: 45% Statistic (5 cols) */}
          <div className="lg:col-span-5 space-y-4 border-l border-white/10 pl-6 sm:pl-8">
            <span className="text-7xl sm:text-8xl md:text-9xl font-sans font-bold text-[#f3f1ec] tracking-tighter block leading-none">
              45<span className="text-[#e05a2b] font-editorial font-normal italic">%</span>
            </span>
            <p className="body-standard max-w-sm">
              Of prospective car buyers and workshop service renewals drop off when initial showroom follow-up exceeds 30 minutes.
            </p>
          </div>

          {/* Right: Pain Point List (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.id}
                className="group flex items-baseline justify-between border-b border-white/10 pb-5 hover:border-[#e05a2b] transition-colors"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-sans font-semibold text-[#e05a2b]">
                    {problem.id}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-sans font-medium text-[#f3f1ec]">
                    {problem.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
