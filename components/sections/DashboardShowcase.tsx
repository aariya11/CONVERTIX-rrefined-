"use client";

import { motion } from "framer-motion";

export function DashboardShowcase() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
            Executive Cockpit
          </span>
          <h2 className="h2-editorial text-[#f3f1ec]">
            The cockpit
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              of
            </span>{" "}
            record<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Dashboard Frame */}
        <div className="border border-white/12 rounded-3xl p-6 sm:p-12 bg-[#101010] space-y-10 shadow-xl">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-sans">
            <span className="text-white font-semibold">Convertix Dealership Workbench // Mumbai Central</span>
            <span className="text-[#e05a2b] font-medium">Live 2-Way Sync Active</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Monthly Intake</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">1,842</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">+24.8% MoM</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Response Speed</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">11.2m</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">Target &lt;15m</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Follow-Up SLA</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">94.8%</span>
              <span className="text-xs font-sans text-[#b8b5af] block">DMS: &lt;40%</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Recovered Profit</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">₹34.6L</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">Monthly Net Lift</span>
            </div>
          </div>

          {/* Telemetry Summary */}
          <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#b8b5af] block font-medium">01. Multi-Source Ingestion</span>
              <p className="text-white">1,842 Leads captured from OEM, CarWale & Web in under 3s</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#e05a2b] block font-medium">02. SIM Dial & Verification</span>
              <p className="text-white">1,746 Verified phone conversations logged with zero lag</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#b8b5af] block font-medium">03. Test Drive & DMS Sync</span>
              <p className="text-white">584 Vehicle booking tokens written directly to DMS master</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
