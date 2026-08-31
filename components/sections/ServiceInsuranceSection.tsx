"use client";

import { motion } from "framer-motion";
import { ArrowRight, RotateCw, ShieldCheck } from "lucide-react";

export function ServiceInsuranceSection() {
  return (
    <section id="service-insurance" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            SUITE 02 // AFTER-SALES RETENTION
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            KEEP THEM
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              coming
            </span>{" "}
            BACK<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Vertical Editorial Timeline Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left: Visual Focus Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-image-wrapper rounded-3xl border border-white/15 aspect-[4/3] bg-[#141414] overflow-hidden p-8 flex flex-col justify-between">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest">
                PREDICTIVE MILEAGE HORIZON
              </span>

              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-display font-bold text-white block">
                  19,850 km
                </span>
                <p className="text-xs font-mono text-[#b8b5af]">
                  Calculated: 20,000 km Service Due in 4 Days (MH-01-EA-9921)
                </p>
              </div>

              <div className="text-[11px] font-mono text-white/40 border-t border-white/10 pt-4 flex justify-between">
                <span>WhatsApp 1-Click Pickup</span>
                <span className="text-white">Bay #04 Reserved</span>
              </div>
            </div>

            <p className="text-sm text-[#b8b5af] leading-relaxed font-mono">
              Convertix replaces blind calendar blasts with real odometer velocity extrapolation and automated 60/30/15-day insurance renewal reminders.
            </p>
          </div>

          {/* Right: Vertical Timeline Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-12 border-l border-white/10 pl-6 sm:pl-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                01 // PREDICTIVE ODOMETER EXTRAPOLATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Service Due Alerts That Actually Match Reality.
              </h3>
              <p className="text-sm text-[#b8b5af] leading-relaxed font-normal pt-1">
                Algorithms analyze daily driving rhythm to dispatch reminders precisely when inspection is required. Mistimed service reminders drop from &gt;60% to &lt;10%.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                02 // INSURANCE EXPIRY RADAR
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                60-Day Renewal Horizon Automation.
              </h3>
              <p className="text-sm text-[#b8b5af] leading-relaxed font-normal pt-1">
                Policy expiry milestones trigger multi-channel WhatsApp quotation cards and verified telecalls, pushing dealership insurance renewal rates past 90%.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                03 // 1-CLICK WORKSHOP BAY CONFIRMATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Frictionless Customer Appointment Booking.
              </h3>
              <p className="text-sm text-[#b8b5af] leading-relaxed font-normal pt-1">
                Vehicle owners select drop-off or pickup windows directly on WhatsApp without endless phone tag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
