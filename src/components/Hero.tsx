"use client";

import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto w-full">
        {/* Sub-header / Location */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-neutral-800 text-xs font-mono text-neutral-400">
          <span className="uppercase tracking-wider">
            {profileData.institution} &bull; {profileData.batch}
          </span>
          <span className="text-neutral-500">
            {profileData.location}
          </span>
        </div>

        {/* Hero Title & Intro */}
        <div className="py-12 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-100 leading-tight">
            Designing silicon from first principles, custom RISC-V cores, and open-source ASIC flows.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-4xl font-normal">
            {profileData.about[0]}
          </p>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-4xl">
            {profileData.tagline}
          </p>
        </div>

        {/* Focus Areas (DEVFOLIO style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-neutral-800">
          {profileData.focusAreas.map((area) => (
            <div
              key={area.id}
              className="p-4 bg-neutral-900/60 rounded border border-neutral-800"
            >
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                {area.code}
              </div>
              <div className="text-sm font-semibold text-neutral-100 mb-1">
                {area.title}
              </div>
              <p className="text-xs text-neutral-400 leading-normal">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Directives */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium text-sm rounded transition-colors"
            >
              View Projects ↓
            </a>
            <a
              href={profileData.resumeUrl}
              className="px-5 py-2.5 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-neutral-200 font-medium text-sm rounded transition-colors"
            >
              Resume ↗
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-neutral-200 font-medium text-sm rounded transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-neutral-400">
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-neutral-100 transition-colors"
            >
              email
            </a>
            <span>&bull;</span>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              github
            </a>
            <span>&bull;</span>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
