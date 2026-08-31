"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Detect touch devices to avoid intrusive mobile cursors
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor], input, select, textarea");
      if (interactive) {
        setIsHovered(true);
        const cursorText = interactive.getAttribute("data-cursor");
        setLabel(cursorText || null);
      } else {
        setIsHovered(false);
        setLabel(null);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch || !visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        animate={{
          scale: label ? 2.6 : isHovered ? 1.6 : 1,
          backgroundColor: label
            ? "rgba(212, 255, 0, 0.95)"
            : isHovered
            ? "rgba(212, 255, 0, 0.25)"
            : "rgba(255, 255, 255, 0.9)",
          borderColor: isHovered ? "rgba(212, 255, 0, 0.8)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="w-3.5 h-3.5 rounded-full border border-transparent backdrop-blur-[1px] flex items-center justify-center transition-colors"
      >
        {label && (
          <span className="text-[7px] font-mono font-bold tracking-widest text-black uppercase scale-75 select-none">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
