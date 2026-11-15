"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Quote } from "lucide-react";
import { EXPERIENCES, TESTIMONIALS } from "@/data/portfolioData";
import CardTilt from "../ui/CardTilt";
import { soundManager } from "@/utils/soundEffects";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-20 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CHRONOLOGY // ENGINEERING EVOLUTION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          EDUCATION &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-[#a855f7] to-cyber-violet">EXPERIENCE</span>.
        </h2>
        <p className="text-gray-400 max-w-2xl text-base">
          Milestones from the University of Sargodha, hands-on Python voice automation initiatives,
          clinical software engineering, and IELTS instruction.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/10 space-y-14">
        {/* Animated Glowing Progress Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute -left-[1px] top-0 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-violet to-cyber-pink shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        />

        {EXPERIENCES.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  item.current
                    ? "bg-[#050507] border-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.7)]"
                    : "bg-[#0a0a0f] border-white/20 group-hover:border-cyber-violet"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.current ? "bg-cyber-cyan animate-ping" : "bg-white/40"
                  }`}
                />
              </div>
            </div>

            {/* Timeline Card */}
            <CardTilt
              className="p-6 sm:p-8 bg-[#0a0a0f] border border-white/10 group-hover:border-cyber-cyan/40 transition-all duration-300"
              glareColor={item.current ? "rgba(0, 240, 255, 0.15)" : "rgba(112, 0, 255, 0.1)"}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <div className="text-cyber-cyan text-sm sm:text-base font-semibold mt-1">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Narrative */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bulleted Quantifiable Achievements */}
              <div className="mt-4 space-y-2">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  Key Milestones & Architectural Feats:
                </span>
                <ul className="space-y-2">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardTilt>
          </div>
        ))}
      </div>

      {/* Leadership Testimonials */}
      <div className="mt-28 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase">
            ENDORSEMENTS // STAKEHOLDER VERDICTS
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
            What Leaders Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/10 flex flex-col justify-between space-y-6 hover:border-cyber-cyan/30 transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyber-cyan/40" />
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="font-display font-semibold text-sm text-white">
                    {t.author}
                  </div>
                  <div className="font-mono text-[10px] text-gray-400">
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
