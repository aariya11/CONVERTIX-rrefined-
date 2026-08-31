"use client";

import { motion } from "framer-motion";

export function AIPrioritizationEngine() {
  return (
    <section id="ai-engine" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Machine Learning Protocol
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            AI that knows
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              who
            </span>{" "}
            matters now<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Data Box */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Score (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
              Real-Time Intent Score
            </span>
            <div className="text-7xl sm:text-9xl font-sans font-bold text-[#f3f1ec] leading-none">
              97<span className="text-[#e05a2b]">.</span>
            </div>
            <span className="text-sm font-sans font-semibold text-[#e05a2b] block">
              High Conversion Probability
            </span>
          </div>

          {/* Right Insights (7 cols) */}
          <div className="lg:col-span-7 space-y-6 border-l border-white/10 pl-0 lg:pl-10">
            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Signal Evaluation
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Vehicle Segment: Premium SUV (₹28.5L Budget)
              </h3>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Dispatch SLA
              </span>
              <p className="body-standard">
                Immediate test drive request identified. Automatically routed to the lead sales consultant in under 15 seconds.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-sans text-[#b8b5af]">
              Machine learning models quietly rank hundreds of daily inquiries so consultants always dial ready buyers first.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
