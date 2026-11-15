"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Zap } from "lucide-react";
import CardTilt from "../ui/CardTilt";
import ProjectModal from "../ui/ProjectModal";
import MagneticButton from "../ui/MagneticButton";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

const CATEGORIES = ["All", "Voice AI & Python", "Full-Stack Software", "Gaming & Esports", "AI & Prompt Eng"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED WORKS // DEPLOYED ARTIFACTS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-[#a855f7] to-cyber-violet">PROJECTS</span>.
          </h2>
          <p className="text-gray-400 max-w-xl text-base">
            Applied software engineering across desktop voice automation, clinical hospital administration suites,
            competitive esports tournament engines, and advanced prompt architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0c0c14] border border-white/10 self-start md:self-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 select-none ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyber-cyan/30 to-cyber-violet/30 text-white border border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with 3D Tilt Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <CardTilt
                cursorText="INSPECT"
                onClick={() => setActiveProject(project)}
                className="group h-full bg-[#0a0a0f] border border-white/10 hover:border-cyber-cyan/50 hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)] flex flex-col justify-between cursor-pointer transition-all duration-300"
                glareColor={project.accentColor}
              >
                {/* Project Image & Badge Preview */}
                <div className="relative h-56 w-full overflow-hidden bg-[#07070a]">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

                  {/* Top Floating Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono border backdrop-blur-md"
                      style={{
                        borderColor: `${project.accentColor}60`,
                        color: project.accentColor,
                        backgroundColor: "#050508bb",
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-gray-300 bg-black/60 px-2 py-1 rounded-md backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Corner Inspection Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-gray-300 group-hover:text-cyber-cyan group-hover:border-cyber-cyan transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyber-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block font-mono text-[9px] text-gray-500 uppercase">
                          {m.label}
                        </span>
                        <span className="font-display font-bold text-sm text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-gray-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1 text-[11px] text-cyber-cyan group-hover:underline">
                    <span>Inspect Architecture</span>
                  </span>
                  <span className="text-[10px] text-gray-500">60 FPS VERIFIED</span>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
