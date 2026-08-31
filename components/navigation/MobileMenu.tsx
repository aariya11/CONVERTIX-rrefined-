"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowUpRight, Phone } from "lucide-react";
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-display font-black text-xl tracking-[-0.05em] text-[#f3f1ec]"
            >
              CONVERTIX<span className="text-[#e05a2b]">.</span>
            </Link>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close menu"
              className="p-2 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-12 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#e05a2b]">
              ARCHITECTURAL SUITES
            </span>

            <div className="space-y-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
              <Link
                href="/products/lead-management"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                Lead & Pre-Sales
              </Link>
              <Link
                href="/products/service-insurance"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                Service & Retention
              </Link>
              <a
                href="#ecosystem"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                Ecosystem
              </a>
              <a
                href="#roi"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                ROI Impact
              </a>
              <Link
                href="/pricing"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                Editions
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors"
              >
                About Convertix
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <a
              href="tel:+917888028729"
              className="flex items-center gap-2 text-xs font-mono text-[#b8b5af] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e05a2b]" />
              <span>Direct Enterprise Desk: +91 7888 028 729</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full py-4 rounded-full bg-[#f3f1ec] text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#e05a2b] hover:text-white transition-colors"
            >
              <span>Schedule Private Walkthrough</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
