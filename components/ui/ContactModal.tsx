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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-auto text-[#f3f1ec]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#e05a2b] mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                  Consultation Booked.
                </h3>
                <p className="body-standard max-w-xs mx-auto">
                  Our Automotive Solutions Director will connect with your dealership team within 15 minutes.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block mb-1">
                    Executive Walkthrough
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                    Deploy Convertix<span className="text-[#e05a2b]">.</span>
                  </h3>
                  <p className="body-standard text-xs mt-1">
                    Transform your dealership's response velocity, service bays, and insurance renewals.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="space-y-1">
                    <label className="text-white/70 uppercase tracking-wider block font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] px-4 bg-[#181818] border border-white/10 rounded-xl text-white text-sm focus:border-[#e05a2b] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-white/70 uppercase tracking-wider block font-medium">Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[48px] px-4 bg-[#181818] border border-white/10 rounded-xl text-white text-sm focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-white/70 uppercase tracking-wider block font-medium">Dealership Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Motors"
                        value={formData.dealershipName}
                        onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                        className="w-full min-h-[48px] px-4 bg-[#181818] border border-white/10 rounded-xl text-white text-sm focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 mt-3"
                  >
                    <span>Confirm Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                    <a
                      href="tel:+919078019472"
                      className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#e05a2b]" />
                      <span>Call: +91 9078 019 472</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline inline-flex items-center gap-1.5 py-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
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
