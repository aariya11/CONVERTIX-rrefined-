"use client";

import { motion } from "framer-motion";

const MANIFESTO_POINTS = [
  {
    title: "SIM-Integrated Telephony",
    body: "Built for mobile consultants on showroom floors. Native SIM dialing eliminates expensive external PBX hardware while ensuring 100% verified conversation audits.",
  },
  {
    title: "2-Way OEM DMS Protocol",
    body: "Direct bi-directional sync with Tata, Maruti, Hyundai & Mahindra. No disconnected CSV files, no double data entry, no latency.",
  },
  {
    title: "Predictive Workshop Odometer Engine",
    body: "Extrapolates customer mileage rhythms to trigger service booking precisely when maintenance is due, slashing mistimed reminders to under 10%.",
  },
  {
    title: "Automotive Intent Lead Scoring",
    body: "Machine learning algorithms trained on vehicle segment budgets, test drive requests, and exchange car signals rather than generic SaaS metrics.",
  },
  {
    title: "Hierarchical Manager Sentinels",
    body: "Automated SLA escalations that alert General Managers upon 15-minute lead inactivity, ensuring zero customer leakage across showroom outlets.",
  },
];

export function WhyConvertix() {
  return (
    <section id="why-convertix" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            BRAND MANIFESTO
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            NOT ANOTHER
            <br />
            <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
              generic
            </span>{" "}
            CRM<span className="text-[#e05a2b]">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#b8b5af] max-w-3xl mt-8 font-normal leading-relaxed">
            Generic SaaS platforms were engineered for software salespeople at desks. Convertix was built on the dealership floor around the real velocity of test drives, vehicle delivery bays, and OEM compliance.
          </p>
        </div>

        {/* Editorial Manifesto Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 border-t border-white/10 pt-16">
          {MANIFESTO_POINTS.map((point, i) => (
            <div key={point.title} className="space-y-3">
              <span className="text-xs font-mono text-[#e05a2b] uppercase tracking-widest block">
                0{i + 1} //
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {point.title}
              </h3>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed pt-1">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
