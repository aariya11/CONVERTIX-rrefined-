"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Phone, ArrowUpRight, Zap, RotateCw, Sparkles, Building } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenContact }: MobileMenuProps) {
  const handleLinkClick = () => {
    soundManager.playClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-[#07080a] flex flex-col justify-between p-6 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-[#d4ff00] text-black font-black flex items-center justify-center font-display text-sm">
                CX
              </div>
              <span className="font-display font-bold text-base text-white">CONVERTIX</span>
            </Link>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close menu"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00]">
              PLATFORM SUITES
            </p>

            <div className="space-y-4">
              <Link
                href="/products/lead-management"
                onClick={handleLinkClick}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-2 rounded-lg bg-[#d4ff00]/10 text-[#d4ff00]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    Lead & Pre-Sales Management
                  </h4>
                  <p className="text-xs text-white/50">10-30 min response & AI qualification</p>
                </div>
              </Link>

              <Link
                href="/products/service-insurance"
                onClick={handleLinkClick}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-2 rounded-lg bg-[#00f58c]/10 text-[#00f58c]">
                  <RotateCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    Service & Insurance Reminders
                  </h4>
                  <p className="text-xs text-white/50">Mileage triggers & 90%+ renewal follow-up</p>
                </div>
              </Link>
            </div>

            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 pt-4">
              NAVIGATION
            </p>

            <div className="space-y-3 font-display text-2xl font-bold text-white/90">
              <a
                href="#ecosystem"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors"
              >
                Dealership Ecosystem
              </a>
              <a
                href="#problem"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors"
              >
                Why Convertix
              </a>
              <a
                href="#roi"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors flex items-center justify-between"
              >
                <span>Dealership ROI Model</span>
                <Sparkles className="w-5 h-5 text-[#d4ff00]" />
              </a>
              <Link
                href="/pricing"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors"
              >
                Pricing & Editions
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors"
              >
                About & Architecture
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block hover:text-[#d4ff00] transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="tel:+917888028729"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white"
            >
              <Phone className="w-4 h-4 text-[#00f58c]" />
              <span>+91 7888 028 729</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Schedule VIP Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
