"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  PhoneCall,
  MessageCircle,
  BarChart3,
  Layers,
  Database,
  BellRing,
  Radio,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const FEATURES = [
  {
    id: "01",
    title: "AI-Powered Prioritization",
    tagline: "Score high-potential vehicle leads instantly",
    icon: Sparkles,
    description:
      "Machine learning models evaluate buyer intent, segment budget, and engagement velocity to rank incoming leads so showroom sales teams dial the most probable conversions first.",
    capabilities: [
      "Dynamic 0–100 lead intent scoring",
      "At-Risk inactivity early warning detection",
      "Automated lead routing to top-performing consultants",
      "Segment-aware conversion probability modeling",
    ],
    accent: "#d4ff00",
  },
  {
    id: "02",
    title: "SIM-Integrated Calling",
    tagline: "Authentic, verified telecall logging without hardware boxes",
    icon: PhoneCall,
    description:
      "All outbound dials occur over native mobile SIMs with zero lag. Call durations, timestamps, and outcomes are automatically verified and written directly back into the DMS.",
    capabilities: [
      "Zero phantom dials: hardware-level call verification",
      "Instant disposition tagging (Test Drive, Callback, Lost)",
      "Automated call duration audit for managers",
      "1-tap click-to-dial from showroom mobile app",
    ],
    accent: "#00f58c",
  },
  {
    id: "03",
    title: "Built-in Dealer Chat",
    tagline: "Instant cross-department coordination",
    icon: MessageCircle,
    description:
      "Connect sales executives, service advisors, accessories teams, and dealership management through context-linked internal chat tied directly to customer VIN records.",
    capabilities: [
      "Deal-specific chat threads linked to customer lead IDs",
      "Instant manager approval requests for discounts & delivery dates",
      "Seamless handoff between sales and workshop advisors",
      "Push notifications on critical deal milestones",
    ],
    accent: "#00d8f6",
  },
  {
    id: "04",
    title: "Real-Time Dashboards & Pivot Charts",
    tagline: "Instant multi-branch executive visibility",
    icon: BarChart3,
    description:
      "Actionable multi-dimensional analytics enabling Dealer Principals and General Managers to monitor response speed, consultant productivity, and revenue trajectories in real time.",
    capabilities: [
      "Customizable pivot analysis across showroom outlets",
      "Consultant leaderboard ranked by conversion speed",
      "Lead source ROI & advertising spend efficiency",
      "Automated daily executive summary reports",
    ],
    accent: "#d4ff00",
  },
  {
    id: "05",
    title: "Automated Multi-Source Lead Capture",
    tagline: "Zero manual entry from OEM DMS, Web & Portals",
    icon: Layers,
    description:
      "Leads from manufacturer portals (Tata, Hyundai, Maruti, Mahindra), CarWale, CarDekho, and website bots are captured and assigned within 15 seconds without manual intervention.",
    capabilities: [
      "3-second ingestion webhook for aggregator APIs",
      "Smart deduplication across multi-portal inquiries",
      "Round-robin and performance-based automated allocation",
      "Instant WhatsApp welcome confirmation to customer",
    ],
    accent: "#ffffff",
  },
  {
    id: "06",
    title: "2-Way Bi-Directional DMS Sync",
    tagline: "Direct OEM system integration with zero data lag",
    icon: Database,
    description:
      "Convertix writes directly to and reads from your manufacturer DMS, eliminating double data entry, reducing human error, and maintaining 100% compliance with OEM reporting.",
    capabilities: [
      "Bi-directional sync with Tata, Maruti, Hyundai & Mahindra DMS",
      "Automated customer master writeback upon booking",
      "Zero latency inventory status and variant lookup",
      "Compliant with OEM security and audit protocols",
    ],
    accent: "#00d8f6",
  },
  {
    id: "07",
    title: "Smart Alerts & Escalations",
    tagline: "Automated accountability for every showroom lead",
    icon: BellRing,
    description:
      "Missed follow-ups, overdue test drive reports, or stale leads trigger automatic reminders to sales executives and escalate to Branch Managers if unaddressed within SLA limits.",
    capabilities: [
      "Customizable SLA thresholds (15m, 1h, 24h)",
      "Multi-tier hierarchical manager escalations",
      "Automatic lead reallocation for absent consultants",
      "Daily overdue follow-up audit notifications",
    ],
    accent: "#ff5500",
  },
  {
    id: "08",
    title: "Omnichannel Engagement",
    tagline: "WhatsApp, SMS and Voice in one interface",
    icon: Radio,
    description:
      "Engage vehicle buyers across official WhatsApp Business API, SMS, and voice calls within a single screen. Send rich vehicle brochures, videos, and quotation sheets with 1 click.",
    capabilities: [
      "WhatsApp Business API verified templates",
      "Rich media brochure & video walkaround delivery",
      "Automated test drive calendar invites and reminders",
      "Interactive 1-click customer feedback collection",
    ],
    accent: "#00f58c",
  },
  {
    id: "09",
    title: "Configurable Enterprise Architecture",
    tagline: "Tailored to single outlets or 50+ showroom groups",
    icon: Cpu,
    description:
      "A scalable, modular platform that adapts to your dealership group's specific hierarchy, outlet structure, permissions, and third-party accounting integrations.",
    capabilities: [
      "Multi-branch, multi-brand group governance",
      "Granular role-based access control (RBAC)",
      "REST API access for custom internal BI systems",
      "Bank-grade enterprise data encryption and isolation",
    ],
    accent: "#d4ff00",
  },
];

export function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(FEATURES[0]);

  return (
    <section id="features" className="relative py-28 bg-[#090b10] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block">
            Platform Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            ENGINEERED
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">for</span>{" "}
            DEALERSHIP SCALE.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
            Explore the complete suite of automotive-specific features designed to replace fragmented legacy tools with one cohesive dealership operating system.
          </p>
        </div>

        {/* Interactive Feature Master-Detail Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Feature Navigator (5 cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 no-scrollbar">
            {FEATURES.map((feature) => {
              const isSelected = selectedFeature.id === feature.id;
              const Icon = feature.icon;

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedFeature(feature);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#141822] border-[#d4ff00] shadow-xl shadow-[#d4ff00]/5"
                      : "bg-[#0d0f15] border-white/8 hover:border-white/20 text-white/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-xl"
                      style={{ backgroundColor: `${feature.accent}15`, color: feature.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white/40">{feature.id}</span>
                        <h3 className="font-display font-bold text-sm text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[11px] font-mono text-white/50 truncate max-w-[200px]">
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isSelected ? "text-[#d4ff00] translate-x-1" : "text-white/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Feature Deep Dive Visual Canvas (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#0f121a] border border-white/15 shadow-2xl relative min-h-[520px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-white/40">
                      FEATURE {selectedFeature.id} // CORE PROTOCOL
                    </span>
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${selectedFeature.accent}20`,
                        color: selectedFeature.accent,
                      }}
                    >
                      READY TO DEPLOY
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                    {selectedFeature.title}
                  </h3>

                  <p className="text-sm font-mono text-[#d4ff00] mb-4">
                    {selectedFeature.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                    {selectedFeature.description}
                  </p>
                </div>

                {/* Capabilities Bullet Matrix */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                    OPERATIONAL CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFeature.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/8 flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: selectedFeature.accent }}
                        />
                        <span className="text-xs font-mono text-white/80 leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Automotive Dealership Edition</span>
              <span className="text-white font-bold">100% Native Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
