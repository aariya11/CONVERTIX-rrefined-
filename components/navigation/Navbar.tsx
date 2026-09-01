"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { soundManager } from "../lib/sound";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ onOpenContact, onOpenMobileMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-3 sm:pt-6">
        <nav
          className={`pointer-events-auto transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-full py-2 px-5 sm:px-6 shadow-2xl mx-auto max-w-4xl"
              : "bg-transparent py-2 px-0"
          }`}
        >
          {/* Left Brand */}
          <Link
            href="/"
            onClick={() => soundManager.playClick()}
            data-cursor="CONVERTIX"
            className="flex items-center gap-1 group py-1 min-h-[44px] touch-manipulation"
          >
            <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-[#f3f1ec]">
              Convertix<span className="text-[#e05a2b]">.</span>
            </span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7 text-[13px] font-sans font-medium text-[#b8b5af]">
            <Link
              href="/#services"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              Services
            </Link>
            <Link
              href="/#capabilities"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              Capabilities
            </Link>
            <Link
              href="/#ecosystem"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              Ecosystem
            </Link>
            <Link
              href="/#roi"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              ROI Impact
            </Link>
            <Link
              href="/pricing"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              Packages
            </Link>
            <Link
              href="/about"
              className="hover:text-white transition-colors py-1"
              onClick={() => soundManager.playClick()}
            >
              About
            </Link>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact();
              }}
              data-cursor="START"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#f3f1ec] bg-white/10 hover:bg-[#e05a2b] hover:text-white px-4 py-2.5 rounded-full transition-all group min-h-[44px] touch-manipulation cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Trigger Button (Large 48px touch target) */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onOpenMobileMenu();
              }}
              aria-label="Open Navigation Menu"
              className="md:hidden flex items-center justify-center min-w-[48px] min-h-[48px] p-2.5 text-[#f3f1ec] hover:text-[#e05a2b] active:scale-95 transition-all touch-manipulation cursor-pointer rounded-xl bg-white/[0.05] border border-white/10"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
