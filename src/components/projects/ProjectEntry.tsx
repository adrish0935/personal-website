"use client";

import { MinimalProject } from "@/types/portfolio";

interface ProjectEntryProps {
  project: MinimalProject;
  index: number;
}

export default function ProjectEntry({ project, index }: ProjectEntryProps) {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <article className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded-lg overflow-hidden transition-colors">
      {/* Entry Masthead */}
      <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5">
            PROJECT {formattedIndex} &bull; {project.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            GitHub Repo ↗
          </a>
        )}
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Technical Architecture */}
        <div className="p-4 bg-neutral-50 dark:bg-neutral-950/70 rounded border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-300">
          <span className="text-neutral-500 dark:text-neutral-400 font-bold block mb-1 uppercase tracking-wider">
            Architecture &amp; Datapath
          </span>
          <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Specifications Table */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-neutral-200 dark:divide-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 text-xs font-mono">
            {project.specs.map((spec, sIdx) => (
              <div key={sIdx} className="p-3">
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 block uppercase">
                  {spec.label}
                </span>
                <span className="text-neutral-900 dark:text-neutral-200 font-semibold mt-0.5 block truncate">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-1.5 pt-1">
          {project.highlights.map((item, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="text-neutral-400 dark:text-neutral-500 font-mono">&gt;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tools Tagstrip */}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800/60 rounded text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
