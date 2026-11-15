"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import { soundManager } from "@/utils/soundEffects";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CommandLog {
  id: number;
  command: string;
  response: string | React.ReactNode;
}

const INITIAL_LOGS: CommandLog[] = [
  {
    id: 1,
    command: "init system",
    response: "HASEEB_CORE v2.5 online. Computer Science terminal initialized (UOS). Type 'help' for commands.",
  },
];

export default function Terminal() {
  const [logs, setLogs] = useState<CommandLog[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundManager.playTerminalBeep();
    const newLogId = Date.now();

    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-gray-300">
            <p className="text-cyber-cyan font-bold">AVAILABLE PROTOCOLS:</p>
            <p>• <span className="text-white">skills</span> - Print core engineering capability matrix</p>
            <p>• <span className="text-white">projects</span> - Query featured software projects</p>
            <p>• <span className="text-white">education</span> - University of Sargodha academic record</p>
            <p>• <span className="text-white">ielts</span> - Language & communication credentials (7.0 Bands)</p>
            <p>• <span className="text-white">voiceagent</span> - Python Desktop Voice Assistant specs</p>
            <p>• <span className="text-white">bio</span> - Read software developer philosophy</p>
            <p>• <span className="text-white">contact</span> - Direct communication channels</p>
            <p>• <span className="text-white">clear</span> - Flush terminal buffer</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 text-gray-300">
            <p className="text-cyber-cyan font-semibold">CORE CAPABILITIES:</p>
            <p>Python (Advanced / Async / Scripts): [||||||||||||||||||] 96%</p>
            <p>Java & Object-Oriented Design:      [||||||||||||||||] 90%</p>
            <p>SQL & Relational Database Design:    [|||||||||||||||||] 92%</p>
            <p>Desktop Voice Agent Architecture:   [|||||||||||||||||] 94%</p>
            <p>Prompt Engineering & AI Workflows:   [|||||||||||||||||] 95%</p>
            <p>HTML5 / CSS3 / Modern JavaScript:    [|||||||||||||||||] 92%</p>
            <p>IELTS Certified English Fluency:    [||||||||||||||||||] 7.0 Bands</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1 text-gray-300">
            <p className="text-cyber-cyan font-semibold">FEATURED DELIVERABLES:</p>
            <p>1. Python Desktop Voice Agent (Speech Recognition & Automation)</p>
            <p>2. Hospital Management System (Patient Care & Clinical Administration)</p>
            <p>3. PUBG Esports Tournament Engine (Automated Leaderboards & Point Logic)</p>
            <p>4. Prompt Engineering R&D (Structured Few-Shot Prompt Frameworks)</p>
            <p className="text-xs text-gray-500">Scroll down to the Projects section to inspect case studies.</p>
          </div>
        );
        break;

      case "education":
        response = "DEGREE: BS Computer Science @ University of Sargodha, Punjab, Pakistan. Core: Data Structures, OOP, Operating Systems, Database Management Systems, Software Engineering.";
        break;

      case "ielts":
        response = "IELTS OVERALL BAND: 7.0 (C1 Advanced Fluency). Active mentor instructing students across Academic Reading, Writing, Listening & Speaking.";
        break;

      case "voiceagent":
        response = "PYTHON VOICE AGENT: Hands-free desktop automation engine powered by PyAudio, SpeechRecognition, pyttsx3, and AI reasoning. Latency < 250ms.";
        break;

      case "bio":
        response = PERSONAL_INFO.bio;
        break;

      case "contact":
        response = `DIRECT INBOX: ${PERSONAL_INFO.email} | LOCATION: ${PERSONAL_INFO.location}`;
        break;

      case "hire":
        response = "STATUS: OPEN FOR SOFTWARE DEVELOPMENT ROLES & INNOVATIVE PROJECTS. Contact: haseebhassan982@gmail.com";
        break;

      case "matrix":
        response = (
          <p className="text-cyber-emerald animate-pulse font-bold">
            Wake up, Neo... The matrix has you. Shaders operating at maximum quantum resonance.
          </p>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        response = `command not recognized: '${cmd}'. Type 'help' for available system commands.`;
        break;
    }

    setLogs((prev) => [...prev, { id: newLogId, command: inputVal, response }]);
    setInputVal("");
  };

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col rounded-2xl bg-[#09090e] border border-white/10 overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0e16] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-gray-400 text-[11px] ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
            haseeb_cli:~$ bash
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-cyber-cyan">
          <Sparkles className="w-3 h-3" />
          <span>INTERACTIVE SHELL</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar text-gray-300">
        {logs.map((log) => (
          <div key={log.id} className="space-y-1">
            <div className="flex items-center gap-2 text-cyber-cyan">
              <span className="text-gray-500">guest@haseeb:~$</span>
              <span className="text-white font-semibold">{log.command}</span>
            </div>
            <div className="text-gray-400 pl-4 border-l border-white/10">
              {log.response}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={handleCommand}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0c0c14] border-t border-white/10"
      >
        <span className="text-cyber-cyan font-bold">$&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'skills', or 'projects'..."
          className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs font-mono"
        />
        <button
          type="submit"
          className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
