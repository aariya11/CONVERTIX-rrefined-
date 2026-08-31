"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { soundManager } from "../lib/sound";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dealership: "",
    phone: "",
    email: "",
    outlets: "1-3 Outlets",
    brands: "",
    interest: "Both Lead Management & Service Suite",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChirp();
    setSubmitted(true);
  };

  const handleClose = () => {
    soundManager.playClick();
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-2xl bg-[#0e1117] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#13161f]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4ff00]">
                  Convertix VIP Onboarding
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#00f58c]/10 border border-[#00f58c]/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#00f58c]" />
                  </div>
                  <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-2">
                    VIP Consultation Requested
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mb-8">
                    Our Automotive Retail Technology Director will reach out to{" "}
                    <span className="text-white font-mono">{formData.phone || "your number"}</span>{" "}
                    within 15 minutes to configure your custom live instance.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 w-full max-w-sm text-left mb-6">
                    <p className="text-xs font-mono text-white/50 mb-1">Direct Technical Support Line:</p>
                    <a
                      href="tel:+917888028729"
                      className="text-sm font-mono font-bold text-[#d4ff00] hover:underline flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" /> +91 7888 028 729
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#d4ff00] transition-colors"
                  >
                    Return to Experience
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white mb-2">
                      Deploy the Dealership OS.
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60">
                      Schedule a 20-minute operational walkthrough tailored to your OEM and dealership network.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Vikram Singhania"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          Direct Phone (WhatsApp) *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          Dealership / Group Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Apex Motors Group"
                          value={formData.dealership}
                          onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          OEM Brand(s)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Tata / Hyundai / Maruti / MG"
                          value={formData.brands}
                          onChange={(e) => setFormData({ ...formData, brands: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          Outlets / Showroom Count
                        </label>
                        <select
                          value={formData.outlets}
                          onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#171a22] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        >
                          <option value="1 Outlet">1 Single Showroom / Workshop</option>
                          <option value="2-4 Outlets">2 – 4 Outlets (Regional Hub)</option>
                          <option value="5-10 Outlets">5 – 10 Outlets (Major Group)</option>
                          <option value="10+ Outlets">10+ Outlets (Enterprise Network)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                          System Evaluation Focus
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#171a22] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                        >
                          <option value="Unified Suite">Unified Suite (Leads + Service + Insurance)</option>
                          <option value="Lead Management Only">Leads & Pre-Sales Speed Module</option>
                          <option value="Service & Insurance Only">Service & Insurance Retention Module</option>
                          <option value="DMS API Integration">2-Way OEM DMS Integration Engine</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10"
                      >
                        <span>Confirm VIP Consultation Slot</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-white/40 pt-2 font-mono border-t border-white/5">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00f58c]" />
                        256-Bit Dealership Data Privacy
                      </span>
                      <span>Product of Selenix Technology</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
