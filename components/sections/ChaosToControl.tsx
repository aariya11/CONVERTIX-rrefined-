"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

export function ChaosToControl() {
  const [activeTab, setActiveTab] = useState<"chaos" | "control">("control");

  return (
    <section className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b] mb-4 block">
              TRANSFORMATION // PARADIGM
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.88]">
              CHAOS
              <br />
              <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
                into
              </span>{" "}
              CONTROL<span className="text-[#e05a2b]">.</span>
            </h2>
          </div>

          {/* Minimal Editorial Toggle */}
          <div className="flex items-center border border-white/15 rounded-full p-1 self-start lg:self-auto text-xs font-mono">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("chaos");
              }}
              className={`px-6 py-2.5 rounded-full uppercase tracking-wider transition-all ${
                activeTab === "chaos"
                  ? "bg-white text-black font-bold"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              01. The Chaos
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("control");
              }}
              className={`px-6 py-2.5 rounded-full uppercase tracking-wider transition-all ${
                activeTab === "control"
                  ? "bg-[#e05a2b] text-white font-bold"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              02. Convertix Control
            </button>
          </div>
        </div>

        {/* Artistic Typographic Visual Composition */}
        <div className="border border-white/10 rounded-3xl p-8 sm:p-16 bg-[#0e0e0e] relative min-h-[420px] flex flex-col justify-between">
          {activeTab === "chaos" ? (
            <motion.div
              key="chaos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-6 text-xs font-mono text-white/40">
                <span>[ UNMANAGED DEALERSHIP STATE ]</span>
                <span className="text-red-400">52% UNCALLED INQUIRIES</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-display font-bold text-white block">18 Hours</span>
                  <p className="text-xs font-mono uppercase tracking-wider">Average delay before first showroom phone call</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-display font-bold text-white block">&lt;40%</span>
                  <p className="text-xs font-mono uppercase tracking-wider">Follow-up execution on active car buyers</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-display font-bold text-white block">60%+</span>
                  <p className="text-xs font-mono uppercase tracking-wider">Mistimed workshop service reminder blasts</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="control"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-6 text-xs font-mono text-white/40">
                <span>[ CONVERTIX SYNCHRONIZED FLOW ]</span>
                <span className="text-[#e05a2b]">94.8% SLA ADHERENCE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-display font-black text-[#f3f1ec] block">
                    10 Mins<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/70">
                    Automated lead capture & instant SIM-verified assignment
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-display font-black text-[#f3f1ec] block">
                    &gt;90%<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/70">
                    Follow-up retention with automated manager escalation sentinels
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-display font-black text-[#f3f1ec] block">
                    2-Way<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/70">
                    Bi-directional OEM DMS synchronization with zero manual data lag
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="pt-8 border-t border-white/10 text-[11px] font-mono text-white/40 flex items-center justify-between">
            <span>OPERATING MODEL // CONVERTIX OS</span>
            <span>SELENIX AUTOMOTIVE ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
