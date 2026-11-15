"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Lock,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import CardTilt from "../ui/CardTilt";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

const SERVICE_OPTIONS = [
  "Desktop Voice Agent Architecture",
  "Custom Python Development",
  "Relational SQL Database Systems",
  "Prompt Engineering & AI Workflows",
  "IELTS Mentorship & Instruction",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    budget: "Software Engineering Role",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timePKT, setTimePKT] = useState("");
  const [timeUTC, setTimeUTC] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimePKT(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setTimeUTC(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    soundManager.playClick();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Identification required";
    if (!formData.email.trim()) {
      errs.email = "Return address required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Malformed transmission frequency (invalid email)";
    }
    if (!formData.message.trim()) {
      errs.message = "Payload dispatch cannot be blank";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Payload must exceed 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    soundManager.playTerminalBeep();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundManager.playSuccess();
    }, 1400);
  };

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-4 sm:px-8 border-t border-white/10 bg-[#050508] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyber-violet/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Contact Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECURE COMM CHANNEL // DISPATCH INITIATION</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-violet">COLLABORATION</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Looking for a dedicated software developer, Python voice automation engineer, or IELTS mentorship?
            Dispatch a message below or connect directly at <span className="text-cyber-cyan font-mono">{PERSONAL_INFO.email}</span>.
          </p>
        </div>

        {/* Dual Column Layout: Direct Intel & Interactive Cyber Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Comm Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <CardTilt
              className="p-6 bg-[#0a0a0f] border border-white/10 space-y-3"
              glareColor="rgba(0, 240, 255, 0.15)"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyber-cyan uppercase">
                  DIRECT TRANSMISSION INBOX
                </span>
                <Mail className="w-4 h-4 text-cyber-cyan" />
              </div>
              <div className="text-white font-mono text-sm sm:text-base break-all">
                {PERSONAL_INFO.email}
              </div>
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                      <span className="text-cyber-emerald">COPIED TO BUFFER</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </CardTilt>

            {/* Geographical Base & Availability */}
            <CardTilt
              className="p-6 bg-[#0a0a0f] border border-white/10 space-y-4"
              glareColor="rgba(112, 0, 255, 0.15)"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyber-violet uppercase">
                  OPERATIONAL BASE
                </span>
                <MapPin className="w-4 h-4 text-cyber-violet" />
              </div>
              <div>
                <div className="text-white font-display font-semibold text-lg">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-gray-400 text-xs mt-1 font-mono">
                  {PERSONAL_INFO.status}
                </div>
              </div>

              {/* Live Telemetry Clocks */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-gray-500 block text-[10px]">SARGODHA, PK (PKT)</span>
                  <span className="text-cyber-cyan font-bold">{timePKT || "00:00:00"}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">UTC COORDINATED</span>
                  <span className="text-gray-300 font-bold">{timeUTC || "00:00:00"}</span>
                </div>
              </div>
            </CardTilt>

            {/* Cryptographic Channel Status */}
            <div className="p-5 rounded-2xl bg-[#0a0a0f] border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-cyber-emerald">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-bold">END-TO-END TLS VERIFIED</span>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Transmission channels utilize cryptographic payload integrity. Responses dispatched within 24 hours.
              </p>
            </div>

            {/* Social Signal Badges */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase">
                EXTERNAL FREQUENCIES:
              </span>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.socials.map((social) => {
                  const Icon =
                    social.name === "GitHub"
                      ? Github
                      : social.name === "LinkedIn"
                      ? Linkedin
                      : social.name.includes("Twitter")
                      ? Twitter
                      : MessageSquare;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => soundManager.playHover()}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyber-cyan/50 text-gray-300 hover:text-white transition-all text-xs font-mono"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Terminal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0f] border border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
              {isSubmitted ? (
                /* Success Micro-Interaction State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/40 flex items-center justify-center text-cyber-emerald shadow-[0_0_30px_rgba(0,245,155,0.4)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    TRANSMISSION ACKNOWLEDGED
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md">
                    Payload received and routed to Haseeb&apos;s priority terminal ({PERSONAL_INFO.email}). An encrypted response will dispatch shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: SERVICE_OPTIONS[0],
                          budget: "$20k - $50k",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                    >
                      DISPATCH ANOTHER MESSAGE
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5" />
                      ENCRYPTED DISPATCH TERMINAL
                    </span>
                    <span className="font-mono text-[10px] text-gray-500">READY</span>
                  </div>

                  {/* Service Pillar Selection */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gray-300">
                      SELECT INITIATIVE SCOPE:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_OPTIONS.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => {
                            soundManager.playClick();
                            setFormData({ ...formData, service: svc });
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formData.service === svc
                              ? "bg-cyber-cyan/20 border border-cyber-cyan/60 text-white font-semibold shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                              : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-gray-300">
                        IDENTIFICATION / NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="e.g. Dr. Julian Sterling"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-all ${
                          errors.name
                            ? "border-cyber-pink/80 bg-cyber-pink/5"
                            : "border-white/10 focus:border-cyber-cyan focus:bg-white/[0.05]"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-cyber-pink block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-gray-300">
                        RETURN FREQUENCY / EMAIL *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="julian@firm.co"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-all ${
                          errors.email
                            ? "border-cyber-pink/80 bg-cyber-pink/5"
                            : "border-white/10 focus:border-cyber-cyan focus:bg-white/[0.05]"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-mono text-cyber-pink block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Initiative Scope Selector */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-gray-300">
                      ENGAGEMENT / COLLABORATION TYPE:
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e16] border border-white/10 text-white text-sm focus:outline-none focus:border-cyber-cyan"
                    >
                      <option value="Software Role">Software Developer Role / Internship</option>
                      <option value="Python Automation">Custom Python Desktop Voice Agent / Automation</option>
                      <option value="Hospital System">Enterprise / Clinical Management Software</option>
                      <option value="Esports Platform">Esports / Gaming Tournament Platform</option>
                      <option value="IELTS Mentorship">IELTS Preparation &amp; Instruction (7.0 Bands)</option>
                    </select>
                  </div>

                  {/* Message Payload */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-gray-300">
                      TRANSMISSION PAYLOAD / BRIEF *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Outline the architectural vision, desired timelines, and key technical deliverables..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-cyber-pink/80 bg-cyber-pink/5"
                          : "border-white/10 focus:border-cyber-cyan focus:bg-white/[0.05]"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-mono text-cyber-pink block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-[#00b4d8] text-[#050507] font-semibold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 select-none cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span className="font-mono">ENCRYPTING & DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT PAYLOAD</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Futuristic Copyright & Back to Top Footer Bar */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-white font-bold tracking-wider">
              MUHAMMAD HASEEB HASSAN // © 2024
            </span>
            <span className="hidden sm:inline">•</span>
            <span>BS COMPUTER SCIENCE &bull; UNIVERSITY OF SARGODHA, PAKISTAN</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-cyber-cyan transition-all group"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
