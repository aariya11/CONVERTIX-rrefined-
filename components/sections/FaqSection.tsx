"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { soundManager } from "../lib/sound";

interface FaqSectionProps {
  onOpenContact?: () => void;
}

const FAQS = [
  {
    question: "What is Convertix and what services does the studio provide?",
    answer:
      "Convertix is a boutique digital design and web engineering studio by Selenix Technology. We specialize in bespoke, high-converting websites, interactive service booking funnels, direct WhatsApp client acquisition desks, and sub-second Next.js engineering tailored specifically for premium service companies, clinics, dealerships, and consultants.",
  },
  {
    question: "Why should service businesses choose Convertix over WordPress or page builders?",
    answer:
      "Traditional WordPress templates and slow drag-and-drop page builders take 4 to 6 seconds to load and look generic, causing over 50% of paid ad visitors to bounce before reading your pitch. Convertix custom-codes every platform in Next.js 16 and React 19, delivering instant 0.5-second page loads, editorial luxury brand aesthetics, and a verified 3.4x average lift in high-value client inquiries.",
  },
  {
    question: "How does Convertix help our business capture and retain more high-value inquiries?",
    answer:
      "We replace bloated contact forms with friction-free conversion architecture: strategic visual storytelling, transparent tiered pricing calculators, 1-tap floating WhatsApp desks, real-time booking calendars, and instant CRM webhooks that route prospect details to your phone in under 15 seconds.",
  },
  {
    question: "What technology stack does Convertix use to build client websites?",
    answer:
      "Every Convertix project is built with Next.js 16, React 19, Tailwind CSS, TypeScript, and global cloud edge infrastructure. This guarantees 100/100 Google Core Web Vitals, enterprise security, and seamless integration with WhatsApp, Google Calendar, HubSpot, Salesforce, and custom CRMs.",
  },
  {
    question: "Do we retain 100% full ownership of the website code and design files?",
    answer:
      "Yes, absolutely. Once final milestone payment is completed, you receive 100% full ownership of the source code, custom design assets, and database schemas with zero vendor lock-in or recurring page-builder licensing fees.",
  },
  {
    question: "What is the typical timeline and how do we get started?",
    answer:
      "Standard bespoke builds are designed and engineered in 2 to 4 weeks across structured milestones (Discovery & Wireframes, Editorial UI/UX Design, Production Next.js Build, and DNS Launch). You can request a project proposal directly on this page or connect with our Lead Web Architect on WhatsApp at +91 9078 019 472.",
  },
];

export function FaqSection({ onOpenContact }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundManager.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Frequently Asked Questions
          </span>
        </div>

        {/* Headline & CTA */}
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="h2-editorial text-[#f3f1ec]">
              Everything you
              <br />
              <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
                need to
              </span>{" "}
              know<span className="text-[#e05a2b]">.</span>
            </h2>
            <p className="body-lead max-w-xl mt-4">
              Answers to common architectural, performance, and commercial questions about partnering with Convertix.
            </p>
          </div>

          {onOpenContact && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                onOpenContact();
              }}
              className="min-h-[44px] px-6 py-2.5 rounded-full border border-white/20 hover:border-[#e05a2b] text-white hover:text-[#e05a2b] font-sans text-xs font-semibold uppercase tracking-wider transition-all self-start md:self-auto inline-flex items-center gap-2"
            >
              <span>Have a Custom Question?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer touch-manipulation"
                >
                  <span className="text-lg sm:text-2xl font-sans font-bold text-white group-hover:text-[#e05a2b] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`min-w-[36px] min-h-[36px] rounded-full border border-white/15 flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#e05a2b] border-[#e05a2b]" : "bg-white/[0.03] group-hover:border-white/30"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="body-standard text-sm sm:text-base pt-4 pr-6 sm:pr-12 text-[#b8b5af] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
