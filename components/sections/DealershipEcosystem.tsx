"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { soundManager } from "../lib/sound";

interface DealershipEcosystemProps {
  onOpenContact?: () => void;
}

const NODES = [
  { name: "Custom Web Architecture", detail: "Next.js 16, React 19 & Turbopack Core" },
  { name: "Mobile Touch UX", detail: "Optimized for iOS & Android Viewports" },
  { name: "WhatsApp Business Hub", detail: "Instant Chat & Quote Inbound Channels" },
  { name: "Search Engine Authority", detail: "Structured Data & Local SEO Schemas" },
  { name: "Online Booking Engine", detail: "Interactive Service Schedulers & Menus" },
  { name: "CRM & Webhook Sync", detail: "Real-Time Lead & Inquiry Dispatch" },
  { name: "Conversion Analytics", detail: "Heatmaps, Funnels & Goal Tracking" },
  { name: "Global Cloud Edge", detail: "Sub-Second Content Delivery Network" },
];

export function DealershipEcosystem({ onOpenContact }: DealershipEcosystemProps) {
  const [selectedNode, setSelectedNode] = useState<number>(0);

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
            The complete
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              digital
            </span>{" "}
            ecosystem<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Nodal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {NODES.map((node, i) => (
            <button
              key={node.name}
              type="button"
              onClick={() => {
                soundManager.playClick();
                setSelectedNode(i);
              }}
              className={`p-6 sm:p-7 rounded-2xl border text-left transition-all group space-y-3 ${
                selectedNode === i
                  ? "bg-[#161616] border-[#e05a2b] shadow-lg shadow-[#e05a2b]/10"
                  : "bg-[#101010] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-sans">
                <span className={selectedNode === i ? "text-[#e05a2b] font-bold" : "text-[#b8b5af]"}>
                  0{i + 1}
                </span>
                <span className={selectedNode === i ? "text-[#e05a2b] font-semibold flex items-center gap-1" : "text-[#b8b5af]"}>
                  {selectedNode === i ? <CheckCircle2 className="w-3.5 h-3.5" /> : "Included"}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-sans font-bold text-[#f3f1ec]">
                {node.name}
              </h3>

              <p className="body-standard text-xs">
                {node.detail}
              </p>
            </button>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#121212] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block mb-1">
              End-to-End Delivery Standard
            </span>
            <div className="text-lg sm:text-xl font-sans font-bold text-white">
              We design, build, optimize, and launch your entire digital presence from scratch.
            </div>
          </div>

          {onOpenContact && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact();
              }}
              className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#e05a2b] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all shrink-0 inline-flex items-center gap-2"
            >
              <span>Deploy This Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
