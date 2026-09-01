"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { soundManager } from "../lib/sound";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("convertix_cookie_consent");
      if (!consent) {
        // Show after a polite 1.2s delay
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const handleAcceptAll = () => {
    soundManager.playClick();
    try {
      localStorage.setItem("convertix_cookie_consent", "all");
    } catch {}
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    soundManager.playClick();
    try {
      localStorage.setItem("convertix_cookie_consent", "essential");
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Cookie Preferences"
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto max-w-lg z-50 p-5 sm:p-6 bg-[#111111]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl text-[#f3f1ec]"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#e05a2b]" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-white">
                Privacy & Cookie Notice
              </span>
            </div>
            <button
              type="button"
              onClick={handleAcceptEssential}
              aria-label="Dismiss cookie notice"
              className="text-white/40 hover:text-white p-1 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="body-standard text-xs text-[#b8b5af] leading-relaxed mb-4">
            We use essential and analytics cookies to optimize your browsing experience, measure site performance, and power our interactive studio inquiries. By continuing, you agree to our{" "}
            <Link
              href="/privacy"
              className="text-white underline hover:text-[#e05a2b] transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/cookies"
              className="text-white underline hover:text-[#e05a2b] transition-colors"
            >
              Cookie Policy
            </Link>
            .
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="min-h-[40px] px-4 py-2 rounded-full bg-[#e05a2b] text-white text-xs font-sans font-semibold hover:bg-white hover:text-black transition-all active:scale-95 touch-manipulation cursor-pointer shadow-md shadow-[#e05a2b]/20"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="min-h-[40px] px-4 py-2 rounded-full bg-white/10 text-white text-xs font-sans font-medium hover:bg-white/20 transition-all active:scale-95 touch-manipulation cursor-pointer"
            >
              Essential Only
            </button>
            <Link
              href="/cookies"
              className="text-xs font-sans text-[#b8b5af] hover:text-white transition-colors ml-auto py-2"
            >
              Preferences →
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
