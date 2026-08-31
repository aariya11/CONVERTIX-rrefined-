"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "../lib/sound";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Dealership%20OS.";

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Automotive Retail Intelligence
            </span>
          </div>
          <span className="text-xs font-sans text-[#b8b5af] hidden sm:inline">
            Selenix Technology
          </span>
        </motion.div>

        {/* Asymmetrical Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-24">
          {/* Left: Fluid Editorial Headline (7 cols) */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h1-editorial text-[#f3f1ec]"
            >
              The dealership
              <br />
              <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
                operating
              </span>
              <br />
              system<span className="text-[#e05a2b]">.</span>
            </motion.h1>
          </div>

          {/* Right: Cropped Automotive Visual & Statement (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Frame */}
            <div className="luxury-image-wrapper rounded-2xl sm:rounded-3xl border border-white/12 aspect-[4/3] bg-[#121212] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#141414] to-[#222222] flex items-center justify-center p-6 sm:p-8">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full opacity-65 group-hover:opacity-90 transition-opacity duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 30 220 C 70 170, 140 140, 240 140 C 310 140, 360 170, 380 220"
                    stroke="#f3f1ec"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 50 200 C 100 110, 190 90, 290 100 C 350 110, 370 160, 370 190"
                    stroke="#e05a2b"
                    strokeWidth="2"
                  />
                  <circle cx="110" cy="210" r="32" stroke="#f3f1ec" strokeWidth="1.5" />
                  <circle cx="310" cy="210" r="32" stroke="#f3f1ec" strokeWidth="1.5" />
                  <line x1="20" y1="242" x2="380" y2="242" stroke="#333" strokeWidth="1" />
                </svg>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs font-sans text-[#b8b5af]">
                <span>Automated OEM Routing</span>
                <span className="text-[#e05a2b] font-semibold">10-Min SLA</span>
              </div>
            </div>

            {/* Narrative & Actions */}
            <div className="space-y-5">
              <p className="body-lead">
                One unified platform for showroom lead response, predictive workshop retention, and proactive insurance renewals.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playChirp();
                    onOpenContact();
                  }}
                  data-cursor="MOVE"
                  className="min-h-[48px] px-6 py-3 rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-[#e05a2b]/20"
                >
                  <span>Explore Convertix</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-5 py-3 rounded-full border border-[#25D366]/40 text-[#25D366] font-sans font-medium text-sm hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+919078019472"
                  className="text-sm font-sans font-medium text-[#b8b5af] hover:text-white transition-colors"
                >
                  +91 9078 019 472
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Typographic Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Response Window</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">10–30 min</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Follow-Up SLA</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">&gt;90%</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">OEM DMS Protocol</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">2-Way Sync</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Telecall Audit</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">SIM-Native</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
