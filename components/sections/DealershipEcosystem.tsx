"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Globe,
  Radio,
  MessageSquare,
  PhoneCall,
  Users,
  Wrench,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { soundManager } from "../lib/sound";

const ECOSYSTEM_NODES = [
  {
    id: "oem-dms",
    name: "OEM DMS Systems",
    subtitle: "Tata, Hyundai, Maruti, Mahindra",
    category: "Core Integration",
    icon: Database,
    color: "#d4ff00",
    flow: "2-Way Bi-Directional Lead & Booking Writeback with zero manual lag",
  },
  {
    id: "website",
    name: "Dealer Website & Ads",
    subtitle: "Meta, Google Search, Chatbots",
    category: "Inbound Capture",
    icon: Globe,
    color: "#00d8f6",
    flow: "Instant webhook capture within 3 seconds of customer form submission",
  },
  {
    id: "aggregators",
    name: "Lead Aggregators",
    subtitle: "CarWale, CarDekho, BikeWale",
    category: "External Portals",
    icon: Radio,
    color: "#ffaa00",
    flow: "Direct API polling extracting raw inquiries directly into AI priority queue",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    subtitle: "Verified Green Badge Channel",
    category: "Omnichannel",
    icon: MessageSquare,
    color: "#00f58c",
    flow: "Automated digital brochures, video walkthroughs & test drive appointment cards",
  },
  {
    id: "telephony",
    name: "SIM-Integrated Telephony",
    subtitle: "Hardware Call Verification",
    category: "Communication",
    icon: PhoneCall,
    color: "#d4ff00",
    flow: "Every outbound dial tracked, duration logged & synced with supervisor review",
  },
  {
    id: "sales-team",
    name: "Sales Consultants",
    subtitle: "Showroom Floor Execution",
    category: "Workforce",
    icon: Users,
    color: "#ffffff",
    flow: "Mobile app with 1-tap dialing, daily targets, and missed follow-up alerts",
  },
  {
    id: "service-workshop",
    name: "Service Workshop Bays",
    subtitle: "Advisors & Technicians",
    category: "After-Sales",
    icon: Wrench,
    color: "#00f58c",
    flow: "Predictive mileage reminders and 1-click workshop appointment confirmations",
  },
  {
    id: "insurance-desk",
    name: "Insurance Renewals",
    subtitle: "Policy Officers & Agents",
    category: "Retention",
    icon: ShieldCheck,
    color: "#00d8f6",
    flow: "60-day expiry horizon radar triggering timely renewal follow-up sequences",
  },
  {
    id: "executive-mgmt",
    name: "Dealer Principals & MDs",
    subtitle: "Realtime Analytics & SLA",
    category: "Governance",
    icon: TrendingUp,
    color: "#ff5500",
    flow: "Live pivot dashboards, team response speed rankings, and escalation overrides",
  },
];

export function DealershipEcosystem() {
  const [selectedNode, setSelectedNode] = useState(ECOSYSTEM_NODES[0]);

  return (
    <section id="ecosystem" className="relative py-20 sm:py-28 bg-[#07080a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-3 block">
            Connected Dealership Topology
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9]">
            THE DEALERSHIP
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">connected</span>{" "}
            ECOSYSTEM.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
            Convertix sits at the neural center of your automotive retail operation—connecting OEM systems, lead sources, showroom floors, workshop bays, and leadership into one synchronized platform.
          </p>
        </div>

        {/* Dynamic Connected Node Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {ECOSYSTEM_NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;

            return (
              <motion.div
                key={node.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedNode(node);
                }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#141822] border-[#d4ff00] shadow-xl shadow-[#d4ff00]/5 scale-[1.02]"
                    : "bg-[#0d0f15] border-white/8 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    {node.category}
                  </span>
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${node.color}15`, color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {node.name}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-4 truncate">
                  {node.subtitle}
                </p>

                <div className="text-[11px] font-mono text-white/70 pt-3 border-t border-white/5 leading-relaxed">
                  {node.flow}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Hub Focus Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0f121a] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4ff00] text-black font-black flex items-center justify-center font-display text-xl shrink-0">
              CX
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
                CENTRAL CONVERTIX SYNCHRONIZATION ENGINE
              </span>
              <h4 className="font-display font-bold text-xl text-white">
                Active Protocol: {selectedNode.name}
              </h4>
              <p className="text-xs text-white/60 font-mono mt-0.5">
                {selectedNode.flow}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono self-end md:self-auto shrink-0">
            <span className="text-white/40">Zero Duplication Guarantee</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 font-bold">
              2-WAY REST / WEBHOOK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
