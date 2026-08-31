"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand Statement */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase mb-2 block">
                Automotive Retail Operating System
              </span>
              <h2 className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight text-[#f3f1ec]">
                Convertix<span className="text-[#e05a2b]">.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 self-start lg:self-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  soundManager.playChirp();
                  onOpenContact?.();
                }}
                data-cursor="TALK"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#f3f1ec] hover:text-[#e05a2b] transition-colors group"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#e05a2b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-xs font-sans">
          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Overview</span>
            <p className="body-standard text-xs leading-relaxed max-w-xs">
              AI-powered lead, service and insurance workflows engineered specifically for modern automotive retail networks.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Platforms</span>
            <div className="space-y-1.5">
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

          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Company</span>
            <div className="space-y-1 text-[#b8b5af]">
              <p>Selenix Technology</p>
              <p>Automotive Intelligence Division</p>
              <p>India</p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[#e05a2b] font-semibold block">Direct Desk</span>
            <a
              href="tel:+919078019472"
              className="font-sans text-sm font-bold text-white hover:text-[#e05a2b] transition-colors block"
            >
              +91 9078 019 472
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] text-xs hover:underline block"
            >
              Direct WhatsApp Chat →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-[#b8b5af]">
          <p>© 2026 Convertix. A flagship product of Selenix Technology.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
            <a href="#" className="hover:text-white transition-colors">OEM DMS Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
