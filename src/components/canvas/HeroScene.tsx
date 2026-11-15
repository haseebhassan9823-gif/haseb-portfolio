"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Interactive Cyber Particle Field
function ParticleField({ count = 1800, color = "#00f0ff" }: { count?: number; color?: string }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, originalPositions, scales } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    const sc = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = THREE.MathUtils.randFloat(4, 22);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;

      sc[i] = Math.random() * 2 + 0.5;
    }
    return { positions: pos, originalPositions: orig, scales: sc };
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle overall rotation
    pointsRef.current.rotation.y = time * 0.05 + mouseRef.current.x * 0.3;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.2 + mouseRef.current.y * 0.2;

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i += 4) {
      const i3 = i * 3;
      posArray[i3 + 1] = originalPositions[i3 + 1] + Math.sin(time * 1.5 + originalPositions[i3]) * 0.3;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Geometric Cyber Core Artifact
function CyberCore({ theme }: { theme: "cyan" | "violet" | "emerald" }) {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerWireRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Group>(null!);
  const ringRef2 = useRef<THREE.Group>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });

  const posX = viewport.width > 9 ? viewport.width * 0.22 : 0;
  const posY = viewport.width > 9 ? 0.2 : -0.2;

  const colors = {
    cyan: { primary: "#00f0ff", glow: "#7000ff", wire: "#00f0ff" },
    violet: { primary: "#7000ff", glow: "#ff007f", wire: "#a855f7" },
    emerald: { primary: "#00f59b", glow: "#00f0ff", wire: "#10b981" },
  }[theme];

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, t * 0.25 + mouseRef.current.y * 0.5, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, t * 0.35 + mouseRef.current.x * 0.5, 0.05);
    }

    if (outerWireRef.current) {
      outerWireRef.current.rotation.x = -t * 0.2;
      outerWireRef.current.rotation.y = -t * 0.15;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.4;
      ringRef1.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.5) * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -t * 0.3;
      ringRef2.current.rotation.y = Math.PI / 3 + Math.cos(t * 0.4) * 0.2;
    }
  });

  return (
    <group position={[posX, posY, 0]}>
      {/* Dynamic Floating Container */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Inner Distorted Core */}
        <mesh ref={meshRef} scale={1.15}>
          <icosahedronGeometry args={[1.1, 2]} />
          <MeshDistortMaterial
            color={colors.primary}
            emissive={colors.glow}
            emissiveIntensity={0.55}
            roughness={0.18}
            metalness={0.9}
            distort={0.36}
            speed={2.2}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh ref={outerWireRef} scale={1.55}>
          <dodecahedronGeometry args={[1.2, 0]} />
          <meshBasicMaterial
            color={colors.wire}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbiting Quantum Rings */}
        <group ref={ringRef1}>
          <mesh>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshBasicMaterial color={colors.primary} transparent opacity={0.6} />
          </mesh>
        </group>

        <group ref={ringRef2}>
          <mesh>
            <torusGeometry args={[3.1, 0.015, 16, 100]} />
            <meshBasicMaterial color={colors.glow} transparent opacity={0.5} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

// Ground Cyber Grid
function CyberGrid() {
  const gridRef = useRef<THREE.GridHelper>(null!);

  useFrame((state) => {
    if (!gridRef.current) return;
    const t = state.clock.getElapsedTime();
    gridRef.current.position.z = (t * 0.8) % 2;
  });

  return (
    <group position={[0, -4, 0]}>
      <gridHelper
        ref={gridRef}
        args={[40, 40, "#00f0ff", "#181824"]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

export default function HeroScene() {
  const [theme, setTheme] = useState<"cyan" | "violet" | "emerald">("cyan");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="absolute inset-0 bg-[#050507] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1, 7.5], fov: 45, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={["#050507"]} />
        <fog attach="fog" args={["#050507", 8, 24]} />

        {/* Ambient & Directional Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -5, -5]} intensity={1.2} color="#7000ff" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />

        {/* Particle Nebula */}
        <ParticleField count={1600} color={theme === "cyan" ? "#00f0ff" : theme === "violet" ? "#a855f7" : "#00f59b"} />

        {/* 3D Geometric Core */}
        <CyberCore theme={theme} />

        {/* Floor Grid */}
        <CyberGrid />
      </Canvas>

      {/* Floating 3D Theme Switcher Micro-UI */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0d]/80 border border-white/10 backdrop-blur-md text-xs font-mono text-gray-400">
        <span className="hidden sm:inline text-[11px] text-gray-500 uppercase tracking-wider">Shader Mode:</span>
        <button
          onClick={() => setTheme("cyan")}
          className={`w-3.5 h-3.5 rounded-full transition-all ${
            theme === "cyan" ? "bg-[#00f0ff] ring-2 ring-[#00f0ff]/50 scale-110" : "bg-[#00f0ff]/30 hover:bg-[#00f0ff]/70"
          }`}
          title="Electric Cyan"
        />
        <button
          onClick={() => setTheme("violet")}
          className={`w-3.5 h-3.5 rounded-full transition-all ${
            theme === "violet" ? "bg-[#7000ff] ring-2 ring-[#7000ff]/50 scale-110" : "bg-[#7000ff]/30 hover:bg-[#7000ff]/70"
          }`}
          title="Cyber Violet"
        />
        <button
          onClick={() => setTheme("emerald")}
          className={`w-3.5 h-3.5 rounded-full transition-all ${
            theme === "emerald" ? "bg-[#00f59b] ring-2 ring-[#00f59b]/50 scale-110" : "bg-[#00f59b]/30 hover:bg-[#00f59b]/70"
          }`}
          title="Neon Emerald"
        />
      </div>
    </div>
  );
}
