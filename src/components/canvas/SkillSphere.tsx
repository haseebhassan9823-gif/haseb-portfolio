"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { soundManager } from "@/utils/soundEffects";

const SKILL_NODES = [
  { name: "Python", color: "#00f0ff", phi: 0.3, theta: 0.5 },
  { name: "Java & OOP", color: "#f89820", phi: 1.1, theta: 1.8 },
  { name: "SQL & DB", color: "#00f59b", phi: 2.1, theta: 2.9 },
  { name: "Voice Agent", color: "#7000ff", phi: 0.8, theta: 3.4 },
  { name: "Prompt Eng", color: "#ff007f", phi: 1.8, theta: 4.8 },
  { name: "IELTS 7.0", color: "#ffd166", phi: 2.5, theta: 0.9 },
  { name: "JavaScript", color: "#f7df1e", phi: 1.5, theta: 3.1 },
  { name: "HTML & CSS", color: "#e34f26", phi: 0.5, theta: 5.6 },
  { name: "React", color: "#61dafb", phi: 2.2, theta: 5.2 },
  { name: "Git / GitHub", color: "#38bdf8", phi: 1.2, theta: 0.2 },
];

function OrbitingNode({
  name,
  color,
  position,
  onHover,
}: {
  name: string;
  color: string;
  position: [number, number, number];
  onHover: (name: string | null) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => {
          setHovered(true);
          onHover(name);
          soundManager.playHover();
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <sphereGeometry args={[hovered ? 0.15 : 0.09, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <Html distanceFactor={10} center zIndexRange={[100, 0]}>
        <div
          onMouseEnter={() => {
            setHovered(true);
            onHover(name);
            soundManager.playHover();
          }}
          onMouseLeave={() => {
            setHovered(false);
            onHover(null);
          }}
          className={`pointer-events-auto px-2 py-0.5 rounded-full text-[10px] font-mono whitespace-nowrap border transition-all duration-200 select-none ${
            hovered
              ? "bg-[#0a0a0d] border-cyber-cyan text-white shadow-[0_0_12px_rgba(0,240,255,0.6)] scale-110"
              : "bg-[#0a0a0d]/70 border-white/10 text-gray-300 backdrop-blur-sm"
          }`}
          style={{
            borderColor: hovered ? color : "rgba(255,255,255,0.12)",
          }}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

function SphereContent({ onHover }: { onHover: (name: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerSphereRef = useRef<THREE.Mesh>(null!);
  const radius = 2.2;

  const nodePositions = useMemo(() => {
    return SKILL_NODES.map((node) => {
      const x = radius * Math.sin(node.phi) * Math.cos(node.theta);
      const y = radius * Math.cos(node.phi);
      const z = radius * Math.sin(node.phi) * Math.sin(node.theta);
      return { ...node, pos: [x, y, z] as [number, number, number] };
    });
  }, [radius]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -t * 0.1;
      innerSphereRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Inner Hologram Sphere */}
        <mesh ref={innerSphereRef}>
          <icosahedronGeometry args={[radius * 0.75, 2]} />
          <meshBasicMaterial
            color="#7000ff"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Outer Orbit Line */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[radius * 1.05, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
        </mesh>

        {/* Skill Nodes */}
        {nodePositions.map((node, i) => (
          <OrbitingNode
            key={i}
            name={node.name}
            color={node.color}
            position={node.pos}
            onHover={onHover}
          />
        ))}
      </group>
    </Float>
  );
}

export default function SkillSphere() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center bg-[#07070a]">
        <div className="w-8 h-8 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[340px] md:h-[380px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#050508] border border-white/5 flex items-center justify-center">
      {/* Dynamic Status Tag */}
      <div className="absolute top-3 left-4 z-10 font-mono text-[11px] text-gray-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
        <span className="text-gray-300">SPATIAL SKILL CORE</span>
        {activeSkill && (
          <span className="text-cyber-cyan font-semibold">[{activeSkill}]</span>
        )}
      </div>

      <div className="absolute bottom-3 right-4 z-10 font-mono text-[10px] text-gray-500">
        INTERACTIVE 3D • DRAG & ROTATE
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#7000ff" />
        <SphereContent onHover={setActiveSkill} />
      </Canvas>
    </div>
  );
}
