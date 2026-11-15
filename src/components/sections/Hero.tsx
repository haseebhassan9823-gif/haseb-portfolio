"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal as TerminalIcon, FileText, Send, ChevronRight } from "lucide-react";
import HeroScene from "../canvas/HeroScene";
import MagneticButton from "../ui/MagneticButton";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

const TITLES = [
  "Computer Science Student @ UOS",
  "Advanced Python Developer",
  "Desktop Voice Agent Architect",
  "Prompt Engineering Researcher",
  "IELTS Certified Instructor (7.0 Bands)",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for cycling roles
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const updateRate = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, updateRate);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToWork = () => {
    soundManager.playClick();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-8"
    >
      {/* 3D Scene Background Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Cyber Background Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-transparent to-[#050507] pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto flex flex-col items-start justify-center">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
          <span className="font-mono text-xs text-gray-300 tracking-wider">
            SYSTEM ONLINE // BS CS @ UNIVERSITY OF SARGODHA
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan font-mono border border-cyber-cyan/30">
            SARGODHA, PK
          </span>
        </motion.div>

        {/* Staggering Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2 max-w-4xl"
        >
          <div className="font-mono text-sm sm:text-base text-cyber-cyan font-semibold tracking-wider uppercase mb-1">
            &lt;HELLO WORLD /&gt;
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05]">
            HI, I&apos;M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-[#a855f7] to-cyber-violet">
              HASEEB
            </span>{" "}
            HASSAN.
          </h1>

          {/* Dynamic Role Subheading with Typewriter */}
          <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gray-300 pt-2 min-h-[44px]">
            <span className="text-cyber-cyan">&gt;</span>
            <span className="text-white">{displayText}</span>
            <span className="w-0.5 h-6 bg-cyber-cyan animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed font-sans"
        >
          Computer Science Student at University of Sargodha | Software Developer & Creative Technologist based in Sargodha, Pakistan.
          Architecting desktop voice automation agents, enterprise database workflows, and cutting-edge prompt engineering frameworks.
        </motion.p>

        {/* Dual Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA: Explore Work */}
          <MagneticButton
            onClick={scrollToWork}
            variant="primary"
            cursorText="EXPLORE"
            className="!px-7 !py-4 text-sm font-semibold tracking-wider uppercase"
          >
            <span>Explore Work</span>
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>

          {/* Secondary CTA: Get in Touch */}
          <MagneticButton
            href="mailto:haseebhassan982@gmail.com"
            variant="secondary"
            cursorText="EMAIL"
            className="!px-7 !py-4 text-sm font-semibold tracking-wider uppercase"
          >
            <Send className="w-4 h-4 text-cyber-violet" />
            <span>Get in Touch</span>
          </MagneticButton>

          {/* Direct Email Badge */}
          <a
            href="#contact"
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyber-cyan transition-colors px-4 py-3"
          >
            <FileText className="w-4 h-4" />
            <span>DISPATCH TRANSMISSION</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Bottom Telemetry & Metrics Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-20 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-1">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xs font-mono text-cyber-cyan">
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span className="font-mono text-xs text-gray-400 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToWork}
          className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-400 hover:text-cyber-cyan transition-colors group select-none"
        >
          <span>DISCOVER ARTIFACTS</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyber-cyan group-hover:translate-y-1 transition-all">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
