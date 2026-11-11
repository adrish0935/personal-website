"use client";

import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          {/* Identity & Scope */}
          <div className="space-y-3 md:col-span-1">
            <div
              className="font-bold text-sm tracking-tight cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300"
              onClick={scrollToTop}
            >
              {profileData.name.toUpperCase()}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans text-xs">
              Electronics Engineer focused on VLSI, RISC-V pipelined cores, and open-source ASIC silicon flows.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <div className="text-neutral-500 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("academics")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Hardware */}
          <div className="space-y-2.5">
            <div className="text-neutral-500 uppercase tracking-wider">
              Silicon Projects
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors truncate block"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="space-y-2.5">
            <div className="text-neutral-500 uppercase tracking-wider">
              Channels
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Email Transmission ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {currentYear} {profileData.name} &bull; {profileData.institution}
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
