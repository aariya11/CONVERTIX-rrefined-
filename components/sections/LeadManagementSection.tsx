"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  PhoneCall,
  User,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  FileText,
  Filter,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const SAMPLE_LEADS = [
  {
    id: "LEAD-9481",
    name: "Rahul Sharma",
    phone: "+91 98210 •••••",
    source: "Tata Motors OEM Portal",
    model: "Tata Safari Dark Edition XZA+",
    budget: "₹28,50,000",
    score: 97,
    status: "SIM Call Verified",
    assignedTo: "Karan Malhotra (Senior Exec)",
    responseTime: "8.4 Mins",
    followUp: "Test Drive Scheduled (Tomorrow 11:00 AM)",
    notes: "Customer comparing with XUV700. Immediate test drive required.",
    dmsSynced: true,
  },
  {
    id: "LEAD-9482",
    name: "Dr. Ananya Iyer",
    phone: "+91 97114 •••••",
    source: "CarWale Direct Lead",
    model: "Hyundai Creta SX(O) Petrol Auto",
    budget: "₹20,00,000",
    score: 93,
    status: "WhatsApp Brochure Sent",
    assignedTo: "Priya Sengupta",
    responseTime: "12.1 Mins",
    followUp: "Follow-up Call in 45 Mins",
    notes: "Requested exchange valuation for 2019 i20.",
    dmsSynced: true,
  },
  {
    id: "LEAD-9483",
    name: "Vikramjit Singhania",
    phone: "+91 98450 •••••",
    source: "Showroom Website Bot",
    model: "Mahindra Scorpio-N Z8L Diesel 4x4",
    budget: "₹25,00,000",
    score: 89,
    status: "Auto-Escalated to Branch Mgr",
    assignedTo: "Amit Verma (Transferred)",
    responseTime: "22.5 Mins",
    followUp: "VIP Callback Scheduled",
    notes: "High net worth individual. Demanded delivery commitment.",
    dmsSynced: true,
  },
];

export function LeadManagementSection() {
  const [selectedLead, setSelectedLead] = useState(SAMPLE_LEADS[0]);

  return (
    <section id="lead-management" className="relative py-28 bg-[#090b10] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00]">
              Convertix Lead & Pre-Sales Platform
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
                LEADS DON'T WAIT.
              </h2>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
                Automated multi-source lead ingestion, instant AI prioritization, SIM-integrated dialing, and bi-directional DMS sync designed to close deals before competitors pick up the phone.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white">
                <span className="text-white/40 block text-[10px]">AVG SPEED</span>
                <span className="text-[#d4ff00] font-bold text-sm">11.4 MIN</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white">
                <span className="text-white/40 block text-[10px]">FOLLOW-UP</span>
                <span className="text-[#00f58c] font-bold text-sm">94.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Cockpit Mockup */}
        <div className="rounded-3xl bg-[#0c0e14] border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#12151d] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-white/60 font-semibold pl-2">
                CONVERTIX DEALERSHIP WORKBENCH // SHOWROOM DESK (MUMBAI CENTRAL)
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f58c] animate-pulse" />
                DMS 2-WAY SYNC ACTIVE
              </span>
            </div>
          </div>

          {/* Cockpit Content: Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Live Incoming Leads List (5 cols) */}
            <div className="lg:col-span-5 border-r border-white/10 p-4 sm:p-6 space-y-3 bg-[#0a0c10]">
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3 px-1">
                <span>INCOMING STREAMS (LIVE)</span>
                <span className="text-[#d4ff00]">3 NEW LEADS</span>
              </div>

              {SAMPLE_LEADS.map((lead) => {
                const isSelected = selectedLead.id === lead.id;
                return (
                  <motion.div
                    key={lead.id}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedLead(lead);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#141822] border-[#d4ff00] shadow-lg shadow-[#d4ff00]/5"
                        : "bg-[#0f1118] border-white/8 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono text-white/40">{lead.id}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-bold">
                        AI SCORE {lead.score}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white mb-0.5">
                      {lead.name}
                    </h4>

                    <div className="text-xs text-white/70 font-mono mb-2 truncate">
                      {lead.model}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/5">
                      <span className="text-white/50">{lead.source}</span>
                      <span className="text-[#00f58c] font-semibold">{lead.responseTime}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Lead Detail & Telemetry Cockpit (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0e1118] flex flex-col justify-between">
              <div>
                {/* Detail Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-display font-black text-white">
                        {selectedLead.name}
                      </h3>
                      <span className="text-xs font-mono text-white/40">{selectedLead.phone}</span>
                    </div>
                    <p className="text-xs font-mono text-[#d4ff00]">
                      Vehicle Intent: {selectedLead.model} ({selectedLead.budget})
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-display font-black text-[#00f58c]">
                      {selectedLead.score}/100
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      Conversion Probability
                    </span>
                  </div>
                </div>

                {/* Grid of Telemetry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      Assigned Sales Exec
                    </span>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#d4ff00]" />
                      <span className="font-mono text-sm font-semibold text-white">
                        {selectedLead.assignedTo}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      Telephony & Call Audit
                    </span>
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#00f58c]" />
                      <span className="font-mono text-sm font-semibold text-white">
                        {selectedLead.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Follow Up & Notes */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      Scheduled Action
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <Clock className="w-3.5 h-3.5 text-[#d4ff00]" />
                      <span>{selectedLead.followUp}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      AI Lead Intelligence Summary
                    </span>
                    <p className="text-xs text-white/70 font-normal">
                      {selectedLead.notes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-white/40">
                  Auto-DMS Identifier: #DMS-TATA-2026-9012
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => soundManager.playChirp()}
                    className="px-4 py-2 rounded-lg bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 hover:bg-[#00f58c] hover:text-black transition-colors font-bold uppercase"
                  >
                    Direct SIM Dial
                  </button>
                  <button
                    type="button"
                    onClick={() => soundManager.playChirp()}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-black transition-colors font-bold uppercase"
                  >
                    WhatsApp Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
