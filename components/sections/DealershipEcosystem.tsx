"use client";

import { motion } from "framer-motion";

const NODES = [
  { name: "OEM DMS", detail: "Tata / Maruti / Hyundai 2-Way Sync" },
  { name: "Dealership Web", detail: "Direct Webhooks & Booking Inbound" },
  { name: "Lead Aggregators", detail: "CarWale, CarDekho & Portal APIs" },
  { name: "WhatsApp Business", detail: "Official Verified Messaging Channel" },
  { name: "Showroom Floor", detail: "Mobile App for Floor Consultants" },
  { name: "Workshop Bays", detail: "Predictive Service Scheduling" },
  { name: "Insurance Desk", detail: "60-Day Policy Expiry Tracking" },
  { name: "Executive Suite", detail: "Multi-Branch Live KPI Analytics" },
];

export function DealershipEcosystem() {
  return (
    <section id="ecosystem" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Platform Architecture
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            The connected
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              dealership
            </span>{" "}
            ecosystem<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Nodal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {NODES.map((node, i) => (
            <div
              key={node.name}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#101010] hover:border-[#e05a2b] transition-colors group space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-sans text-[#b8b5af] group-hover:text-[#e05a2b] transition-colors">
                <span>0{i + 1}</span>
                <span>Active Link</span>
              </div>

              <h3 className="text-lg sm:text-xl font-sans font-bold text-[#f3f1ec]">
                {node.name}
              </h3>

              <p className="body-standard text-xs">
                {node.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#121212] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block mb-1">
              Central Dealership Core
            </span>
            <div className="text-lg sm:text-xl font-sans font-bold text-white">
              Convertix integrates your entire automotive retail network with zero data loss.
            </div>
          </div>

          <span className="text-xs font-sans text-[#b8b5af] shrink-0">
            2-Way REST / Webhook Protocol
          </span>
        </div>
      </div>
    </section>
  );
}
