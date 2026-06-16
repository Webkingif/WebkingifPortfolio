import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { FaGithub } from "react-icons/fa6";

export interface Project {
  idno: number;
  id: string;
  title: string;
  description: string;
  image: string; // fallback or placeholder identifier
  demoLink: string;
  githubLink: string;
  tags: string[];
  category: "Full-Stack" | "Frontend" | "Mobile-First" | "API / Tooling";
  featured: boolean;
}

async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    "https://webkingif.github.io/WebkingifPortfolioAsset/data/projects.json"
  );

  const data: Project[] = await response.json();

  return data;
}






export function Description({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={`${expanded ? "" : "line-clamp-3"} text-mutedGray dark:text-gray-400 text-sm sm:text-base leading-relaxed`}>
        {text}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    }
    loadProjects();
  }, [])

  return (
    <section
      id="projects"
      className="py-24 bg-neutralLight dark:bg-[#0F172A] scroll-mt-20 border-t border-gray-100 dark:border-slate-805 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primaryDark dark:text-cleanWhite">
              Selected Projects
            </h2>
            <div className="h-1.5 w-16 bg-accentBlue mx-auto rounded-full"></div>
            <p className="text-mutedGray dark:text-gray-400 font-sans text-base sm:text-lg leading-relaxed">
              A curated showcase of clean code, exceptional user experiences, and premium modern frontend performance.
            </p>
          </div>
        </Reveal>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="h-full">
              <Reveal delay={index * 0.15}>
                <article
                  id={`project-card-${project.id}`}
                  className="bg-cleanWhite dark:bg-[#1E293B] rounded-2xl border border-gray-150/75 dark:border-slate-805 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full"
                >

                  {/* Aspect-Ratio Visual Header with hover zoom effect */}
                  <div className="aspect-video relative overflow-hidden bg-primaryDark">
                    {/* {renderProjectVisual(project.id, project.title, project.category)} */}
                    <img src={project.image} alt={project.id} loading="lazy" />

                    {/* Visual Glassmorphic overlay visible on hover */}
                    <div className="absolute inset-0 bg-primaryDark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        id={`project-hover-demo-${project.id}`}
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-cleanWhite text-primaryDark rounded-xl hover:bg-accentBlue hover:text-cleanWhite transition-all shadow-md transform translate-y-3 group-hover:translate-y-0  duration-300"
                        title="Open Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        id={`project-hover-git-${project.id}`}
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-cleanWhite text-primaryDark rounded-xl hover:bg-accentBlue hover:text-cleanWhite transition-all shadow-md transform translate-y-3 group-hover:translate-y-0 duration-300 delay-75"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="h-5 w-5" {...({} as any)} />
                      </a>
                    </div>
                  </div>

                  {/* Card Body Panel */}
                  <div className="p-6 sm:p-8 grow flex flex-col justify-between">

                    <div className="space-y-4">
                      {/* Title Hover State to Accent Blue */}
                      <h3 className="font-display font-extrabold text-xl text-primaryDark dark:text-cleanWhite group-hover:text-accentBlue transition-colors duration-250">
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="focus:outline-none focus:underline decoration-accentBlue">
                          {project.title}
                        </a>
                      </h3>
                      <Description text={project.description} />

                      {/* Badges / Tech Tags of light Accent blue tinted background */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans font-semibold text-xs text-accentBlue dark:text-sky-400 bg-accentBlue/8 dark:bg-accentBlue/15 px-3 py-1 rounded-lg border border-accentBlue/5 dark:border-accentBlue/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Links Panel */}
                    <div className="pt-8 mt-6 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-sm">
                      <a
                        id={`project-footer-demo-${project.id}`}
                        href={project.demoLink}
                        target="_blank"
                        aria-label={`Open live demo for ${project.title}`}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-accentBlue dark:text-sky-400 hover:text-accentBlue/85 dark:hover:text-sky-300 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        id={`project-footer-git-${project.id}`}
                        href={project.githubLink}
                        target="_blank"
                        aria-label={`View GitHub repository for ${project.title}`}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-mutedGray hover:text-primaryDark dark:text-gray-405 dark:hover:text-cleanWhite transition-colors"
                      >
                        <FaGithub className="h-5 w-5" {...({} as any)} />
                        <span>Repository</span>
                      </a>
                    </div>

                  </div>

                </article>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
