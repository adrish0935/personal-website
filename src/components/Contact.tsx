"use client";

import { profileData } from "@/data/profile";
import { DirectoryItem } from "@/types/portfolio";

export default function Contact() {
  const directory: DirectoryItem[] = [
    {
      channel: "Email",
      address: profileData.email,
      href: `mailto:${profileData.email}`,
      note: "Primary institutional contact for research inquiries and opportunities.",
    },
    {
      channel: "GitHub",
      address: `github.com/${profileData.githubUsername}`,
      href: profileData.github,
      note: "Repositories, SystemVerilog RTL, ASIC flows, and testbenches.",
    },
    {
      channel: "LinkedIn",
      address: "linkedin.com/in/adrish",
      href: profileData.linkedin,
      note: "Professional networking and academic updates.",
    },
    {
      channel: "Location",
      address: profileData.location,
      note: "Haldia, West Bengal, India (UTC+05:30)",
    },
    {
      channel: "Institution",
      address: `${profileData.institution} • ${profileData.department}`,
      note: `Freshman B.Tech (${profileData.batch}).`,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Feel free to reach out for VLSI research discussions, open-source silicon projects,
            or hardware internship opportunities.
          </p>
        </div>

        {/* Directory Card / Table */}
        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded-lg overflow-hidden">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {directory.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50/70 dark:hover:bg-neutral-900/90 transition-colors"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono text-neutral-500 uppercase">
                    {item.channel}
                  </div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100 font-mono">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className="hover:underline hover:text-neutral-700 dark:hover:text-neutral-300"
                      >
                        {item.address}
                      </a>
                    ) : (
                      <span>{item.address}</span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm sm:text-right">
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-neutral-50/90 dark:bg-neutral-900/90 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300">
              AVAILABLE FOR VLSI RESEARCH &amp; SILICON INTERNSHIP ROLES
            </span>
            <a
              href={`mailto:${profileData.email}`}
              className="font-mono text-xs px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-950 font-semibold transition-colors"
            >
              Send Transmission &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
