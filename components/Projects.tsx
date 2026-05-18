"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">04</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            PROJECTS
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-6 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="cyber-card group relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`grid grid-cols-1 ${project.screenshot ? "lg:grid-cols-5" : "lg:grid-cols-1"} gap-0`}>
                {/* Content */}
                <div className={`p-6 sm:p-8 ${project.screenshot ? "lg:col-span-3" : ""} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          {project.isPrivate && (
                            <span className="font-mono text-xs text-[#a3ff12] border border-[#a3ff1230] px-2 py-0.5 flex items-center gap-1">
                              <Lock size={10} />
                              PRIVATE
                            </span>
                          )}
                          <span className="font-mono text-xs text-[#3a3a3a]">FEATURED</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-black text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
                          {project.name}
                        </h3>
                      </div>

                      <div className="flex gap-3 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-hover
                            className="text-[#6b7280] hover:text-[#00d4ff] transition-colors"
                          >
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-hover
                            className="text-[#6b7280] hover:text-[#00d4ff] transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="font-mono text-sm text-[#6b7280] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 border border-[#1c1c1c] text-[#6b7280] hover:border-[#00d4ff60] hover:text-[#00d4ff] transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot */}
                {project.screenshot && (
                  <div className="lg:col-span-2 relative overflow-hidden border-l border-[#1c1c1c] bg-[#080808] min-h-[200px]">
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-transparent to-transparent lg:block hidden" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-4"
        >
          <span className="font-mono text-xs text-[#3a3a3a] tracking-widest">OTHER PROJECTS</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="cyber-card p-5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-base font-bold text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover
                        className="text-[#3a3a3a] hover:text-[#00d4ff] transition-colors"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-mono text-xs text-[#6b7280] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-0.5 border border-[#1c1c1c] text-[#6b7280] hover:border-[#00d4ff60] hover:text-[#00d4ff] transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
