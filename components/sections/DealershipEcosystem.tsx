"use client";

import { motion } from "framer-motion";

const NODES = [
  { name: "OEM DMS", detail: "Tata / Maruti / Hyundai 2-Way Protocol" },
  { name: "DEALER WEB", detail: "Direct Webhook & Booking Portals" },
  { name: "AGGREGATORS", detail: "CarWale, CarDekho, AutoCar API" },
  { name: "WHATSAPP", detail: "Verified Business Channel API" },
  { name: "SALES FLOOR", detail: "Consultant 1-Tap Mobile App" },
  { name: "WORKSHOP", detail: "Predictive Service Bay Booking" },
  { name: "INSURANCE", detail: "60-Day Policy Expiry Horizon" },
  { name: "EXECUTIVE", detail: "Live Group KPI Pivot Dashboards" },
];

export function DealershipEcosystem() {
  return (
    <section id="ecosystem" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            CONNECTED TOPOLOGY
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            THE CONNECTED
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              dealership
            </span>{" "}
            ECOSYSTEM<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Art-Directed Information Graphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NODES.map((node, i) => (
            <div
              key={node.name}
              className="p-8 rounded-2xl border border-white/10 bg-[#0e0e0e] hover:border-[#e05a2b] transition-colors group space-y-4"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-white/30 group-hover:text-[#e05a2b] transition-colors">
                <span>0{i + 1} //</span>
                <span>REST API</span>
              </div>

              <h3 className="text-xl font-display font-bold text-[#f3f1ec]">
                {node.name}
              </h3>

              <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                {node.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Center Synchronizer Footer Statement */}
        <div className="mt-12 p-8 rounded-3xl border border-white/10 bg-[#111111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#e05a2b] block mb-1">
              CENTRAL NEURAL ENGINE
            </span>
            <div className="text-xl font-display font-bold text-white">
              Convertix integrates your entire automotive retail network with zero data loss.
            </div>
          </div>

          <span className="text-xs font-mono text-[#b8b5af] shrink-0">
            2-Way REST / Webhook Protocol
          </span>
        </div>
      </div>
    </section>
  );
}
