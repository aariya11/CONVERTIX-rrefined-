"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../lib/sound";

export function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(soundManager.isEnabled());
  }, []);

  const handleToggle = () => {
    const newState = soundManager.toggle();
    setEnabled(newState);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? "Mute audio feedback" : "Enable tactile audio feedback"}
      data-cursor="AUDIO"
      className="relative group p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#d4ff00] transition-colors flex items-center gap-1.5 text-xs font-mono"
    >
      {enabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#d4ff00]" />
          <span className="hidden sm:inline text-[10px] text-[#d4ff00]">AUDIO ON</span>
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4ff00]"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[10px] text-white/40">AUDIO OFF</span>
        </>
      )}
    </button>
  );
}
