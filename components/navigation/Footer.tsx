"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Massive Editorial Brand Statement */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b] mb-4 block">
                Automotive Retail Operating System
              </span>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-[#f3f1ec] uppercase leading-[0.88]">
                CONVERTIX<span className="text-[#e05a2b]">.</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact?.();
              }}
              data-cursor="TALK"
              className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#f3f1ec] hover:text-[#e05a2b] transition-colors self-start lg:self-auto group"
            >
              <span>Schedule Dealership Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#e05a2b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Minimal Navigation Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-xs font-mono">
          <div className="space-y-3">
            <span className="text-white/40 uppercase tracking-widest block">Architecture</span>
            <p className="text-[#b8b5af] leading-relaxed max-w-xs">
              AI-powered lead, service and insurance workflows engineered specifically for automotive retail networks.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white/40 uppercase tracking-widest block">Platforms</span>
            <div className="space-y-2">
              <Link href="/products/lead-management" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors">
                Lead & Pre-Sales OS →
              </Link>
              <Link href="/products/service-insurance" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors">
                Service & Insurance Retention →
              </Link>
              <Link href="/pricing" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors">
                Editions & Licensing →
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-white/40 uppercase tracking-widest block">Headquarters</span>
            <div className="space-y-1 text-[#b8b5af]">
              <p>Selenix Technology</p>
              <p>Automotive Solutions Division</p>
              <p>India</p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-[#e05a2b] uppercase tracking-widest block">Direct Desk</span>
            <a
              href="tel:+917888028729"
              className="font-mono text-sm font-bold text-white hover:text-[#e05a2b] transition-colors block"
            >
              +91 7888 028 729
            </a>
            <p className="text-white/40 text-[11px]">
              Response SLA: &lt;15 Mins
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© 2026 Convertix. A flagship product of Selenix Technology.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
            <a href="#" className="hover:text-white transition-colors">OEM DMS Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
