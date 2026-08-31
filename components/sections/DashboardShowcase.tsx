"use client";

import { motion } from "framer-motion";

export function DashboardShowcase() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-3">
            Client Impact Benchmark
          </span>
          <h2 className="h2-editorial text-[#f3f1ec]">
            The performance
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              we
            </span>{" "}
            deliver<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Showcase Frame */}
        <div className="border border-white/12 rounded-3xl p-6 sm:p-12 bg-[#101010] space-y-10 shadow-xl">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-sans">
            <span className="text-white font-semibold">Convertix Studio // Average Client Service Website Impact</span>
            <span className="text-[#e05a2b] font-medium">Verified Next.js Production Metrics</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Inquiry Growth</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">+240%</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">Average Monthly Lift</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Page Load Time</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">0.58s</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">Sub-Second Delivery</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">Lighthouse Score</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">100/100</span>
              <span className="text-xs font-sans text-[#b8b5af] block">Zero Template Bloat</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">WhatsApp Conversion</span>
              <span className="text-3xl sm:text-5xl font-sans font-bold text-white">1-Click</span>
              <span className="text-xs font-sans text-[#e05a2b] block font-medium">Frictionless Leads</span>
            </div>
          </div>

          {/* Telemetry Summary */}
          <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#b8b5af] block font-medium">01. Bespoke Visual Identity</span>
              <p className="text-white">Editorial layouts tailored to your exact brand positioning</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#e05a2b] block font-medium">02. Mobile-First Optimization</span>
              <p className="text-white">Seamless navigation & touch gestures across all smartphone viewports</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-1">
              <span className="text-[#b8b5af] block font-medium">03. Automated Inbound Funnels</span>
              <p className="text-white">Real-time routing of client inquiries directly into your CRM & WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
