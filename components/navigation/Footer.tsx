"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Shield, Sparkles, MapPin, Mail, Terminal } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="relative bg-[#07080a] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Massive Typographic Statement */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
                Next-Gen Automotive Retail Technology
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-none">
                THE DEALERSHIP
                <br />
                <span className="font-editorial text-white/50 font-normal italic">OPERATING</span>{" "}
                SYSTEM.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact?.();
                }}
                className="px-8 py-4 rounded-full bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 shadow-xl shadow-[#d4ff00]/10"
              >
                <span>Request Enterprise Access</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand & Parent Company */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4ff00] text-black font-black flex items-center justify-center font-display text-base">
                CX
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                CONVERTIX
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Convertix unifies Lead, Pre-Sales, Service, and Insurance workflows into a single AI-driven dealership operating system built for modern automotive retail.
            </p>
            <div className="pt-2 text-xs font-mono text-white/50">
              Convertix is an enterprise flagship product of{" "}
              <span className="text-white font-semibold">Selenix Technology</span>.
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#d4ff00]">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/products/lead-management"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Lead & Pre-Sales OS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#d4ff00]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/products/service-insurance"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Service & Insurance</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#00f58c]" />
                </Link>
              </li>
              <li>
                <a href="#ai-engine" className="hover:text-white transition-colors">
                  AI Prioritization Engine
                </a>
              </li>
              <li>
                <a href="#dms-sync" className="hover:text-white transition-colors">
                  2-Way OEM DMS Protocol
                </a>
              </li>
              <li>
                <a href="#telephony" className="hover:text-white transition-colors">
                  SIM-Integrated Calling
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Solutions */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/50">
              Architecture
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#ecosystem" className="hover:text-white transition-colors">
                  Dealership Ecosystem
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  Why Not Generic CRM?
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-white transition-colors">
                  Dealership ROI Model
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Editions & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Selenix Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Desk */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#00f58c]">
              Direct Desk
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href="tel:+917888028729"
                className="font-mono text-sm font-bold text-white hover:text-[#d4ff00] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#00f58c]" />
                +91 7888 028 729
              </a>
              <p className="text-xs text-white/50 pt-1">
                Headquarters & Engineering:
                <br />
                Selenix Technology, India
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00f58c]/10 text-[#00f58c] border border-[#00f58c]/30 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f58c] animate-pulse" />
                  Systems Operational 99.98%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-4">
            <span>© 2026 Convertix. All rights reserved.</span>
            <span>•</span>
            <span>A product of Selenix Technology</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
