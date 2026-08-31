"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { soundManager } from "../lib/sound";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dealershipName: "",
    brand: "Tata Motors",
    outlets: "1–3 Outlets",
  });

  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccessTone();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0e0e0e] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl z-10 my-auto text-[#f3f1ec]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close"
              className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#e05a2b] mx-auto" />
                <h3 className="text-3xl font-display font-bold text-white">
                  Consultation Booked.
                </h3>
                <p className="text-sm font-mono text-[#b8b5af]">
                  Our Automotive Solutions Director will connect with your dealership team within 15 minutes.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b] block mb-2">
                    EXECUTIVE CONSULTATION
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                    DEPLOY CONVERTIX<span className="text-[#e05a2b]">.</span>
                  </h3>
                  <p className="text-xs font-mono text-[#b8b5af] mt-2">
                    Transform your dealership's response velocity, service bays, and insurance renewals.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                  <div className="space-y-1.5">
                    <label className="text-white/60 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 uppercase tracking-wider block">Direct Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-white/60 uppercase tracking-wider block">Dealership Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Motors"
                        value={formData.dealershipName}
                        onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 uppercase tracking-wider block">Primary OEM Brand</label>
                      <select
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      >
                        <option>Tata Motors</option>
                        <option>Maruti Suzuki</option>
                        <option>Hyundai Motor</option>
                        <option>Mahindra & Mahindra</option>
                        <option>Kia Motors</option>
                        <option>Multi-Brand Dealer Group</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-white/60 uppercase tracking-wider block">Network Scale</label>
                      <select
                        value={formData.outlets}
                        onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      >
                        <option>1–3 Outlets (Single Region)</option>
                        <option>4–10 Outlets (Multi-City)</option>
                        <option>10+ Outlets (Large Enterprise Group)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#e05a2b] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Confirm Executive Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                    <a
                      href="tel:+919078019472"
                      className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-[#e05a2b]" />
                      <span>Call: +91 9078 019 472</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
