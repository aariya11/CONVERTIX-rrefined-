"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Users,
  Activity,
  BarChart2,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const BRANCHES = ["Mumbai Central Flagship", "Bengaluru Tech Hub", "Delhi NCR Hub"];

const METRICS = [
  { label: "Active Monthly Leads", value: "1,842", change: "+24.8%", positive: true },
  { label: "Avg Response Speed", value: "11.2 Min", change: "-84% vs DMS", positive: true },
  { label: "Follow-Up SLA Adherence", value: "94.8%", change: "+56.2%", positive: true },
  { label: "Revenue Recovered (MTD)", value: "₹34.6L", change: "+18.5%", positive: true },
];

const LEADERBOARD = [
  { name: "Karan Malhotra", leads: 142, response: "8.2m", closed: 18, conversion: "12.6%" },
  { name: "Priya Sengupta", leads: 128, response: "9.5m", closed: 15, conversion: "11.7%" },
  { name: "Aditya Singhania", leads: 135, response: "11.0m", closed: 14, conversion: "10.3%" },
  { name: "Neha Bansal", leads: 110, response: "12.4m", closed: 12, conversion: "10.9%" },
];

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<"funnel" | "leaderboard">("funnel");
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#07080a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block">
              Multi-Branch Executive Cockpit
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
              REALTIME VISIBILITY.
              <br />
              <span className="font-editorial text-white/40 font-normal italic lowercase">across</span>{" "}
              EVERY OUTLET.
            </h2>
          </div>

          {/* Branch Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 self-start lg:self-auto">
            {BRANCHES.map((branch) => (
              <button
                key={branch}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedBranch(branch);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedBranch === branch
                    ? "bg-[#d4ff00] text-black font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {branch}
              </button>
            ))}
          </div>
        </div>

        {/* Executive Dashboard Container */}
        <div className="rounded-3xl bg-[#0c0e14] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top KPI Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl bg-[#12151d] border border-white/8 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                  {metric.label}
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#00f58c] font-semibold mt-1">
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subheader Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab("funnel");
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                  activeTab === "funnel"
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:text-white"
                }`}
              >
                Conversion Funnel & Speed
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab("leaderboard");
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                  activeTab === "leaderboard"
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:text-white"
                }`}
              >
                Sales Floor Leaderboard
              </button>
            </div>

            <span className="text-xs font-mono text-[#00f58c] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f58c] animate-ping" />
              Live Telemetry Sync: 100% SLA Compliance
            </span>
          </div>

          {/* Tab Views */}
          {activeTab === "funnel" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Funnel Stage 1 */}
              <div className="p-6 rounded-2xl bg-[#11141c] border border-white/8 space-y-3">
                <div className="flex justify-between text-xs font-mono text-white/40">
                  <span>STAGE 01</span>
                  <span>1,842 LEADS</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  Multi-Source Ingestion
                </h4>
                <p className="text-xs text-white/50">
                  OEM DMS (52%), CarWale (28%), Dealer Web (20%) captured in &lt;3s.
                </p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white w-full rounded-full" />
                </div>
              </div>

              {/* Funnel Stage 2 */}
              <div className="p-6 rounded-2xl bg-[#11141c] border border-white/8 space-y-3">
                <div className="flex justify-between text-xs font-mono text-white/40">
                  <span>STAGE 02</span>
                  <span className="text-[#d4ff00]">1,746 CONTACTED</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  10-Min Verified Call
                </h4>
                <p className="text-xs text-white/50">
                  94.8% first contact execution via SIM telecall logging.
                </p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#d4ff00] w-[94.8%] rounded-full" />
                </div>
              </div>

              {/* Funnel Stage 3 */}
              <div className="p-6 rounded-2xl bg-[#11141c] border border-white/8 space-y-3">
                <div className="flex justify-between text-xs font-mono text-white/40">
                  <span>STAGE 03</span>
                  <span className="text-[#00f58c]">584 WON DEALS</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  Test Drive & Closed Sale
                </h4>
                <p className="text-xs text-white/50">
                  Direct DMS writeback of booking tokens and vehicle delivery slots.
                </p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#00f58c] w-[31.7%] rounded-full" />
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4">Sales Consultant</th>
                    <th className="py-3 px-4">Allocated Leads</th>
                    <th className="py-3 px-4">Avg Response Time</th>
                    <th className="py-3 px-4">Cars Booked</th>
                    <th className="py-3 px-4">Conversion %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {LEADERBOARD.map((exec, idx) => (
                    <tr key={exec.name} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/10 text-white/60 flex items-center justify-center text-[10px]">
                          0{idx + 1}
                        </span>
                        {exec.name}
                      </td>
                      <td className="py-3.5 px-4 text-white/70">{exec.leads}</td>
                      <td className="py-3.5 px-4 text-[#d4ff00] font-bold">{exec.response}</td>
                      <td className="py-3.5 px-4 text-[#00f58c] font-bold">{exec.closed}</td>
                      <td className="py-3.5 px-4 text-white">{exec.conversion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
