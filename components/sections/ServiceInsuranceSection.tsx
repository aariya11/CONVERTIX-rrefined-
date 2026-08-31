"use client";

import { motion } from "framer-motion";

export function ServiceInsuranceSection() {
  return (
    <section id="service-insurance" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Suite 02 // After-Sales Retention
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Keep them
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              coming
            </span>{" "}
            back<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          {/* Left Focus Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-image-wrapper rounded-3xl border border-white/12 aspect-[4/3] bg-[#121212] overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider">
                Predictive Mileage Horizon
              </span>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-bold text-white block">
                  19,850 km
                </span>
                <p className="body-standard text-[#b8b5af]">
                  Calculated: 20,000 km Service Due in 4 Days (MH-01-EA-9921)
                </p>
              </div>

              <div className="text-xs font-sans text-[#b8b5af] border-t border-white/10 pt-3 flex justify-between">
                <span>WhatsApp 1-Click Pickup</span>
                <span className="text-white font-medium">Bay #04 Reserved</span>
              </div>
            </div>

            <p className="body-standard">
              Convertix replaces arbitrary calendar blasts with real driving velocity extrapolation and automated 60/30/15-day insurance renewal reminders.
            </p>
          </div>

          {/* Right Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 border-l border-white/10 pl-6 sm:pl-10">
            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                01. Predictive Odometer Extrapolation
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Service reminders that actually match driving frequency.
              </h3>
              <p className="body-standard pt-1">
                Algorithms calculate daily usage patterns to dispatch notifications right when inspection is required. Mistimed service reminders drop from &gt;60% to &lt;10%.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                02. Insurance Expiry Radar
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                60-day renewal horizon automation.
              </h3>
              <p className="body-standard pt-1">
                Policy milestones trigger multi-channel WhatsApp quotation cards and logged telecalls, driving dealership insurance renewal rates past 90%.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                03. 1-Click WhatsApp Bay Confirmation
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Frictionless customer booking.
              </h3>
              <p className="body-standard pt-1">
                Car owners confirm drop-off times or pickup slots directly within WhatsApp without playing phone tag with service advisors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
