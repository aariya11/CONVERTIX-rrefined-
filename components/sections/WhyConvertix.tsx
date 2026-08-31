"use client";

import { motion } from "framer-motion";

const MANIFESTO_POINTS = [
  {
    title: "SIM-Integrated Telephony",
    body: "Built for mobile consultants on showroom floors. Native SIM dialing eliminates expensive external PBX hardware while ensuring 100% verified conversation audits.",
  },
  {
    title: "2-Way OEM DMS Protocol",
    body: "Direct bi-directional sync with Tata, Maruti, Hyundai & Mahindra. No disconnected CSV exports, no double data entry, no latency.",
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
    <section id="why-convertix" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Brand Manifesto
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Not another
            <br />
            <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
              generic
            </span>{" "}
            CRM<span className="text-[#e05a2b]">.</span>
          </h2>
          <p className="body-lead max-w-3xl mt-6">
            Generic SaaS platforms were engineered for software salespeople at desks. Convertix was built on the dealership floor around the real velocity of test drives, vehicle delivery bays, and OEM compliance.
          </p>
        </div>

        {/* Manifesto Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-t border-white/10 pt-12">
          {MANIFESTO_POINTS.map((point, i) => (
            <div key={point.title} className="space-y-2.5">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] block">
                0{i + 1} //
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                {point.title}
              </h3>
              <p className="body-standard">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
