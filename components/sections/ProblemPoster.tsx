"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  { id: "01", text: "Slow 24-hour DMS response delay." },
  { id: "02", text: "Missed follow-ups on high-intent showroom walk-ins." },
  { id: "03", text: "Disconnected portals, aggregators, and OEM silos." },
  { id: "04", text: "Unverified manual calls with zero manager audit." },
  { id: "05", text: "Mistimed service reminders causing workshop churn." },
];

export function ProblemPoster() {
  return (
    <section id="problem" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            THE DEALERSHIP BOTTLENECK
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            EVERY MINUTE
            <br />
            <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
              costs a
            </span>{" "}
            LEAD<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition with Giant 45% Statistic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left: Giant Statistic (5 cols) */}
          <div className="lg:col-span-5 space-y-4 border-l border-white/10 pl-6 sm:pl-8">
            <span className="text-8xl sm:text-9xl font-display font-black text-[#f3f1ec] tracking-tighter block leading-none">
              45<span className="text-[#e05a2b] font-editorial font-normal italic">%</span>
            </span>
            <p className="text-sm font-mono text-[#b8b5af] max-w-xs leading-relaxed uppercase tracking-wider">
              Of potential dealership sales and service renewals permanently evaporate due to broken response speed.
            </p>
          </div>

          {/* Right: Typography List (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.id}
                className="group flex items-baseline justify-between border-b border-white/10 pb-6 hover:border-[#e05a2b] transition-colors cursor-default"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs font-mono text-white/30 group-hover:text-[#e05a2b] transition-colors">
                    {problem.id}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-display font-medium text-[#f3f1ec] group-hover:translate-x-2 transition-transform duration-300">
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
