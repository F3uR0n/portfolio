"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Brain } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { mlModels } from "@/data/portfolio";

export default function MLModels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = mlModels.filter((m) => m.featured);
  const rest = mlModels.filter((m) => !m.featured);

  return (
    <section id="ml-models" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">05</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            ML MODELS
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        {/* Featured models */}
        <div className="space-y-6 mb-12">
          {featured.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="cyber-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`grid grid-cols-1 ${model.screenshot ? "lg:grid-cols-5" : "lg:grid-cols-1"} gap-0`}>
                <div className={`p-6 sm:p-8 ${model.screenshot ? "lg:col-span-3" : ""} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          {model.course && (
                            <span className="font-mono text-xs text-[#a3ff12] border border-[#a3ff1230] px-2 py-0.5 flex items-center gap-1">
                              <Brain size={10} />
                              {model.course}
                            </span>
                          )}
                          <span className="font-mono text-xs text-[#3a3a3a]">FEATURED</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-black text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
                          {model.name}
                        </h3>
                      </div>

                      <div className="flex gap-3 shrink-0">
                        {model.github && (
                          <a
                            href={model.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-hover
                            className="text-[#6b7280] hover:text-[#00d4ff] transition-colors"
                          >
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {model.live && (
                          <a
                            href={model.live}
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

                    <p className="font-mono text-sm text-[#6b7280] leading-relaxed mb-4">
                      {model.description}
                    </p>

                    {model.metrics && model.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {model.metrics.map((m) => (
                          <span
                            key={m}
                            className="font-mono text-xs px-2.5 py-1 border border-[#a3ff1220] text-[#a3ff12] bg-[#a3ff1205]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {model.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 border border-[#1c1c1c] text-[#6b7280] hover:border-[#00d4ff60] hover:text-[#00d4ff] transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {model.screenshot && (
                  <div className="lg:col-span-2 relative overflow-hidden border-l border-[#1c1c1c] bg-[#080808] min-h-[200px]">
                    <Image
                      src={model.screenshot}
                      alt={model.name}
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

        {/* Other models grid */}
        {rest.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-4"
            >
              <span className="font-mono text-xs text-[#e9e9e9] tracking-widest">OTHER MODELS</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((model, i) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  className="cyber-card p-5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-base font-bold text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
                        {model.name}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        {model.github && (
                          <a
                            href={model.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-hover
                            className="text-[#3a3a3a] hover:text-[#00d4ff] transition-colors"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        {model.live && (
                          <a
                            href={model.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-hover
                            className="text-[#3a3a3a] hover:text-[#00d4ff] transition-colors"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    {model.course && (
                      <span className="font-mono text-xs text-[#a3ff12] mb-2 block">{model.course}</span>
                    )}
                    <p className="font-mono text-xs text-[#6b7280] leading-relaxed mb-4">
                      {model.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {model.tech.map((t) => (
                      <span key={t} className="font-mono text-xs px-2 py-0.5 border border-[#1c1c1c] text-[#6b7280] hover:border-[#00d4ff60] hover:text-[#00d4ff] transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
