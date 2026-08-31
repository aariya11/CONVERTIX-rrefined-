"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Sparkles,
  Zap,
  RotateCw,
  Layers,
  ArrowUpRight,
  Menu,
} from "lucide-react";
import { SoundToggle } from "../ui/SoundToggle";
import { MagneticButton } from "../ui/MagneticButton";
import { soundManager } from "../lib/sound";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ onOpenContact, onOpenMobileMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between ${
            scrolled
              ? "bg-[#090b0e]/85 backdrop-blur-xl border border-white/12 shadow-2xl py-2.5 px-4 sm:px-6 mx-auto max-w-5xl"
              : "bg-transparent py-4 px-2"
          }`}
        >
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={() => soundManager.playClick()}
            data-cursor="CONVERTIX"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#d4ff00] text-black font-black flex items-center justify-center font-display text-base tracking-tighter group-hover:scale-105 transition-transform">
              CX
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-white flex items-center gap-1.5">
                CONVERTIX
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f58c] animate-pulse" />
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase hidden sm:inline">
                Auto Retail OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setProductsOpen(true);
                soundManager.playClick();
              }}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="px-3 py-1.5 rounded-full text-xs font-mono text-white/80 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 uppercase tracking-wider"
              >
                Products
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#d4ff00]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-80 p-2 bg-[#0c0e14] border border-white/15 rounded-2xl shadow-2xl backdrop-blur-2xl"
                  >
                    <Link
                      href="/products/lead-management"
                      onClick={() => soundManager.playClick()}
                      className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-[#d4ff00]/10 text-[#d4ff00]">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="font-display font-semibold text-xs text-white group-hover/item:text-[#d4ff00] transition-colors">
                          Lead & Pre-Sales OS
                        </div>
                      </div>
                      <p className="text-[11px] text-white/50 leading-relaxed pl-8">
                        10-minute response speed, SIM-integrated calling & AI prioritization matrix.
                      </p>
                    </Link>

                    <Link
                      href="/products/service-insurance"
                      onClick={() => soundManager.playClick()}
                      className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-[#00f58c]/10 text-[#00f58c]">
                          <RotateCw className="w-4 h-4" />
                        </div>
                        <div className="font-display font-semibold text-xs text-white group-hover/item:text-[#00f58c] transition-colors">
                          Service & Insurance Reminders
                        </div>
                      </div>
                      <p className="text-[11px] text-white/50 leading-relaxed pl-8">
                        Mileage-based triggers, policy renewals & 90%+ follow-up retention.
                      </p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#ecosystem"
              onClick={() => soundManager.playClick()}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
            >
              Ecosystem
            </a>

            <a
              href="#problem"
              onClick={() => soundManager.playClick()}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
            >
              Why Convertix
            </a>

            <a
              href="#roi"
              onClick={() => soundManager.playClick()}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#d4ff00]" />
              ROI Model
            </a>

            <Link
              href="/pricing"
              onClick={() => soundManager.playClick()}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              onClick={() => soundManager.playClick()}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SoundToggle />

            <a
              href="tel:+917888028729"
              className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono text-white/70 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00f58c]" />
              <span>+91 7888 028 729</span>
            </a>

            <MagneticButton
              variant="primary"
              onClick={onOpenContact}
              cursorText="TALK"
              className="!py-2 !px-4 text-[11px]"
            >
              <span>Book VIP Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              aria-label="Open mobile navigation"
              className="md:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
