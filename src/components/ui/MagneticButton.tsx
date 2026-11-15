"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { soundManager } from "@/utils/soundEffects";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  cursorText?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  cursorText,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Pull factor
    setPosition({ x: distanceX * 0.28, y: distanceY * 0.28 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    soundManager.playClick();
    if (onClick) onClick();
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyber-cyan to-[#00b4d8] text-[#050507] font-semibold shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] border border-cyber-cyan/40",
    secondary:
      "bg-[#111118]/80 text-white border border-white/10 hover:border-cyber-violet/60 hover:shadow-[0_0_25px_rgba(112,0,255,0.3)] backdrop-blur-md",
    outline:
      "bg-transparent text-gray-200 border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]",
    ghost:
      "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  }[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => soundManager.playHover()}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      data-cursor-text={cursorText}
      className={`relative inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 select-none cursor-pointer overflow-hidden group ${variantStyles} ${className}`}
    >
      {/* Subtle shine sweep on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
