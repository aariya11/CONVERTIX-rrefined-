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
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-sans font-extrabold text-xl tracking-tight text-[#f3f1ec] min-h-[44px] flex items-center touch-manipulation"
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
              className="min-w-[48px] min-h-[48px] flex items-center justify-center p-2.5 text-white/70 hover:text-white active:scale-95 transition-all touch-manipulation cursor-pointer rounded-xl bg-white/[0.05]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-4">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b] block mb-2">
              Studio Navigation
            </span>

            <div className="space-y-1 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white/90">
              <Link
                href="/#services"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                Web Design
              </Link>
              <Link
                href="/#capabilities"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                Capabilities
              </Link>
              <Link
                href="/#ecosystem"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                Ecosystem
              </Link>
              <Link
                href="/#roi"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                ROI Impact
              </Link>
              <Link
                href="/#faq"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                FAQ
              </Link>
              <Link
                href="/pricing"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                Packages
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                About Studio
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] hover:text-[#e05a2b] active:text-[#e05a2b] transition-colors py-2 touch-manipulation"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
              <a
                href="tel:+919078019472"
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-2 text-[#b8b5af] hover:text-white transition-colors py-2 min-h-[44px] touch-manipulation"
              >
                <Phone className="w-4 h-4 text-[#e05a2b]" />
                <span>+91 9078 019 472</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChirp()}
                className="flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors py-2 min-h-[44px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat →</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onClose();
                onOpenContact();
              }}
              className="w-full min-h-[50px] rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black active:scale-95 transition-all shadow-xl shadow-[#e05a2b]/20 touch-manipulation cursor-pointer"
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
