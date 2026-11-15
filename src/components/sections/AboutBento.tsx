"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Boxes,
  Zap,
  Award,
  ShieldCheck,
  Terminal as TerminalIcon,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import CardTilt from "../ui/CardTilt";
import SkillSphere from "../canvas/SkillSphere";
import Terminal from "../ui/Terminal";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

export default function AboutBento() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CAPABILITY MATRIX // BENTO ARCHITECTURE</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          ACADEMIC &amp; TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-violet">FOUNDATIONS</span>.
        </h2>
        <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
          Merging rigorous Computer Science theory from the University of Sargodha with hands-on software development,
          Python voice agent architecture, and global communication excellence.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* BENTO CARD 1: Core Bio & Philosophy (Spans 2 cols) */}
        <CardTilt
          className="md:col-span-2 p-8 bg-[#0a0a0f] border border-white/10 flex flex-col justify-between"
          glareColor="rgba(0, 240, 255, 0.2)"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase">
                ACADEMIC &amp; ENGINEERING DOCTRINE
              </span>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyber-cyan">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Software Systems &amp; AI Integration
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Based in Sargodha, Pakistan, I am pursuing my Bachelor of Science in Computer Science at the
              prestigious University of Sargodha. My engineering passion centers on writing clean, efficient
              Python code, building multi-threaded desktop voice automation agents, and structuring robust SQL database systems.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Beyond pure software engineering, I conduct R&amp;D into prompt architecture and autonomous reasoning pipelines,
              and serve as an IELTS instructor, leveraging certified 7.0 Bands communication to bridge technical complexity with human clarity.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyber-emerald" />
              <span>BS CS @ Univ of Sargodha</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyber-cyan" />
              <span>Python Voice AI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyber-violet" />
              <span>IELTS 7.0 Bands</span>
            </div>
          </div>
        </CardTilt>

        {/* BENTO CARD 2: 3D Interactive Spatial Skill Core (Spans 2 cols) */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] p-1 flex flex-col">
          <SkillSphere />
        </div>

        {/* BENTO CARD 3: Stats Counter Matrix (Spans 1 col on lg, 2 on md) */}
        <CardTilt
          className="md:col-span-1 lg:col-span-1 p-6 bg-[#0a0a0f] border border-white/10 flex flex-col justify-between"
          glareColor="rgba(112, 0, 255, 0.25)"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyber-violet uppercase">CREDENTIALS</span>
              <Award className="w-5 h-5 text-cyber-violet" />
            </div>
            <h4 className="font-display font-bold text-lg text-white">Core Highlights</h4>
          </div>

          <div className="my-6 space-y-4">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="font-display font-extrabold text-2xl text-cyber-cyan">7.0 Bands</div>
              <div className="font-mono text-[11px] text-gray-400">IELTS Certified Fluency</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="font-display font-extrabold text-2xl text-white">BS CS</div>
              <div className="font-mono text-[11px] text-gray-400">University of Sargodha</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="font-display font-extrabold text-2xl text-cyber-emerald">&lt; 250ms</div>
              <div className="font-mono text-[11px] text-gray-400">Voice Agent Latency</div>
            </div>
          </div>

          <span className="font-mono text-[10px] text-gray-500">
            AUDITED Q4 2024 BENCHMARKS
          </span>
        </CardTilt>

        {/* BENTO CARD 4: Interactive Tech Stack Radar Tabs (Spans 2 cols on lg) */}
        <div className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl bg-[#0a0a0f] border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase">
                PRODUCTION ARSENAL
              </span>
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.title}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveCategoryIndex(idx);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                      activeCategoryIndex === idx
                        ? "bg-cyber-cyan/20 border border-cyber-cyan/50 text-white font-semibold"
                        : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                    }`}
                  >
                    {cat.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Category Skills with Glowing Progress Bars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-white font-display font-semibold text-sm">
                <Cpu className="w-4 h-4 text-cyber-cyan" />
                <span>{SKILL_CATEGORIES[activeCategoryIndex].title}</span>
              </div>

              <div className="space-y-2.5">
                {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className={skill.highlight ? "text-cyber-cyan font-semibold" : "text-gray-300"}>
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? "bg-gradient-to-r from-cyber-cyan to-cyber-violet shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                            : "bg-gray-600"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
            <span>FOCUS: PYTHON, AI AGENTS, SQL &amp; SOFTWARE ARCHITECTURE</span>
            <span className="text-cyber-cyan">HIGH-PERFORMANCE CODE</span>
          </div>
        </div>

        {/* BENTO CARD 5: Interactive Cyber Terminal (Spans 1 col on lg, 2 on md) */}
        <div id="skills" className="md:col-span-2 lg:col-span-1 flex flex-col">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
