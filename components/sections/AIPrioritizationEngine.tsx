"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { soundManager } from "../lib/sound";

interface AIPrioritizationEngineProps {
  onOpenContact?: () => void;
}

export function AIPrioritizationEngine({ onOpenContact }: AIPrioritizationEngineProps) {
  return (
    <section id="ai-engine" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Performance Standard
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Engineering that
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              amplifies
            </span>{" "}
            results<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Data Box */}
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 bg-[#101010] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Score (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
              Google Core Web Vitals
            </span>
            <div className="text-7xl sm:text-9xl font-sans font-bold text-[#f3f1ec] leading-none">
              100<span className="text-[#e05a2b]">.</span>
            </div>
            <span className="text-sm font-sans font-semibold text-[#e05a2b] block">
              Perfect Desktop & Mobile Performance
            </span>

            {onOpenContact && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact();
                }}
                className="min-h-[44px] px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Audit Your Current Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Insights (7 cols) */}
          <div className="lg:col-span-7 space-y-6 border-l border-white/10 pl-0 lg:pl-10">
            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Technical Foundation
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Next.js 16 App Router & Server Components
              </h3>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                SEO & Discoverability
              </span>
              <p className="body-standard">
                Built-in semantic HTML5, automated XML sitemaps, structured JSON-LD schemas, and OpenGraph tags to dominate local and regional service search results.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-sans text-[#b8b5af]">
              Every website we deliver is optimized for lightning-fast speeds, accessibility, search indexing, and high visitor-to-client conversion.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
