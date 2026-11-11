"use client";

import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import ProjectEntry from "./projects/ProjectEntry";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Featured Silicon Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Synthesizable SystemVerilog RTL, RISC-V pipelined processors, clock domain crossing synchronizers,
            and open-source ASIC physical design flows.
          </p>
        </div>

        {/* Project Entries */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <ProjectEntry key={project.id} project={project} index={idx + 1} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span>All hardware projects include testbenches and synthesis logs</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
