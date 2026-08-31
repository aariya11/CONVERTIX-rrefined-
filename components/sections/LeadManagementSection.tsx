"use client";

import { motion } from "framer-motion";

export function LeadManagementSection() {
  return (
    <section id="lead-management" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Suite 01 // Pre-Sales Velocity
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Leads
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              don't
            </span>{" "}
            wait<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          {/* Left Narrative Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                01. AI Qualification
              </span>
              <div className="text-2xl sm:text-4xl font-sans font-bold text-[#f3f1ec]">
                Score 97<span className="text-[#e05a2b]">.</span> High-Intent Buyers First
              </div>
              <p className="body-standard pt-1">
                Machine learning intent algorithms evaluate vehicle segment budget, brochure downloads, and trade-in indicators in real time.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                02. Speed to Contact
              </span>
              <div className="text-2xl sm:text-4xl font-sans font-bold text-[#f3f1ec]">
                10-Minute Response<span className="text-[#e05a2b]">.</span> Not Next Day
              </div>
              <p className="body-standard pt-1">
                Automated ingestion routes inquiries from OEM portals, CarWale, and web walk-ins straight to showroom floor consultants.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                03. Call Verification
              </span>
              <div className="text-2xl sm:text-4xl font-sans font-bold text-[#f3f1ec]">
                SIM-Integrated<span className="text-[#e05a2b]">.</span> 100% Logged
              </div>
              <p className="body-standard pt-1">
                Every call dial occurs over native phone SIMs. Call outcomes and durations are automatically recorded and written back to the DMS.
              </p>
            </div>
          </div>

          {/* Right Lead Record Card (6 cols) */}
          <div className="lg:col-span-6 border border-white/12 rounded-3xl p-6 sm:p-10 bg-[#121212] space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-sans text-[#b8b5af]">
              <span>Live Showroom Record</span>
              <span className="text-[#e05a2b] font-semibold">Priority 01</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] block">Prospect & Vehicle Model</span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                Rahul Sharma
              </h3>
              <p className="body-standard text-[#e05a2b]">
                Tata Safari Dark Edition XZA+ (₹28.5L)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-sans">
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Origin</span>
                <span className="text-white font-medium">OEM DMS Direct</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Assigned Consultant</span>
                <span className="text-white font-medium">Karan Malhotra</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Response Latency</span>
                <span className="text-[#e05a2b] font-semibold">8.4 Minutes</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#b8b5af] block">Test Drive Slot</span>
                <span className="text-white font-medium">Tomorrow 11:00 AM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans text-[#b8b5af]">
              <span>2-Way OEM Sync</span>
              <span className="text-white font-semibold">Verified & Logged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
