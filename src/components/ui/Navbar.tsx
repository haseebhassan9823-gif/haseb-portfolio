"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { soundManager } from "@/utils/soundEffects";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(soundManager.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          onMouseEnter={() => soundManager.playHover()}
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-violet/20 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyber-cyan/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <span className="font-display font-extrabold text-sm tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
              MHH
            </span>
            <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:flex flex-col justify-center">
            <span className="font-display font-bold text-sm tracking-wider text-white leading-snug">
              MUHAMMAD HASEEB HASSAN
            </span>
            <span className="font-mono text-[9px] text-gray-400 flex items-center gap-1.5 leading-none mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse shrink-0" />
              CS @ UNIV OF SARGODHA // SOFTWARE DEV
            </span>
          </div>
        </a>

        {/* Center Floating Nav Dock */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.03] backdrop-blur-md border border-white/5"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                onMouseEnter={() => soundManager.playHover()}
                className={`relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-violet/20 border border-cyber-cyan/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Sound Toggle & Quick Action */}
        <div className="flex items-center gap-3">
          {/* Sound FX Toggle Button */}
          <button
            onClick={handleAudioToggle}
            className="relative p-2.5 rounded-full bg-[#111118]/80 border border-white/10 hover:border-cyber-cyan/50 text-gray-300 hover:text-cyber-cyan transition-all duration-200 backdrop-blur-md"
            title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
            aria-label="Toggle Sound Effects"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gray-500" />
            ) : (
              <div className="flex items-center gap-1">
                <Volume2 className="w-4 h-4 text-cyber-cyan" />
                <span className="hidden xl:flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                  <span className="w-0.5 h-3 bg-cyber-cyan rounded-full animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse delay-150" />
                </span>
              </div>
            )}
          </button>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>OPEN TO WORK // SARGODHA, PK</span>
          </div>

          {/* Quick CTA */}
          <MagneticButton
            href="#contact"
            variant="primary"
            className="!px-4 !py-2 !text-xs font-semibold"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 p-4 rounded-2xl bg-[#0a0a0f]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-cyber-cyan hover:bg-white/5 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <Sparkles className="w-3.5 h-3.5 opacity-40 text-cyber-cyan" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
