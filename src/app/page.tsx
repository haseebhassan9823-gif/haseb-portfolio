import Hero from "@/components/sections/Hero";
import AboutBento from "@/components/sections/AboutBento";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden bg-[#050507]">
      {/* Background Cyber Grid lines */}
      <div className="fixed inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-40 z-0" />

      {/* Hero Section */}
      <Hero />

      {/* Bento Grid About & Skills Section */}
      <AboutBento />

      {/* Featured Projects / Case Studies Showcase */}
      <Projects />

      {/* Experience & Timeline */}
      <Experience />

      {/* Contact & Footer */}
      <Contact />
    </div>
  );
}
