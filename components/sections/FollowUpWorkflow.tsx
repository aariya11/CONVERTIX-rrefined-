"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Inbox,
  CalendarCheck,
  BellRing,
  PhoneCall,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const WORKFLOW_NODES = [
  {
    step: "01",
    title: "Instant Ingestion",
    icon: Inbox,
    tag: "Realtime API",
    description: "Lead fetched within 3 seconds from OEM DMS, CarWale, or website inquiry.",
    accent: "#ffffff",
  },
  {
    step: "02",
    title: "Smart Call Scheduling",
    icon: CalendarCheck,
    tag: "AI Timing",
    description: "AI calculates optimal contact window based on vehicle segment and historical pickup rates.",
    accent: "#d4ff00",
  },
  {
    step: "03",
    title: "Omnichannel Reminder",
    icon: BellRing,
    tag: "WhatsApp & SMS",
    description: "Customer receives interactive digital brochure and salesperson digital business card.",
    accent: "#00d8f6",
  },
  {
    step: "04",
    title: "SIM-Verified Dial",
    icon: PhoneCall,
    tag: "Zero Phantom Dials",
    description: "Executive calls via SIM. Call duration, timestamp, and disposition auto-logged into DMS.",
    accent: "#00f58c",
  },
  {
    step: "05",
    title: "AI Inactivity Sentinel",
    icon: ShieldAlert,
    tag: "24h SLA Monitor",
    description: "If an active lead sits untouched for >24h, the system flags the lead as 'At-Risk'.",
    accent: "#ff5500",
  },
  {
    step: "06",
    title: "Manager Escalation",
    icon: ArrowUpRight,
    tag: "Branch Hierarchy",
    description: "Automated alert dispatched to Branch Manager to reallocate the deal to an available executive.",
    accent: "#ff5500",
  },
  {
    step: "07",
    title: "Closed Won Deal",
    icon: CheckCircle2,
    tag: "2-Way DMS Writeback",
    description: "Booking token captured and receipt generated with zero manual re-entry.",
    accent: "#00f58c",
  },
];

export function FollowUpWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(3);

  return (
    <section className="relative py-20 sm:py-28 bg-[#090a0e] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block">
            Follow-Up Execution Engine
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            THE FOLLOW-UP
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">should</span>{" "}
            NEVER BE FORGOTTEN.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
            Convertix replaces manual diary reminders with an automated, multi-tiered follow-up pipeline backed by automated manager escalations and inactivity sentinels.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 mb-10">
          {WORKFLOW_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isCurrent = activeStep === idx;

            return (
              <button
                key={node.step}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveStep(idx);
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isCurrent
                    ? "bg-[#151922] border-[#d4ff00] shadow-xl shadow-[#d4ff00]/5 scale-[1.02]"
                    : "bg-[#0d0f15] border-white/8 hover:border-white/20 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-white/40">{node.step}</span>
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: `${node.accent}15`, color: node.accent }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-display font-bold text-xs sm:text-sm text-white mb-1">
                  {node.title}
                </div>
                <div className="text-[10px] font-mono text-white/40 truncate">{node.tag}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-[#0f121a] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div
              className="p-3 rounded-2xl border shrink-0"
              style={{
                backgroundColor: `${WORKFLOW_NODES[activeStep].accent}20`,
                borderColor: `${WORKFLOW_NODES[activeStep].accent}40`,
                color: WORKFLOW_NODES[activeStep].accent,
              }}
            >
              {(() => {
                const Icon = WORKFLOW_NODES[activeStep].icon;
                return <Icon className="w-6 h-6" />;
              })()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-white/40">
                  STEP {WORKFLOW_NODES[activeStep].step} OF 07
                </span>
                <span
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${WORKFLOW_NODES[activeStep].accent}20`,
                    color: WORKFLOW_NODES[activeStep].accent,
                  }}
                >
                  {WORKFLOW_NODES[activeStep].tag}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {WORKFLOW_NODES[activeStep].title}
              </h3>
              <p className="text-sm text-white/70 max-w-2xl font-normal leading-relaxed">
                {WORKFLOW_NODES[activeStep].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto shrink-0 text-xs font-mono">
            <span className="text-white/40">Execution SLA</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#00f58c]/15 text-[#00f58c] font-bold border border-[#00f58c]/30">
              100% AUTOMATED
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
