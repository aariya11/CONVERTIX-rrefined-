"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

export function ChaosToControl() {
  const [activeTab, setActiveTab] = useState<"chaos" | "control">("control");

  return (
    <section className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
              The Operational Paradigm
            </span>
            <h2 className="h2-editorial text-[#f3f1ec]">
              Chaos
              <br />
              <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
                into
              </span>{" "}
              control<span className="text-[#e05a2b]">.</span>
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center border border-white/15 rounded-full p-1 self-start lg:self-auto text-xs font-sans">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("chaos");
              }}
              className={`min-h-[40px] px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === "chaos"
                  ? "bg-white text-black font-semibold"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              Without Convertix
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("control");
              }}
              className={`min-h-[40px] px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === "control"
                  ? "bg-[#e05a2b] text-white font-semibold"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              With Convertix
            </button>
          </div>
        </div>

        {/* Card Box */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] min-h-[380px] flex flex-col justify-between">
          {activeTab === "chaos" ? (
            <motion.div
              key="chaos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4 text-xs font-sans text-red-400">
                <span className="font-medium">Unmanaged Showroom Operations</span>
                <span>52% Inquiry Leakage</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">18 Hours</span>
                  <p className="body-standard">Average wait time before an incoming buyer receives their first phone call</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">&lt;40%</span>
                  <p className="body-standard">Follow-up execution on showroom visits and web inquiries</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">60%+</span>
                  <p className="body-standard">Mistimed workshop service reminders sent on arbitrary dates</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="control"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4 text-xs font-sans text-[#e05a2b]">
                <span className="font-medium">Convertix Synchronized Dealership Flow</span>
                <span>94.8% SLA Adherence</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    10 Mins<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard">Automated lead routing and instant SIM-verified assignment</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    &gt;90%<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard">Follow-up compliance backed by automatic supervisor escalation alerts</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    2-Way<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard">Live OEM DMS synchronization with zero double-entry lag</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="pt-6 border-t border-white/10 text-xs font-sans text-[#b8b5af] flex items-center justify-between">
            <span>Operating Architecture</span>
            <span>Selenix Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
