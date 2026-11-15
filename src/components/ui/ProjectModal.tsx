"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Zap, Shield, CheckCircle2, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";
import MagneticButton from "./MagneticButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundManager.playClick();
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      soundManager.playClick();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-[#050507]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c12] border border-white/15 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e0e16]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse" />
              <span className="font-mono text-xs text-gray-400 tracking-wider uppercase">
                CASE STUDY ARCHIVE // {project.year}
              </span>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border"
                style={{
                  borderColor: `${project.accentColor}50`,
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}10`,
                }}
              >
                {project.category}
              </span>
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
            {/* Title & Tagline */}
            <div>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base mt-2 font-sans">
                {project.tagline}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col"
                >
                  <span className="font-mono text-[11px] text-gray-400 uppercase">
                    {metric.label}
                  </span>
                  <span
                    className="font-display font-bold text-xl md:text-2xl mt-1"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Preview Banner */}
            <div className="relative h-60 md:h-80 rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-[#0c0c12]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-xs text-white/80 bg-black/60 px-3 py-1 rounded-md backdrop-blur-md border border-white/10">
                  ROLE: {project.role}
                </span>
              </div>
            </div>

            {/* Narrative Sections: Challenge, Solution, Impact */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyber-pink font-mono text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Architectural Solution</span>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyber-emerald font-mono text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Measurable Impact</span>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Deep Technical Overview */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyber-cyan" />
                Technical Overview & Systems Architecture
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                Engineered With:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#0e0e16]/80 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[11px] text-gray-400">
              SYS_UID: {project.id}
            </span>

            <div className="flex items-center gap-3">
              <MagneticButton
                href={project.githubUrl}
                variant="outline"
                className="!px-4 !py-2 !text-xs"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </MagneticButton>

              <MagneticButton
                href={project.liveUrl}
                variant="primary"
                className="!px-5 !py-2 !text-xs"
              >
                <span>Live Experience</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
