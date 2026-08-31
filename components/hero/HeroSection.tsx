"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "../lib/sound";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Dealership%20OS.";

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Top Minimal Editorial Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#e05a2b]">
            VOL. 04 // AUTOMOTIVE RETAIL INTELLIGENCE
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#b8b5af] hidden sm:inline">
            EST. 2026 // SELENIX TECH
          </span>
        </motion.div>

        {/* Asymmetrical Magazine Cover Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-24">
          {/* Left: Enormous Editorial Headline (7 cols) */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] leading-[0.85] uppercase"
            >
              THE
              <br />
              DEALERSHIP
              <br />
              <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
                operating
              </span>
              <br />
              SYSTEM<span className="text-[#e05a2b]">.</span>
            </motion.h1>
          </div>

          {/* Right: Dramatic Cropped Luxury Automotive Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Artistic Automotive Imagery Element */}
            <div className="luxury-image-wrapper rounded-2xl sm:rounded-3xl border border-white/15 aspect-[4/3] bg-[#141414] overflow-hidden relative group">
              {/* Cinematic SVG Automotive Contour Architecture */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#161616] to-[#242424] flex items-center justify-center p-8">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-700"
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
                  <line x1="20" y1="242" x2="380" y2="242" stroke="#444" strokeWidth="1" />
                </svg>
              </div>

              {/* Minimal Editorial Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-[10px] font-mono text-[#b8b5af]">
                <span>AERODYNAMIC ARCHITECTURE</span>
                <span className="text-[#e05a2b] font-bold">10-MIN SLA</span>
              </div>
            </div>

            {/* Editorial Caption & Actions */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-[#b8b5af] leading-relaxed font-normal">
                AI-powered lead, service and insurance workflows engineered specifically for modern automotive retail networks. Transforming showroom latency into closed momentum.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playChirp();
                    onOpenContact();
                  }}
                  data-cursor="MOVE"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f3f1ec] bg-[#e05a2b] px-6 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors font-bold group"
                >
                  <span>Explore Convertix</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#25D366] hover:text-white transition-colors py-3 px-4 rounded-full border border-[#25D366]/30 hover:border-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+919078019472"
                  className="text-xs font-mono uppercase tracking-widest text-[#b8b5af] hover:text-white transition-colors"
                >
                  +91 9078 019 472 →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Typographic Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono"
        >
          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-1">Response Window</span>
            <span className="font-display text-2xl sm:text-3xl font-black text-[#f3f1ec]">10–30 MIN</span>
          </div>

          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-1">Follow-Up SLA</span>
            <span className="font-display text-2xl sm:text-3xl font-black text-[#f3f1ec]">&gt;90%</span>
          </div>

          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-1">OEM DMS Protocol</span>
            <span className="font-display text-2xl sm:text-3xl font-black text-[#f3f1ec]">2-WAY SYNC</span>
          </div>

          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-1">Telecall Audit</span>
            <span className="font-display text-2xl sm:text-3xl font-black text-[#f3f1ec]">SIM-NATIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
