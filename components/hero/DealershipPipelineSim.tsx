"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  PhoneCall,
  UserCheck,
  CheckCircle2,
  Sparkles,
  Play,
  Pause,
  Plus,
  Radio,
  Activity,
  Car,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { soundManager } from "../lib/sound";

interface LeadPacket {
  id: string;
  name: string;
  source: string;
  model: string;
  score: number;
  stage: number; // 0 to 5
  timeInStage: number;
  timestamp: string;
}

const INITIAL_PACKETS: LeadPacket[] = [
  {
    id: "CX-8021",
    name: "Rahul Sharma",
    source: "OEM DMS Sync",
    model: "Safari Dark Edition",
    score: 97,
    stage: 4,
    timeInStage: 2,
    timestamp: "14:21:04",
  },
  {
    id: "CX-8022",
    name: "Priya Nair",
    source: "CarWale Lead Portal",
    model: "Creta SX(O) Turbo",
    score: 94,
    stage: 2,
    timeInStage: 1,
    timestamp: "14:22:18",
  },
  {
    id: "CX-8023",
    name: "Amitabh Patel",
    source: "Dealership Web Bot",
    model: "Nexon EV Empowered",
    score: 89,
    stage: 1,
    timeInStage: 0,
    timestamp: "14:23:45",
  },
];

const STAGES = [
  { title: "LEAD CAPTURE", subtitle: "OEM / Web / Portal", icon: Zap, color: "#ffffff" },
  { title: "AI PRIORITIZATION", subtitle: "Scored 90+ High Intent", icon: Sparkles, color: "#d4ff00" },
  { title: "INSTANT ROUTING", subtitle: "<30s Sales Assigned", icon: UserCheck, color: "#00d8f6" },
  { title: "SIM-VERIFIED CALL", subtitle: "Auto-Logged & Tracked", icon: PhoneCall, color: "#00f58c" },
  { title: "SMART ENGAGE", subtitle: "WhatsApp & Follow-up", icon: Radio, color: "#d4ff00" },
  { title: "WON CONVERSION", subtitle: "2-Way DMS Synchronized", icon: CheckCircle2, color: "#00f58c" },
];

