"use client";

import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Marker */}
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
          About
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            {profileData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Architectural Principles Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              Hardware Design Principles
            </div>

            <div className="space-y-3">
              {profileData.principles.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800"
                >
                  <div className="text-xs font-mono font-semibold text-neutral-100 mb-1">
                    {`[0${idx + 1}]`} {item.label}
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

