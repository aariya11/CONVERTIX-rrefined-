"use client";

import { motion } from "framer-motion";

export function DashboardShowcase() {
  return (
    <section className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-20 sm:mb-28">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b] mb-4 block">
            EXECUTIVE CONTROL
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.88]">
            THE COCKPIT
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              of
            </span>{" "}
            RECORD<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Masterpiece Dashboard Showcase Frame */}
        <div className="border border-white/12 rounded-3xl p-8 sm:p-14 bg-[#111111] space-y-12 shadow-2xl">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-xs font-mono">
            <span className="text-white font-bold">CONVERTIX DEALERSHIP WORKBENCH // MUMBAI CENTRAL</span>
            <span className="text-[#e05a2b]">LIVE 2-WAY SYNC ACTIVE</span>
          </div>

          {/* Core Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">MONTHLY INTAKE</span>
              <span className="text-4xl sm:text-5xl font-display font-black text-white">1,842</span>
              <span className="text-[11px] font-mono text-[#e05a2b] block">+24.8% MOM</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">RESPONSE SPEED</span>
              <span className="text-4xl sm:text-5xl font-display font-black text-white">11.2m</span>
              <span className="text-[11px] font-mono text-[#e05a2b] block">Target &lt;15m</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">FOLLOW-UP SLA</span>
              <span className="text-4xl sm:text-5xl font-display font-black text-white">94.8%</span>
              <span className="text-[11px] font-mono text-white/40 block">DMS: &lt;40%</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">RECOVERED PROFIT</span>
              <span className="text-4xl sm:text-5xl font-display font-black text-white">₹34.6L</span>
              <span className="text-[11px] font-mono text-[#e05a2b] block">MTD Net Lift</span>
            </div>
          </div>

          {/* Minimalist Live Pipeline Telemetry Summary */}
          <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-white/40 block">STAGE 01 // MULTI-SOURCE INGESTION</span>
              <p className="text-white">1,842 Leads captured from OEM, CarWale & Web in &lt;3s</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#e05a2b] block">STAGE 02 // SIM CALL & QUALIFICATION</span>
              <p className="text-white">1,746 Verified phone conversations logged with zero lag</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-white/40 block">STAGE 03 // TEST DRIVE & DMS WRITEBACK</span>
              <p className="text-white">584 Vehicle booking tokens written directly to DMS master</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
