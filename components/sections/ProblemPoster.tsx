"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  { id: "01", text: "Generic templates that commoditize your service and erode client trust." },
  { id: "02", text: "Slow 4+ second load times and broken mobile touch interactions." },
  { id: "03", text: "Absence of instant WhatsApp and high-converting callback inquiry flows." },
  { id: "04", text: "Disconnected scheduling systems that lose high-ticket leads in the cracks." },
  { id: "05", text: "Unfocused messaging that fails to communicate your premium authority." },
];

export function ProblemPoster() {
  return (
    <section id="problem" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            The Digital Problem
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Most service websites
            <br />
            <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
              leak
            </span>{" "}
            high-value clients<span className="text-[#e05a2b]">.</span>
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
              Of prospective clients abandon generic, slow, template-based websites within 8 seconds without ever submitting an inquiry.
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
