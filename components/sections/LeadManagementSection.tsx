"use client";

import { motion } from "framer-motion";

export function LeadManagementSection() {
  return (
    <section id="services" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Service Architecture // Web Design
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Design that
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              captures
            </span>{" "}
            high-value clients<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          {/* Left Narrative Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                01. Editorial Brand Authority
              </span>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">
                Luxury Visual Storytelling<span className="text-[#e05a2b]">.</span> Not Generic Cards
              </div>
              <p className="body-standard pt-1">
                We craft bespoke typography, intentional asymmetry, and cinematic layouts that elevate your service above commodity competition.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                02. Frictionless Conversion
              </span>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">
                Direct WhatsApp & Lead Routing<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard pt-1">
                Engineered with instant one-tap WhatsApp booking channels, smart consultation modals, and automated CRM webhook dispatch.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                03. Engineering Precision
              </span>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">
                100 Lighthouse Performance<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard pt-1">
                Zero bloated plugins. Handcrafted with clean Next.js 16, TypeScript, and Tailwind CSS for instant sub-second rendering across all devices.
              </p>
            </div>
          </div>

          {/* Right Showcase Card (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-6 sm:p-10 bg-[#121212] space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-sans text-[#b8b5af]">
              <span>Studio Deliverable</span>
              <span className="text-[#e05a2b] font-semibold">Custom Web Architecture</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] block">Client Profile</span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                Apex Automotive Group
              </h3>
              <p className="body-standard text-[#e05a2b]">
                Luxury Dealership & Service Network
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-sans">
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Core Technology</span>
                <span className="text-white font-medium">Next.js 16 + React 19</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Inquiry Routing</span>
                <span className="text-white font-medium">WhatsApp & Direct API</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Page Speed</span>
                <span className="text-[#e05a2b] font-semibold">0.58s FCP</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Inquiry Lift</span>
                <span className="text-white font-medium">+240% Inbound Leads</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans text-[#b8b5af]">
              <span>Search Engine Optimized</span>
              <span className="text-white font-semibold">Full Structured Schema</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
