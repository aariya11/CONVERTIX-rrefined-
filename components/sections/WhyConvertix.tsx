"use client";

import { motion } from "framer-motion";

const MANIFESTO_POINTS = [
  {
    title: "Zero Templates or Page Builder Bloat",
    body: "We do not use cookie-cutter WordPress themes or slow drag-and-drop builders. Every website is hand-engineered in modern Next.js with bespoke typography, motion, and art-directed layouts.",
  },
  {
    title: "Engineered for Service Conversion",
    body: "A website is only valuable if it brings high-paying clients to your business. We engineer every page with strategic visual hierarchy, high-intent call-to-actions, and friction-free inquiry channels.",
  },
  {
    title: "Sub-Second Global Performance",
    body: "Built with React 19, Turbopack, and cloud edge infrastructure to guarantee instant sub-second page loads, near-zero bounce rates, and 100/100 Google Core Web Vitals scores.",
  },
  {
    title: "Seamless WhatsApp & CRM Inbound",
    body: "Incorporate direct 1-tap WhatsApp consultation desks, booking calendars, and automated lead webhooks that route customer inquiries straight to your phone or CRM within seconds.",
  },
  {
    title: "Full Codebase Ownership",
    body: "You own 100% of your source code, assets, and design files. Complete scalability with zero recurring page-builder licensing fees or vendor lock-in.",
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
            Studio Manifesto
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
            agency<span className="text-[#e05a2b]">.</span>
          </h2>
          <p className="body-lead max-w-3xl mt-6">
            Generic digital agencies sell recycled templates that look like everyone else and take 5 seconds to load. Convertix engineers bespoke, high-converting digital platforms that establish your service business as the premium market leader.
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
