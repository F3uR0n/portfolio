"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">03</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            EXPERIENCE
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00d4ff] via-[#00d4ff40] to-transparent"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          <div className="space-y-10 ml-10 sm:ml-20">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.9rem] sm:-left-[4.9rem] top-1.5 w-3 h-3 border border-[#00d4ff] bg-[#0a0a0a] group-hover:bg-[#00d4ff] transition-colors" />

                {/* Card */}
                <div className="cyber-card p-6 group-hover:border-[#00d4ff20] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
                        {item.role}
                      </h3>
                      <p className="font-mono text-xs text-[#6b7280] mt-0.5">{item.institution}</p>
                    </div>
                    <span className="font-mono text-xs text-[#00d4ff] bg-[#00d4ff10] border border-[#00d4ff20] px-3 py-1 whitespace-nowrap self-start">
                      {item.period}
                    </span>
                  </div>

                  <p className="font-mono text-sm text-[#6b7280] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
