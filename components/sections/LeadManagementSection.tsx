"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export function LeadManagementSection() {
  return (
    <section id="lead-management" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            SUITE 01 // PRE-SALES VELOCITY
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            LEADS
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              don't
            </span>{" "}
            WAIT<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Magazine Spread Product Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left: Typographic Data Objects (6 cols) */}
          <div className="lg:col-span-6 space-y-10">
            <div className="border-b border-white/10 pb-8 space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                01 // AI QUALIFICATION
              </span>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#f3f1ec]">
                Score 97<span className="text-[#e05a2b]">.</span> High Intent
              </div>
              <p className="text-sm font-mono text-[#b8b5af] pt-2">
                Machine learning intent algorithms evaluate vehicle segment budget and brochure engagement within seconds.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8 space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                02 // RESPONSE LATENCY
              </span>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#f3f1ec]">
                10 Minutes<span className="text-[#e05a2b]">.</span> Not 24 Hours
              </div>
              <p className="text-sm font-mono text-[#b8b5af] pt-2">
                Automated lead capture from Tata/Maruti/Hyundai portals, CarWale, and web inquiries dispatched directly to consultants.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                03 // TELEPHONY INTEGRITY
              </span>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#f3f1ec]">
                SIM-Integrated<span className="text-[#e05a2b]">.</span> Verified Dials
              </div>
              <p className="text-sm font-mono text-[#b8b5af] pt-2">
                Zero phantom interactions. Every showroom outbound dial is duration-verified and auto-logged to the DMS.
              </p>
            </div>
          </div>

          {/* Right: Luxury Editorial Showcase Card (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-8 sm:p-12 bg-[#111111] space-y-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-white/40">
              <span>LIVE LEAD MASTER RECORD</span>
              <span className="text-[#e05a2b]">PRIORITY 01</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-white/50 block">PROSPECT / VEHICLE INTENT</span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                Rahul Sharma
              </h3>
              <p className="text-sm font-mono text-[#b8b5af]">
                Tata Safari Dark Edition XZA+ (₹28.5 Lakhs)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-white/40 block">Origin</span>
                <span className="text-white font-semibold">OEM DMS Direct</span>
              </div>
              <div className="space-y-1">
                <span className="text-white/40 block">Assigned Exec</span>
                <span className="text-white font-semibold">Karan Malhotra</span>
              </div>
              <div className="space-y-1">
                <span className="text-white/40 block">Response Speed</span>
                <span className="text-[#e05a2b] font-bold">8.4 Minutes</span>
              </div>
              <div className="space-y-1">
                <span className="text-white/40 block">Test Drive</span>
                <span className="text-white font-semibold">Tomorrow 11 AM</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>2-Way DMS Synchronized</span>
              <span className="text-white font-bold">100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
