"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ShieldCheck,
  Calendar,
  Gauge,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const VEHICLE_RECORDS = [
  {
    id: "VIN-4821",
    customer: "Rajesh Kulkarni",
    phone: "+91 98200 •••••",
    model: "Tata Nexon XZ+ (Petrol)",
    regNo: "MH-01-EA-9921",
    type: "3rd Free Service Due",
    mileage: "19,850 km (Calculated: 20,000 km in 4 days)",
    insuranceExpiry: "14 Days Remaining (HDFC ERGO Policy)",
    status: "WhatsApp Booking Sent",
    followUpDue: "Today at 04:30 PM",
    priority: "High Workshop Value",
  },
  {
    id: "VIN-4822",
    customer: "Meenakshi Sundaram",
    phone: "+91 98401 •••••",
    model: "Hyundai Alcazar Signature 6S",
    regNo: "TN-07-CW-5120",
    type: "Paid Periodic Maintenance",
    mileage: "30,120 km",
    insuranceExpiry: "Expired 2 Days Ago (Renewal Pending)",
    status: "SIM Call Logged (Confirmed Pickup)",
    followUpDue: "Workshop Drop-off Tomorrow 09:00 AM",
    priority: "Urgent Renewal",
  },
  {
    id: "VIN-4823",
    customer: "Devendra Chauhan",
    phone: "+91 98110 •••••",
    model: "Mahindra Thar LX Hardtop AT",
    regNo: "DL-03-CC-8092",
    type: "1st Minor Service + Wheel Alignment",
    mileage: "9,940 km",
    insuranceExpiry: "45 Days Remaining",
    status: "Auto-Scheduled for Saturday",
    followUpDue: "Confirmed via SMS",
    priority: "Standard Retention",
  },
];

export function ServiceInsuranceSection() {
  const [selectedRecord, setSelectedRecord] = useState(VEHICLE_RECORDS[0]);

  return (
    <section id="service-insurance" className="relative py-20 sm:py-28 bg-[#07080a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00f58c]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00f58c]">
              Convertix Service & Insurance Suite
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
                PREDICTIVE SERVICE.
                <br />
                <span className="font-editorial text-white/40 font-normal italic lowercase">seamless</span>{" "}
                RENEWALS.
              </h2>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
                Automated mileage extrapolation, timely insurance expiry notifications, and verified calling protocols designed to keep workshop bays full and customer retention above 90%.
              </p>
            </div>

            {/* Benchmarks Badge */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/40 block text-[10px]">MISTIMED REMINDERS</span>
                <span className="text-[#00f58c] font-bold text-sm">&lt;10%</span>
                <span className="text-white/30 text-[10px] block line-through">DMS: &gt;60%</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/40 block text-[10px]">RENEWAL FOLLOW-UP</span>
                <span className="text-[#00f58c] font-bold text-sm">&gt;90%</span>
                <span className="text-white/30 text-[10px] block line-through">DMS: &lt;30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline & Customer Record Workbench */}
        <div className="rounded-3xl bg-[#0c0e14] border border-white/15 p-6 sm:p-10 shadow-2xl">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#00f58c]/15 text-[#00f58c]">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Predictive Workshop Retention Stream
                </h3>
                <p className="text-xs font-mono text-white/50">
                  Calculated using historical odometer velocities and insurance policy horizons
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
              Auto-Sync: OEM Workshop Management System
            </span>
          </div>

          {/* Record Selector & Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left Records (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono text-white/40 block mb-2">
                ACTIVE SERVICE & INSURANCE QUEUE
              </span>

              {VEHICLE_RECORDS.map((record) => {
                const isSelected = selectedRecord.id === record.id;
                return (
                  <div
                    key={record.id}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedRecord(record);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#141822] border-[#00f58c] shadow-lg shadow-[#00f58c]/5"
                        : "bg-[#0d0f15] border-white/8 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="text-white/40">{record.regNo}</span>
                      <span className="text-[#00f58c] font-semibold">{record.type}</span>
                    </div>

                    <h4 className="font-display font-bold text-white text-base mb-1">
                      {record.customer}
                    </h4>

                    <div className="text-xs font-mono text-white/70 mb-2 truncate">
                      {record.model}
                    </div>

                    <div className="text-[11px] font-mono text-[#d4ff00] pt-2 border-t border-white/5 flex items-center justify-between">
                      <span>{record.insuranceExpiry}</span>
                      <span className="text-white/40">{record.priority}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Telemetry Details (7 cols) */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#11141c] border border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">
                      {selectedRecord.customer}
                    </h3>
                    <p className="text-xs font-mono text-white/50">
                      {selectedRecord.model} • Registration: {selectedRecord.regNo}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 text-xs font-mono font-bold">
                    {selectedRecord.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      Mileage Estimation Engine
                    </span>
                    <p className="font-mono text-xs text-white leading-relaxed">
                      {selectedRecord.mileage}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      Insurance Expiry Horizon
                    </span>
                    <p className="font-mono text-xs text-[#d4ff00] leading-relaxed">
                      {selectedRecord.insuranceExpiry}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                    Scheduled Follow-Up SLA
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <Clock className="w-4 h-4 text-[#00f58c]" />
                    <span>{selectedRecord.followUpDue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-white/40">Workshop Bay Optimization: Slot #04 Reserved</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => soundManager.playChirp()}
                    className="px-4 py-2 rounded-lg bg-[#00f58c] text-black font-bold uppercase hover:bg-white transition-colors"
                  >
                    Confirm Workshop Booking
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
