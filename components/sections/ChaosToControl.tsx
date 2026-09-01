"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { soundManager } from "../lib/sound";

export function ChaosToControl() {
  const [activeTab, setActiveTab] = useState<"chaos" | "control">("control");

  return (
    <section className="relative py-20 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
              The Digital Transformation
            </span>
            <h2 className="h2-editorial text-[#f3f1ec]">
              Templates
              <br />
              <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
                into
              </span>{" "}
              growth engines<span className="text-[#e05a2b]">.</span>
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center border border-white/15 rounded-full p-1 self-start lg:self-auto text-xs font-sans bg-white/[0.02]">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("chaos");
              }}
              className={`min-h-[44px] px-5 py-2.5 rounded-full font-medium transition-all touch-manipulation cursor-pointer ${
                activeTab === "chaos"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              Standard Web Template
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("control");
              }}
              className={`min-h-[44px] px-5 py-2.5 rounded-full font-medium transition-all touch-manipulation cursor-pointer ${
                activeTab === "control"
                  ? "bg-[#e05a2b] text-white font-semibold shadow-md"
                  : "text-[#b8b5af] hover:text-white"
              }`}
            >
              Convertix Custom Build
            </button>
          </div>
        </div>

        {/* Card Box */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] min-h-[360px] flex flex-col justify-between">
          {activeTab === "chaos" ? (
            <motion.div
              key="chaos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4 text-xs font-sans text-red-400">
                <span className="font-medium">Underperforming Service Website</span>
                <span>Low Visitor Conversion</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">4.2s Delay</span>
                  <p className="body-standard text-xs sm:text-sm">Slow page loads that lose over 50% of mobile ad traffic before the page renders</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">&lt;2.1%</span>
                  <p className="body-standard text-xs sm:text-sm">Inquiry conversion rate from prospective high-ticket service clients</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">Disconnected</span>
                  <p className="body-standard text-xs sm:text-sm">Manual email forms that take hours or days to reach your sales team</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="control"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4 text-xs font-sans text-[#e05a2b]">
                <span className="font-medium">Convertix Bespoke Service Platform</span>
                <span>Sub-Second Performance</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-[#b8b5af]">
                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    0.6s Load<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard text-xs sm:text-sm">Engineered with Next.js 16 and Turbopack for instant sub-second page delivery</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    8.4% Rate<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard text-xs sm:text-sm">Editorial visual storytelling and friction-free inquiry flows that maximize conversions</p>
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-sans font-bold text-white block">
                    Instant Sync<span className="text-[#e05a2b]">.</span>
                  </span>
                  <p className="body-standard text-xs sm:text-sm">Inquiries route instantly to WhatsApp, phone dials, and your CRM in under 15 seconds</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="pt-6 border-t border-white/10 text-xs font-sans text-[#b8b5af] flex items-center justify-between">
            <span>Engineering Standard</span>
            <span>Bespoke Web Development for Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
