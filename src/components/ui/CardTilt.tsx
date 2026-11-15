"use client";

import React, { useRef, useState, ReactNode } from "react";
import { soundManager } from "@/utils/soundEffects";

interface CardTiltProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  onClick?: () => void;
  cursorText?: string;
}

export default function CardTilt({
  children,
  className = "",
  glareColor = "rgba(0, 240, 255, 0.15)",
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  onClick,
  cursorText,
}: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const rotateX = (percentY - 0.5) * -tiltMaxAngleX * 2;
    const rotateY = (percentX - 0.5) * tiltMaxAngleY * 2;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setGlarePosition({
      x: percentX * 100,
      y: percentY * 100,
      opacity: 1,
    });
  };

  const handleMouseEnter = () => {
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor-text={cursorText}
      style={{
        transform,
        transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.4, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
