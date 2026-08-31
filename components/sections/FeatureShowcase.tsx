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
    <section id="features" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            System Capabilities
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Engineered
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              for
            </span>{" "}
            scale<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Feature List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => {
                soundManager.playClick();
                setHovered(item.id);
              }}
              className="py-8 sm:py-12 group cursor-default transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                {/* ID + Title */}
                <div className="lg:col-span-6 flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-sans font-semibold text-[#e05a2b]">
                    {item.id}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-sans font-bold text-[#f3f1ec] group-hover:translate-x-2 transition-transform duration-200">
                    {item.title}
                  </h3>
                </div>

                {/* Tagline & Description */}
                <div className="lg:col-span-5 space-y-1.5">
                  <span className="text-xs font-sans font-semibold text-[#e05a2b] block">
                    {item.tagline}
                  </span>
                  <p className="body-standard">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="lg:col-span-1 text-right hidden lg:block">
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#e05a2b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all inline-block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
