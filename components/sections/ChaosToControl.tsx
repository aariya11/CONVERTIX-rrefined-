"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight, RefreshCw, Layers, CheckCircle2, AlertOctagon } from "lucide-react";
import { soundManager } from "../lib/sound";

export function ChaosToControl() {
  const [mode, setMode] = useState<"chaos" | "control">("control");

  const toggleMode = (newMode: "chaos" | "control") => {
    soundManager.playChirp();
    setMode(newMode);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#07080a] overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-2 block">
              Architectural Paradigm
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              CHAOS <span className="font-editorial text-white/40 font-normal italic">to</span> CONTROL.
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center p-1.5 rounded-full bg-[#13161f] border border-white/12 self-start md:self-auto">
            <button
              type="button"
              onClick={() => toggleMode("chaos")}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                mode === "chaos"
                  ? "bg-[#ff5500] text-white font-bold shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              01. Unmanaged Chaos
            </button>
            <button
              type="button"
              onClick={() => toggleMode("control")}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                mode === "control"
                  ? "bg-[#d4ff00] text-black font-bold shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              02. Convertix Precision
            </button>
          </div>
        </div>

        {/* Dynamic Canvas Container */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-white/12 p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="absolute inset-0 tech-grid-dense opacity-25 pointer-events-none" />

          {mode === "chaos" ? (
            <motion.div
              key="chaos"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <AlertOctagon className="w-6 h-6 text-[#ff5500]" />
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Status Quo: Fragmented Dealership Leakage
                  </h3>
                  <p className="text-xs font-mono text-white/50">
                    Average First Contact: 14.8 Hours • Uncalled Leads: 52% • Lost Monthly Revenue: ₹18.4L
                  </p>
                </div>
              </div>

              {/* Scattered Chaos Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 rotate-[-1deg] space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-red-400">
                    <span>PORTAL INBOX: CarWale</span>
                    <span>18h UNTOUCHED</span>
                  </div>
                  <div className="font-bold text-white text-sm">Lead: Rajiv Sen (Creta Top End)</div>
                  <p className="text-xs text-white/50">Lead sitting in unmonitored portal inbox. No sales exec assigned.</p>
                </div>

                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 rotate-[1.5deg] space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-red-400">
                    <span>OEM DMS LEAD</span>
                    <span>NO DIAL RECORD</span>
                  </div>
                  <div className="font-bold text-white text-sm">Lead: Meera Gupta (Nexon EV)</div>
                  <p className="text-xs text-white/50">Consultant marked "called" manually without SIM audio verification.</p>
                </div>

                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 rotate-[-2deg] space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-red-400">
                    <span>SERVICE REMINDER</span>
                    <span>EXPIRED 45 DAYS</span>
                  </div>
                  <div className="font-bold text-white text-sm">Vehicle: MH02-DX-4412 (10,000 km)</div>
                  <p className="text-xs text-white/50">Customer received no scheduled WhatsApp reminder. Visited local garage.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="control"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00f58c]" />
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Convertix Synchronized Operating Flow
                  </h3>
                  <p className="text-xs font-mono text-[#d4ff00]">
                    Average First Contact: 11.2 Minutes • Follow-Up Execution: 94.8% • Lead Loss: Zero
                  </p>
                </div>
              </div>

              {/* Synchronized Precision Pipeline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#141720] border border-[#d4ff00]/40 space-y-2 shadow-lg">
                  <div className="flex justify-between text-[11px] font-mono text-[#d4ff00]">
                    <span>AUTOMATIC CAPTURE</span>
                    <span className="text-[#00f58c]">SYNCED &lt;4 SECONDS</span>
                  </div>
                  <div className="font-bold text-white text-sm">Lead: Rajiv Sen (Creta SX Turbo)</div>
                  <p className="text-xs text-white/60">Fetched from portal, scored 97 by AI, auto-assigned to Senior Consultant.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#141720] border border-[#00f58c]/40 space-y-2 shadow-lg">
                  <div className="flex justify-between text-[11px] font-mono text-[#00f58c]">
                    <span>SIM-VERIFIED DIAL</span>
                    <span>3M 40S LOGGED</span>
                  </div>
                  <div className="font-bold text-white text-sm">Lead: Meera Gupta (Nexon EV)</div>
                  <p className="text-xs text-white/60">SIM dialed directly. Call verified & test drive scheduled with manager notification.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#141720] border border-[#00d8f6]/40 space-y-2 shadow-lg">
                  <div className="flex justify-between text-[11px] font-mono text-[#00d8f6]">
                    <span>PREDICTIVE SERVICE</span>
                    <span>1-CLICK WHATSAPP</span>
                  </div>
                  <div className="font-bold text-white text-sm">Vehicle: MH02-DX-4412 (10,000 km)</div>
                  <p className="text-xs text-white/60">Mileage algorithm triggered proactive WhatsApp with pickup slot. Bay booked.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
