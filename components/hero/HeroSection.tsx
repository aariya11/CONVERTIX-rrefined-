"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { soundManager } from "../lib/sound";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

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
              Digital Design & Web Engineering Studio
            </span>
          </div>
          <span className="text-xs font-sans text-[#b8b5af] hidden sm:inline">
            Websites Built for Service Businesses
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
              We build
              <br />
              <span className="font-editorial text-[#e05a2b] font-normal italic lowercase tracking-tight">
                bespoke
              </span>{" "}
              websites
              <br />
              for services<span className="text-[#e05a2b]">.</span>
            </motion.h1>
          </div>

          {/* Right: Studio Aesthetic Visual & Value Prop (5 cols) */}
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
                  <rect x="30" y="40" width="340" height="220" rx="12" stroke="#f3f1ec" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="30" y1="80" x2="370" y2="80" stroke="#444" strokeWidth="1" />
                  <circle cx="50" cy="60" r="4" fill="#e05a2b" />
                  <circle cx="65" cy="60" r="4" fill="#f3f1ec" opacity="0.4" />
                  <circle cx="80" cy="60" r="4" fill="#f3f1ec" opacity="0.4" />
                  <rect x="60" y="110" width="140" height="14" rx="3" fill="#f3f1ec" opacity="0.9" />
                  <rect x="60" y="135" width="220" height="8" rx="2" fill="#b8b5af" opacity="0.5" />
                  <rect x="60" y="150" width="180" height="8" rx="2" fill="#b8b5af" opacity="0.3" />
                  <rect x="60" y="180" width="110" height="28" rx="14" fill="#e05a2b" />
                  <rect x="230" y="110" width="110" height="98" rx="8" stroke="#e05a2b" strokeWidth="1.5" fill="#e05a2b" fillOpacity="0.1" />
                </svg>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs font-sans text-[#b8b5af]">
                <span>Bespoke Next.js Engineering</span>
                <span className="text-[#e05a2b] font-semibold">100 Lighthouse</span>
              </div>
            </div>

            {/* Narrative & Actions */}
            <div className="space-y-5">
              <p className="body-lead">
                We design and engineer luxury editorial websites, high-speed lead capture systems, and client acquisition engines built specifically for premium service companies.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playChirp();
                    onOpenContact();
                  }}
                  data-cursor="START"
                  className="min-h-[48px] px-6 py-3 rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-[#e05a2b]/20"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-5 py-3 rounded-full border border-[#25D366]/40 text-[#25D366] font-sans font-medium text-sm hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
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
            <span className="text-xs text-[#b8b5af] block mb-1">Performance Standard</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">Sub-Second</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Average Conversion Lift</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">3.4x More Leads</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Tech Stack Architecture</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">Custom Next.js</span>
          </div>

          <div>
            <span className="text-xs text-[#b8b5af] block mb-1">Client Inquiries</span>
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#f3f1ec]">WhatsApp + CRM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
