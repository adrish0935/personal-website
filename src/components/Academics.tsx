"use client";

import { educationData } from "@/data/education";

export default function Academics() {
  return (
    <section id="academics" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Academic Foundation
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Core foundations in electronics, semiconductor physics, and digital integrated systems.
          </p>
        </div>

        {/* Institution Card */}
        <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {educationData.institution}
              </h3>
              <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                {educationData.degree} &bull; {educationData.major}
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              {educationData.location} &bull; {educationData.duration}
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {educationData.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Coursework */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
                Relevant Engineering Coursework
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {educationData.relevantCoursework.map((course: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-neutral-50 dark:bg-neutral-950/60 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Initiatives */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
                Hardware &amp; Research Initiatives
              </div>
              <div className="space-y-2">
                {educationData.initiatives.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-neutral-50 dark:bg-neutral-950/60 rounded border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2"
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 font-mono">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
