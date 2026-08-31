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

  const springX = useSpring(mouseX, { stiffness: 600, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 30 });

  useEffect(() => {
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
          scale: label ? 2.2 : isHovered ? 1.6 : 1,
          backgroundColor: label
            ? "#e05a2b"
            : isHovered
            ? "transparent"
            : "#f3f1ec",
          borderColor: isHovered ? "rgba(243, 241, 236, 0.6)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="w-2.5 h-2.5 rounded-full border border-transparent flex items-center justify-center transition-colors"
      >
        {label && (
          <span className="text-[6px] font-mono font-bold tracking-widest text-white uppercase scale-90 select-none">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
