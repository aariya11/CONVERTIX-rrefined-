"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FeatureShowcaseProps {
  onOpenContact?: () => void;
}

const FEATURES = [
  {
    id: "01",
    title: "Bespoke Editorial Web Design",
    tagline: "Handcrafted layouts, typography & motion.",
    description: "Custom aesthetic direction inspired by international luxury design—no cookie-cutter templates or generic page builders.",
  },
  {
    id: "02",
    title: "High-Converting Lead Architecture",
    tagline: "1-tap WhatsApp, instant quotes & smart schedulers.",
    description: "Engineered inquiry funnels that eliminate friction, guiding high-value visitors directly into confirmed conversations and bookings.",
  },
  {
    id: "03",
    title: "Sub-Second Next.js 16 Engineering",
    tagline: "100 Google Core Web Vitals performance.",
    description: "Server-side rendered with Next.js 16, React 19, and Tailwind CSS for instant sub-second page loads across every device.",
  },
  {
    id: "04",
    title: "Mobile-First Touch Interaction",
    tagline: "Flawless mobile experience on iOS and Android.",
    description: "Engineered around comfortable 48px+ touch targets, zero layout shifts, dynamic safe-area insets, and non-overlapping floating actions.",
  },
  {
    id: "05",
    title: "CRM & Calendar Synchronization",
    tagline: "Automated inquiry routing with zero data loss.",
    description: "Connect your website directly to WhatsApp, Google Calendar, HubSpot, Salesforce, or your custom CRM via real-time webhooks.",
  },
  {
    id: "06",
    title: "SEO & Growth Infrastructure",
    tagline: "Built-in search engine authority from day one.",
    description: "Structured JSON-LD schema, automated XML sitemaps, semantic hierarchy, and lightning speeds to rank at the top of Google searches.",
  },
];

export function FeatureShowcase({ onOpenContact }: FeatureShowcaseProps) {
  const [hovered, setHovered] = useState<string>("01");

  return (
    <section id="capabilities" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Studio Capabilities
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Crafted
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              for
            </span>{" "}
            measurable impact<span className="text-[#e05a2b]">.</span>
          </h2>

          {onOpenContact && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact();
              }}
              className="min-h-[44px] px-6 py-2.5 rounded-full border border-white/20 hover:border-[#e05a2b] text-white hover:text-[#e05a2b] font-sans text-xs font-semibold uppercase tracking-wider transition-all self-start md:self-auto inline-flex items-center gap-2"
            >
              <span>Consult with Our Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Feature List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                soundManager.playClick();
                setHovered(item.id);
                onOpenContact?.();
              }}
              onMouseEnter={() => {
                soundManager.playClick();
                setHovered(item.id);
              }}
              className="py-8 sm:py-12 group cursor-pointer transition-colors hover:bg-white/[0.02]"
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
