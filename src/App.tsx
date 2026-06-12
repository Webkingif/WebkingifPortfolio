import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { Code, Sparkles, FolderGit2 } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -30% 0px", // More robust viewport range to handle active tab changes of scrolling events
          threshold: 0.1,
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Precise height allowance for the fixed navigation header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutralLight dark:bg-[#0F172A] text-primaryDark dark:text-cleanWhite selection:bg-accentBlue/20 font-sans transition-colors duration-300">
      {/* Interactive sticky Navigation header */}
      <Navigation activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="pt-16 md:pt-20">
        {/* Home / Hero Section */}
        <Hero />

        {/* About Section Divider & View */}
        <section
          id="about"
          className="py-24 bg-cleanWhite dark:bg-[#0F172A] border-y border-gray-100 dark:border-slate-805 scroll-mt-20 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* About Head Section wrapped in Reveal */}
            <Reveal>
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primaryDark dark:text-cleanWhite">
                  About Me
                </h2>
                <div className="h-1.5 w-16 bg-accentBlue mx-auto rounded-full"></div>
                <p className="text-mutedGray dark:text-gray-400 font-sans text-base leading-relaxed">
                  I design and write premium Web solutions that balance absolute structural integrity and outstanding visual presentation. Here are my core guidelines and tenets of production.
                </p>
              </div>
            </Reveal>

            {/* Core Values Cards wrapped with staggered reveal times */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

              {/* Card 1 */}
              <Reveal delay={0.1}>
                <div className="bg-neutralLight dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100/80 dark:border-slate-800 hover:shadow-md transition-all duration-300 group h-full">
                  <div className="h-12 w-12 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primaryDark dark:text-cleanWhite mb-3">Clean Architecture</h3>
                  <p className="text-mutedGray dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    Highly modular, well-typed functional components backed by strict code hygiene standards and reusable utility configurations.
                  </p>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={0.25}>
                <div className="bg-neutralLight dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100/80 dark:border-slate-800 hover:shadow-md transition-all duration-300 group h-full">
                  <div className="h-12 w-12 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primaryDark dark:text-cleanWhite mb-3">Premium Interfaces</h3>
                  <p className="text-mutedGray dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    Carefully tuned typography hierarchies, responsive layouts built with Tailwind CSS, and elegant micro-interactions using Framer Motion.
                  </p>
                </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal delay={0.4}>
                <div className="bg-neutralLight dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100/80 dark:border-slate-800 hover:shadow-md transition-all duration-300 group h-full">
                  <div className="h-12 w-12 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primaryDark dark:text-cleanWhite mb-3">Performant Output</h3>
                  <p className="text-mutedGray dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    Optimized assets, fast interactivity scales, semantic structure prioritizing accessibility standards, and SEO friendliness.
                  </p>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
