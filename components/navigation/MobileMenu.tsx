"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenContact }: MobileMenuProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

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
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-sans font-extrabold text-xl tracking-tight text-[#f3f1ec]"
            >
              Convertix<span className="text-[#e05a2b]">.</span>
            </Link>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close menu"
              className="p-2.5 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b]">
              Studio Navigation
            </span>

            <div className="space-y-4 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white/90">
              <a
                href="#services"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                Web Design
              </a>
              <a
                href="#capabilities"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                Capabilities
              </a>
              <a
                href="#ecosystem"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                Ecosystem
              </a>
              <a
                href="#roi"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                ROI Impact
              </a>
              <Link
                href="/pricing"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                Packages
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block hover:text-[#e05a2b] transition-colors py-1"
              >
                About Studio
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
              <a
                href="tel:+919078019472"
                className="flex items-center gap-2 text-[#b8b5af] hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-[#e05a2b]" />
                <span>+91 9078 019 472</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors py-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat →</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full min-h-[48px] rounded-full bg-[#f3f1ec] text-black font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#e05a2b] hover:text-white transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
