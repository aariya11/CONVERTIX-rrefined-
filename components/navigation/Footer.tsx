"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 pt-16 sm:pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand Statement */}
        <div className="border-b border-white/10 pb-10 sm:pb-12 mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase mb-2 block">
                Digital Design & Web Engineering Studio
              </span>
              <h2 className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight text-[#f3f1ec]">
                Convertix<span className="text-[#e05a2b]">.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start lg:self-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChirp()}
                data-cursor="CHAT"
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#25D366] hover:text-white transition-colors touch-manipulation px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10"
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
                data-cursor="START"
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#f3f1ec] bg-[#e05a2b] hover:bg-white hover:text-black px-5 py-2.5 rounded-full transition-all group touch-manipulation cursor-pointer active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs font-sans">
          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Overview</span>
            <p className="body-standard text-xs leading-relaxed max-w-xs">
              We design and build bespoke, high-converting websites, digital brand identities, and client acquisition funnels for service businesses.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Services</span>
            <div className="space-y-2">
              <Link href="/products/lead-management" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors py-1 min-h-[32px]">
                Bespoke Web Design →
              </Link>
              <Link href="/products/service-insurance" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors py-1 min-h-[32px]">
                Booking Funnels & Retention →
              </Link>
              <Link href="/pricing" className="block text-[#f3f1ec] hover:text-[#e05a2b] transition-colors py-1 min-h-[32px]">
                Packages & Pricing →
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[#b8b5af] font-semibold block">Company</span>
            <div className="space-y-1.5 text-[#b8b5af]">
              <p>Selenix Technology</p>
              <p>Digital Product Studio</p>
              <Link href="/about" className="block text-white hover:text-[#e05a2b] transition-colors py-1">
                About Studio →
              </Link>
              <Link href="/contact" className="block text-white hover:text-[#e05a2b] transition-colors py-1">
                Contact & Inquiry →
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[#e05a2b] font-semibold block">Direct Desk</span>
            <a
              href="tel:+919078019472"
              onClick={() => soundManager.playClick()}
              className="font-sans text-sm font-bold text-white hover:text-[#e05a2b] transition-colors block py-1"
            >
              +91 9078 019 472
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChirp()}
              className="text-[#25D366] text-xs hover:underline block py-1"
            >
              Direct WhatsApp Chat →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-[#b8b5af]">
          <p>© 2026 Convertix. A flagship digital studio of Selenix Technology.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-white transition-colors py-1">Contact</Link>
            <Link href="/about" className="hover:text-white transition-colors py-1">About</Link>
            <Link href="/pricing" className="hover:text-white transition-colors py-1">Packages</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
