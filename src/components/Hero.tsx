import React from "react";
import { ArrowRight, Download, Terminal, Code, Cpu, Palette, GitBranch, Layers, Flame } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  const skills = [
    { name: "React", icon: Cpu, color: "text-sky-500", bg: "bg-sky-50 dark:bg-sky-950/30" },
    { name: "TypeScript", icon: Code, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30" },
    { name: "Tailwind CSS", icon: Palette, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-950/30" },
    { name: "Next.js", icon: Layers, color: "text-black dark:text-white", bg: "bg-zinc-100 dark:bg-zinc-800/50" },
    { name: "Git & GitHub", icon: GitBranch, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30" },
    { name: "Performance", icon: Flame, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
  ];

  // Code editor lines simulation for the interactive visual card
  const codeSnippet = [
    { line: 1, text: "import { useState } from 'react';", color: "text-purple-400" },
    { line: 2, text: "import { motion } from 'motion/react';", color: "text-purple-400" },
    { line: 3, text: "", color: "" },
    { line: 4, text: "export function WebkingifApp() {", color: "text-blue-405" },
    { line: 5, text: "  const [active, setActive] = useState(true);", color: "text-sky-400" },
    { line: 6, text: "  return (", color: "text-gray-300" },
    { line: 7, text: "    <div className='bg-primaryDark text-cleanWhite px-6 py-4'>", color: "text-emerald-400" },
    { line: 8, text: "      <motion.h1 animate={{ opacity: 2 }}>", color: "text-pink-400" },
    { line: 9, text: "        Hello, Idowu Oluwafemi Femi!", color: "text-yellow-200 font-medium" },
    { line: 10, text: "      </motion.h1>", color: "text-pink-400" },
    { line: 11, text: "    </div>", color: "text-emerald-400" },
    { line: 12, text: "  );", color: "text-gray-300" },
    { line: 13, text: "}", color: "text-blue-405" }
  ];

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:py-12 lg:py-20 bg-neutralLight dark:bg-[#0F172A] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Core content, titles and buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <Reveal delay={0}>
            <div className="space-y-6 sm:space-y-8 flex flex-col items-start">
              {/* Sub-badge indicating availability status */}
              <div className="inline-flex items-center gap-2.5 bg-accentBlue/8 text-accentBlue dark:text-[#38BDF8] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans border border-accentBlue/5 dark:border-[#38BDF8]/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0077D3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0077D3]"></span>
                </span>
                Available for Freelance & Full-time
              </div>

              {/* Heading with Brand color mapping */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primaryDark dark:text-cleanWhite leading-[1.1]">
                Crafting High-Performance <span className="text-accentBlue relative">
                  User Interfaces
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-accentBlue/10 -z-10 rounded-full"></span>
                </span>
              </h1>

              {/* Intro paragraph with clean color and metrics weight */}
              <p className="max-w-xl text-base sm:text-lg text-mutedGray dark:text-gray-400 leading-relaxed font-sans">
                Hi, I'm <strong className="text-primaryDark dark:text-cleanWhite font-semibold">Idowu Femi</strong>. As a frontend developer, I bridge the gap between clean code and exceptional user experiences.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  id="hero-cta-view-work"
                  onClick={handleScrollToProjects}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accentBlue hover:bg-accentBlue/90 active:scale-[0.98] text-cleanWhite px-7 py-3.5 rounded-xl font-sans font-bold text-base shadow-lg shadow-accentBlue/20 transition-all cursor-pointer"
                >
                  View My Work
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  id="hero-cta-download-resume"
                  href="https://webkingif.github.io/WebkingifPortfolioAsset/files/resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cleanWhite dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-accentBlue/30 dark:hover:border-accentBlue/40 hover:bg-neutralLight dark:hover:bg-slate-700/80 text-primaryDark dark:text-cleanWhite px-7 py-3.5 rounded-xl font-sans font-semibold text-base transition-all focus:ring-2 focus:ring-accentBlue/20"
                  download
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>

              </div>

              {/* Horizontal row showcasing core technologies */}
              <div className="w-full pt-6 border-t border-gray-200 dark:border-slate-800 space-y-4">
                <h2 className="text-xs uppercase tracking-wider font-bold text-mutedGray dark:text-gray-400 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-accentBlue" />
                  Primary Core Technologies & Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        id={`hero-skill-badge-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 bg-cleanWhite dark:bg-[#1E293B] border border-gray-200 dark:border-slate-805 rounded-xl px-3 py-1.5 shadow-sm hover:border-accentBlue/30 hover:shadow dark:hover:border-accentBlue/40 transition-all duration-200"
                      >
                        <div className={`p-1 rounded-lg ${skill.bg}`}>
                          <IconComponent className={`h-3.5 w-3.5 ${skill.color}`} />
                        </div>
                        <span className="font-sans font-semibold text-xs text-primaryDark dark:text-[#F1F5F9]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Visual elegant representation / Modern IDE Mockup */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <Reveal delay={0.25}>
            <div className="relative w-full max-w-lg aspect-auto">

              {/* Visual background ambient glowing decoration */}
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-accentBlue/10 rounded-full filter blur-3xl opacity-70 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-400/10 rounded-full filter blur-3xl opacity-60 -z-10"></div>

              {/* Simulated Desktop window with active codes */}
              <div className="w-full rounded-2xl bg-[#0B0F13] border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs text-gray-400">

                {/* Card top OS Bar */}
                <div className="flex items-center justify-between bg-[#11161B] px-4 py-3 border-b border-gray-850">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="font-sans font-medium text-xs text-mutedGray">
                    src/components/WebkingifApp.tsx
                  </div>
                  <div className="h-4 w-4"></div>
                </div>

                {/* Card sidebar panel mockup & Active editor */}
                <div className="flex min-h-75">
                  {/* Visual directory tree view (collapsed) */}
                  <div className="hidden sm:flex flex-col gap-2.5 bg-[#090C0F] w-12 border-r border-gray-850 py-4 items-center text-gray-650">
                    <Code className="h-4 w-4 text-accentBlue" />
                    <Layers className="h-4 w-4 hover:text-gray-400 transition-colors" />
                    <Cpu className="h-4 w-4 hover:text-gray-400 transition-colors" />
                    <GitBranch className="h-4 w-4 hover:text-gray-400 transition-colors" />
                  </div>

                  {/* Main Code block */}
                  <div className="flex-1 p-5 overflow-x-auto text-left leading-relaxed">
                    {codeSnippet.map((code) => (
                      <div key={code.line} className="flex gap-4">
                        <span className="text-gray-600 w-4 select-none text-right">{code.line}</span>
                        <pre className={`${code.color} whitespace-pre`}>{code.text}</pre>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status footer inside card */}
                <div className="bg-[#090C0F] border-t border-gray-850 px-4 py-2 flex justify-between items-center text-[10px] text-gray-500 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                    <span>ESLint: Passing</span>
                  </div>
                  <div>UTF-8 &bull; React v19</div>
                </div>

              </div>

              {/* Dynamic decorative hover preview tag label */}
              <div className="absolute -bottom-4 -left-3 bg-cleanWhite dark:bg-[#1E293B] border border-gray-150 dark:border-slate-800 rounded-xl px-4.5 py-2.5 shadow-md flex items-center gap-2.5 transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                <div className="h-7 w-7 bg-green-100 dark:bg-green-950/40 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 font-mono text-xs font-bold">
                  99
                </div>
                <div className="font-sans">
                  <div className="text-[10px] uppercase font-bold text-mutedGray dark:text-gray-450 leading-none">Speed Index</div>
                  <div className="text-xs font-extrabold text-primaryDark dark:text-cleanWhite">Perfect core score</div>
                </div>
              </div>

              {/* Mobile layout badge decoration */}
              <div className="absolute -top-4 -right-3 bg-cleanWhite dark:bg-[#1E293B] border border-gray-150 dark:border-slate-800 rounded-xl px-4 py-2 shadow-md flex items-center gap-2 transform rotate-2 hover:rotate-0 transition-transform duration-200">
                <span className="text-accentBlue text-xs">🚀</span>
                <span className="font-sans font-bold text-xs text-primaryDark dark:text-cleanWhite">Responsive</span>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
