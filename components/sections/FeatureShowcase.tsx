"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { soundManager } from "../lib/sound";

const FEATURES = [
  {
    id: "01",
    title: "AI Prioritization",
    tagline: "Instant machine-learning intent qualification.",
    description: "Dynamic 0–100 scoring algorithms rank incoming vehicle inquiries so showroom sales teams dial ready buyers first.",
  },
  {
    id: "02",
    title: "SIM-Integrated Calling",
    tagline: "Authentic telecall verification without hardware.",
    description: "Every outbound dial occurs over native mobile SIMs with zero hardware lag. Duration and outcome auto-written to DMS.",
  },
  {
    id: "03",
    title: "2-Way DMS Synchronization",
    tagline: "Bi-directional integration with Tata, Maruti & Hyundai.",
    description: "Eliminates double data entry, keeping customer masters, vehicle bookings, and workshop records in 100% real-time sync.",
  },
  {
    id: "04",
    title: "Smart Inactivity Sentinels",
    tagline: "Automated manager escalation on neglected leads.",
    description: "Leads untouched for &gt;15 minutes or 24 hours trigger automatic supervisor alerts to prevent high-value deal drop-off.",
  },
  {
    id: "05",
    title: "Real-Time Group Dashboards",
    tagline: "Multi-branch executive visibility across outlets.",
    description: "Custom pivot analysis enabling Dealer Principals to monitor response speed, consultant productivity, and revenue trajectories.",
  },
  {
    id: "06",
    title: "Omnichannel Engagement",
    tagline: "WhatsApp, SMS, and voice in one unified interface.",
    description: "Send official vehicle brochures, video walkarounds, and service booking invites directly through verified business channels.",
  },
];

export function FeatureShowcase() {
  const [hovered, setHovered] = useState<string>("01");

  return (
    <section id="features" className="relative py-32 sm:py-48 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
            SYSTEM CAPABILITIES
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85]">
            ENGINEERED
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              for
            </span>{" "}
            SCALE<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Vertical Editorial Feature Index */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FEATURES.map((item) => {
            const isHovered = hovered === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  soundManager.playClick();
                  setHovered(item.id);
                }}
                className="py-10 sm:py-14 group cursor-default transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* ID + Title */}
                  <div className="lg:col-span-6 flex items-baseline gap-6">
                    <span className="text-xs font-mono text-white/30 group-hover:text-[#e05a2b] transition-colors">
                      {item.id} //
                    </span>
                    <h3 className="text-3xl sm:text-5xl font-display font-black text-[#f3f1ec] group-hover:translate-x-3 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Tagline & Description */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#e05a2b] block font-semibold">
                      {item.tagline}
                    </span>
                    <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="lg:col-span-1 text-right hidden lg:block">
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#e05a2b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all inline-block" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
