import React from "react";
import { ArrowRight, Download, Terminal, Code, Cpu, GitBranch, Layers } from "lucide-react";
import Reveal from "./Reveal";


async function getSkills() {
  const response = await fetch(
    "https://webkingif.github.io/WebkingifPortfolioAsset/data/skills.json"
  )
  const data: { name: string }[] = await response.json();
  return data;
}
const skills = await getSkills();

export default function Hero() {

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
                    return (
                      <div
                        id={`hero-skill-badge-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 bg-cleanWhite dark:bg-[#1E293B] border border-gray-200 dark:border-slate-805 rounded-xl px-3 py-1.5 shadow-sm hover:border-accentBlue/30 hover:shadow dark:hover:border-accentBlue/40 transition-all duration-200"
                      >
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
          <img src="https://webkingif.github.io/WebkingifPortfolioAsset/images/profile Idowu.png" alt="Idowu Femi's image" />
        </div>
      </div>
    </section>
  );
}