export function DealershipPipelineSim() {
  const [packets, setPackets] = useState<LeadPacket[]>(INITIAL_PACKETS);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<1 | 2>(1);
  const [selectedPacket, setSelectedPacket] = useState<LeadPacket | null>(INITIAL_PACKETS[0]);

  // Simulation tick loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPackets((prev) =>
        prev.map((packet) => {
          if (packet.stage < STAGES.length - 1) {
            return {
              ...packet,
              stage: packet.stage + 1,
              timeInStage: 0,
            };
          } else {
            // Recycle packet back to stage 0 with updated randomized customer
            const names = ["Vikram Malhotra", "Sunita Roy", "Karan Mehra", "Deepak Joshi", "Neha Bansal"];
            const models = ["Scorpio-N Z8L", "Harrier Fearless", "Thar Roxx 4x4", "Seltos X-Line", "XUV700 AX7"];
            const sources = ["OEM DMS Direct", "Google Ads Web", "WhatsApp Inbound", "Showroom Walk-in", "CarDekho"];
            
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomModel = models[Math.floor(Math.random() * models.length)];
            const randomSource = sources[Math.floor(Math.random() * sources.length)];
            const randomScore = Math.floor(Math.random() * 15) + 85;

            return {
              id: `CX-${Math.floor(1000 + Math.random() * 9000)}`,
              name: randomName,
              source: randomSource,
              model: randomModel,
              score: randomScore,
              stage: 0,
              timeInStage: 0,
              timestamp: new Date().toLocaleTimeString("en-GB"),
            };
          }
        })
      );
    }, 3200 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const handleAddSyntheticLead = () => {
    soundManager.playTelemetryNode();
    const newPacket: LeadPacket = {
      id: `CX-${Math.floor(1000 + Math.random() * 9000)}`,
      name: "Aditya Singhania",
      source: "High-Intent OEM VIP",
      model: "Mahindra XUV700 AX7L",
      score: 99,
      stage: 0,
      timeInStage: 0,
      timestamp: new Date().toLocaleTimeString("en-GB"),
    };
    setPackets((prev) => [newPacket, ...prev.slice(0, 3)]);
    setSelectedPacket(newPacket);
  };

  return (
    <div className="w-full relative rounded-2xl bg-[#090b10] border border-white/15 p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 tech-grid-dense opacity-30 pointer-events-none" />

      {/* Top Header Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00]">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                LIVE DEALERSHIP ENGINE TELEMETRY
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00f58c]/15 text-[#00f58c] text-[10px] font-mono border border-[#00f58c]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f58c] animate-pulse" />
                ACTIVE 10-MIN PIPELINE
              </span>
            </div>
            <p className="text-[11px] font-mono text-white/50">
              Real-time lead orchestration across OEM DMS, Sales Floor & SIM Telephony
            </p>
          </div>
        </div>

        {/* Simulation Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddSyntheticLead}
            data-cursor="INJECT"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#d4ff00] hover:text-black border border-white/15 text-white text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Inject Test Lead</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setIsPlaying(!isPlaying);
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors"
            aria-label={isPlaying ? "Pause simulation" : "Resume simulation"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#d4ff00]" />}
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setSpeed(speed === 1 ? 2 : 1);
            }}
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-white/70"
          >
            {speed}x SPEED
          </button>
        </div>
      </div>

      {/* Main Multi-Stage Pipeline Track */}
      <div className="py-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const activeCount = packets.filter((p) => p.stage === idx).length;

            return (
              <div
                key={stage.title}
                className={`relative p-3.5 rounded-xl border transition-all duration-300 ${
                  activeCount > 0
                    ? "bg-[#141720] border-[#d4ff00]/40 shadow-lg shadow-[#d4ff00]/5"
                    : "bg-[#0d0f14] border-white/5 opacity-60"
                }`}
              >
                {/* Stage Index Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-white/40">0{idx + 1}</span>
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="font-mono font-bold text-xs text-white tracking-tight mb-0.5 truncate">
                  {stage.title}
                </div>
                <div className="text-[10px] font-mono text-white/50 truncate mb-3">
                  {stage.subtitle}
                </div>

                {/* Packet Badges inside this Stage */}
                <div className="min-h-[52px] flex flex-col gap-1.5">
                  <AnimatePresence>
                    {packets
                      .filter((p) => p.stage === idx)
                      .map((packet) => (
                        <motion.div
                          key={packet.id}
                          layoutId={packet.id}
                          initial={{ opacity: 0, scale: 0.8, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          onClick={() => {
                            soundManager.playClick();
                            setSelectedPacket(packet);
                          }}
                          data-cursor="INSPECT"
                          className={`p-2 rounded-lg cursor-pointer border text-left transition-all ${
                            selectedPacket?.id === packet.id
                              ? "bg-[#d4ff00] text-black border-[#d4ff00] shadow-md font-semibold"
                              : "bg-white/10 text-white border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="truncate max-w-[85px]">{packet.name}</span>
                            <span
                              className={`text-[9px] px-1 rounded font-bold ${
                                selectedPacket?.id === packet.id
                                  ? "bg-black text-[#d4ff00]"
                                  : "bg-[#00f58c]/20 text-[#00f58c]"
                              }`}
                            >
                              {packet.score}
                            </span>
                          </div>
                          <div className="text-[9px] font-mono opacity-70 truncate mt-0.5">
                            {packet.model}
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-Time Selected Lead Telemetry Box */}
      {selectedPacket && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 p-4 rounded-xl bg-[#12151d] border border-white/10 relative z-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4ff00]">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-white">
                    {selectedPacket.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#d4ff00] bg-[#d4ff00]/10 px-2 py-0.5 rounded border border-[#d4ff00]/20">
                    AI Lead Score: {selectedPacket.score}/100
                  </span>
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">
                    {selectedPacket.id}
                  </span>
                </div>
                <div className="text-xs font-mono text-white/60 flex items-center gap-4 mt-0.5">
                  <span>Interest: <strong className="text-white">{selectedPacket.model}</strong></span>
                  <span>•</span>
                  <span>Origin: <strong className="text-white">{selectedPacket.source}</strong></span>
                  <span>•</span>
                  <span className="text-[#00f58c]">Response Latency: 11 mins</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00f58c]" />
                <span>Next Action: Auto-Escalation in 18m</span>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 font-bold uppercase text-[10px]">
                {STAGES[selectedPacket.stage].title}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
