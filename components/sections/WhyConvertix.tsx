"use client";

import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Car, Layers } from "lucide-react";

const COMPARISON_ROWS = [
  {
    capability: "SIM-Integrated Call Verification",
    generic: "Requires expensive external cloud PBX hardware or manual consultant entry.",
    convertix: "Native mobile SIM dialing with 100% verified duration & zero hardware cost.",
  },
  {
    capability: "2-Way OEM DMS Protocol",
    generic: "Disconnected CSV imports/exports causing data duplicate errors.",
    convertix: "Native bi-directional REST sync with Tata, Maruti, Hyundai & Mahindra DMS.",
  },
  {
    capability: "Predictive Workshop Service Reminders",
    generic: "Blind generic date blasts that customers ignore as spam.",
    convertix: "Odometer velocity algorithms predicting exact 10k/20k km service windows.",
  },
  {
    capability: "AI Automotive Lead Scoring",
    generic: "Generic B2B web metrics irrelevant to car buyers.",
    convertix: "Intent models factoring vehicle segment, exchange car, and test drive urgency.",
  },
  {
    capability: "Hierarchical Manager Escalations",
    generic: "Static notifications lost in email inboxes.",
    convertix: "SLA sentinels alerting Branch Managers upon 15-minute lead inactivity.",
  },
];

export function WhyConvertix() {
  return (
    <section id="why-convertix" className="relative py-28 bg-[#090b10] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block">
            Product Manifesto
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            BUILT SPECIFICALLY FOR
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">automotive</span>{" "}
            RETAIL.
          </h2>
          <p className="text-base sm:text-lg text-white/60 mt-4 leading-relaxed">
            Generic SaaS CRMs were built for software salespeople at desks. Convertix was engineered on the dealership showroom floor—built around the real velocity of vehicle sales, test drives, and workshop bays.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl bg-[#0c0e14] border border-white/15 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-[#12151e] p-4 sm:p-6 text-xs font-mono">
            <div className="md:col-span-4 text-white/40 uppercase tracking-wider">
              OPERATIONAL CAPABILITY
            </div>
            <div className="md:col-span-4 text-white/40 uppercase tracking-wider hidden md:block">
              GENERIC CRM (SALESFORCE / HUBSPOT)
            </div>
            <div className="md:col-span-4 text-[#d4ff00] font-bold uppercase tracking-wider hidden md:block">
              CONVERTIX DEALERSHIP OS
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={row.capability}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Capability Name */}
                <div className="md:col-span-4 font-display font-bold text-sm sm:text-base text-white">
                  <span className="text-[11px] font-mono text-white/40 block mb-1">
                    0{idx + 1} //
                  </span>
                  {row.capability}
                </div>

                {/* Generic CRM */}
                <div className="md:col-span-4 text-xs font-mono text-white/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-red-400 font-bold md:hidden">
                    <X className="w-3.5 h-3.5" />
                    <span>Generic CRM:</span>
                  </div>
                  <p className="leading-relaxed">{row.generic}</p>
                </div>

                {/* Convertix */}
                <div className="md:col-span-4 text-xs font-mono text-white/90 space-y-1 p-3 rounded-xl bg-[#d4ff00]/5 border border-[#d4ff00]/20">
                  <div className="flex items-center gap-1.5 text-[#d4ff00] font-bold md:hidden">
                    <Check className="w-3.5 h-3.5" />
                    <span>Convertix Advantage:</span>
                  </div>
                  <p className="leading-relaxed text-white font-semibold">{row.convertix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
