"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Unlink, UserX, EyeOff, FileX, ArrowDownRight } from "lucide-react";
import { soundManager } from "../lib/sound";

const PROBLEMS = [
  {
    id: "01",
    title: "Slow Response Time",
    metric: "6–24h DMS Delay",
    penalty: "-78% Conversion Loss",
    description:
      "Most dealership CRMs delay the first customer contact due to manual lead assignment and lack of real-time supervisor alerts. By the time an executive calls, the customer has booked elsewhere.",
    icon: Clock,
    accent: "#ff5500",
  },
  {
    id: "02",
    title: "Missed Follow-Ups",
    metric: "<40% Follow-up Rate",
    penalty: "60% Inactive Leakage",
    description:
      "Sales consultants get overwhelmed on the showroom floor. High-intent leads slip away unnoticed without automated scheduling, smart reminders, and management escalation triggers.",
    icon: AlertTriangle,
    accent: "#ff5500",
  },
  {
    id: "03",
    title: "Disconnected OEM Silos",
    metric: "Manual Re-entry",
    penalty: "Data Fragmentation",
    description:
      "Portals, manufacturer DMS, aggregator leads (CarWale/CarDekho), and WhatsApp live in separate worlds. Sales teams waste hours copy-pasting numbers rather than closing cars.",
    icon: Unlink,
    accent: "#ff5500",
  },
  {
    id: "04",
    title: "Unverified Manual Calls",
    metric: "0% Call Visibility",
    penalty: "Phantom Interactions",
    description:
      "No SIM-level verification means managers never know if a lead was genuinely dialed, how long the conversation lasted, or what objection prevented the test drive booking.",
    icon: UserX,
    accent: "#ff5500",
  },
  {
    id: "05",
    title: "Blind Spot Inactivity",
    metric: "Zero Escalations",
    penalty: "Stale Opportunities",
    description:
      "Leads sit unattended for days when a consultant is on leave or occupied with delivery. Without AI sentinels, branch managers discover lost deals only at end-of-month review.",
    icon: EyeOff,
    accent: "#ff5500",
  },
  {
    id: "06",
    title: "Lost Service & Insurance",
    metric: ">60% Mistimed Reminders",
    penalty: "Customer Churn",
    description:
      "Generic reminder blasts fail because they ignore actual vehicle mileage rhythms and insurance expiry horizons. Workshop bays sit empty while renewals go to third parties.",
    icon: FileX,
    accent: "#ff5500",
  },
];

export function ProblemPoster() {
  const [activeProblem, setActiveProblem] = useState<string>("01");

  return (
    <section id="problem" className="relative py-28 bg-[#090a0d] border-t border-b border-white/10 overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500]">
            The Dealership Bottleneck
          </span>
        </div>

        {/* Large Typographic Statement */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            EVERY MINUTE
            <br />
            <span className="text-[#ff5500]">COSTS A LEAD.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4 font-normal">
            Automotive retail operations lose up to 45% of potential vehicle sales and service renewals not from lack of marketing, but from broken showroom communication latency.
          </p>
        </div>

        {/* Interactive Poster Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            const isActive = activeProblem === problem.id;

            return (
              <motion.div
                key={problem.id}
                onMouseEnter={() => {
                  soundManager.playClick();
                  setActiveProblem(problem.id);
                }}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#14161f] border-[#ff5500]/50 shadow-2xl shadow-[#ff5500]/10"
                    : "bg-[#0d0f14] border-white/8 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white/40 font-bold">
                    [ ISSUE // {problem.id} ]
                  </span>
                  <div
                    className={`p-2 rounded-xl border transition-colors ${
                      isActive
                        ? "bg-[#ff5500]/15 text-[#ff5500] border-[#ff5500]/30"
                        : "bg-white/5 text-white/40 border-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">
                  {problem.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-white/80 border border-white/10">
                    {problem.metric}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#ff5500]/15 text-[11px] font-mono text-[#ff5500] border border-[#ff5500]/30 font-semibold">
                    {problem.penalty}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  {problem.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>Traditional DMS Vulnerability</span>
                  <ArrowDownRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? "text-[#ff5500] translate-x-0.5 translate-y-0.5" : ""
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
