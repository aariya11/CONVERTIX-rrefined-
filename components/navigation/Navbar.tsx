"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { soundManager } from "../lib/sound";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ onOpenContact, onOpenMobileMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8">
        <nav
          className={`pointer-events-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl mx-auto max-w-4xl"
              : "bg-transparent py-2 px-0"
          }`}
        >
          {/* Left Brand */}
          <Link
            href="/"
            onClick={() => soundManager.playClick()}
            data-cursor="CONVERTIX"
            className="flex items-center gap-2 group"
          >
            <span className="font-display font-black text-lg sm:text-xl tracking-[-0.05em] text-[#f3f1ec]">
              CONVERTIX<span className="text-[#e05a2b]">.</span>
            </span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#b8b5af]">
            <Link
              href="/products/lead-management"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              Leads
            </Link>
            <Link
              href="/products/service-insurance"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              Service & Insurance
            </Link>
            <a
              href="#ecosystem"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              Ecosystem
            </a>
            <a
              href="#roi"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              ROI Impact
            </a>
            <Link
              href="/pricing"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              Editions
            </Link>
            <Link
              href="/about"
              className="hover:text-white transition-colors uppercase"
              onClick={() => soundManager.playClick()}
            >
              About
            </Link>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact();
              }}
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f3f1ec] hover:text-[#e05a2b] transition-colors group"
            >
              <span>Talk to Sales</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#e05a2b]" />
            </button>

            {/* Mobile Trigger */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              aria-label="Open Navigation"
              className="md:hidden p-2 text-[#f3f1ec] hover:text-[#e05a2b] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
