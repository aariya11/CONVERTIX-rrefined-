"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { soundManager } from "../lib/sound";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "amber";
  cursorText?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary",
  cursorText,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 350, damping: 20 });
  const y = useSpring(0, { stiffness: 350, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Subtle magnetic attraction
    x.set(distanceX * 0.22);
    y.set(distanceY * 0.22);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundManager.playClick();
  };

  const variantStyles = {
    primary:
      "bg-white text-black font-semibold hover:bg-[#d4ff00] hover:text-black border border-white/20 shadow-lg shadow-white/5",
    secondary:
      "bg-[#15181e] text-white/90 hover:bg-[#1f242d] hover:text-white border border-white/10",
    ghost:
      "bg-transparent text-white/75 hover:text-white hover:bg-white/5 border border-white/10",
    amber:
      "bg-[#ff5500] text-white font-semibold hover:bg-[#ff6a1f] border border-[#ff5500]/40 shadow-lg shadow-[#ff5500]/15",
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-cursor={cursorText}
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        onClick={(e) => {
          soundManager.playChirp();
          onClick?.();
        }}
        className={`relative group overflow-hidden px-6 py-3 rounded-full text-xs tracking-wider uppercase font-mono transition-colors duration-200 flex items-center justify-center gap-2 ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
        onClick={() => soundManager.playChirp()}
      >
        {content}
      </a>
    );
  }

  return content;
}
