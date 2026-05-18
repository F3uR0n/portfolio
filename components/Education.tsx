"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">06</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            EDUCATION
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="cyber-card corner-tl corner-br p-6 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Current badge */}
              {edu.current && (
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] animate-pulse" />
                  <span className="font-mono text-xs text-[#a3ff12] tracking-widest">CURRENT</span>
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 border border-[#1c1c1c] flex items-center justify-center text-[#00d4ff] group-hover:border-[#00d4ff40] transition-colors shrink-0 mt-0.5">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#e0e0e0] leading-tight group-hover:text-[#00d4ff] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs text-[#00d4ff] mt-0.5">{edu.institution}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-[#6b7280]">{edu.location}</span>
                </div>
                <div className="font-mono text-xs text-[#3a3a3a]">{edu.period}</div>
              </div>

              {edu.gpa && (
                <div className="flex items-center justify-between border border-[#1c1c1c] px-3 py-2 group-hover:border-[#00d4ff20] transition-colors mb-3">
                  <span className="font-mono text-xs text-[#6b7280]">GPA</span>
                  <span className="font-mono text-sm font-bold text-[#a3ff12]">{edu.gpa}</span>
                </div>
              )}

              {edu.details && edu.details.length > 0 && (
                <ul className="space-y-1">
                  {edu.details.map((detail, j) => (
                    <li key={j} className="font-mono text-xs text-[#6b7280] flex gap-2">
                      <span className="text-[#00d4ff] shrink-0">›</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Coursework strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 cyber-card p-6"
        >
          <div className="font-mono text-xs text-[#00d4ff] tracking-widest mb-4">RELEVANT COURSEWORK @ BRAC</div>
          <div className="flex flex-wrap gap-2">
            {[
              "CSE110 — Programming Language I",
              "CSE111 — Programming Language II",
              "CSE220 — Data Structures",
              "CSE221 — Algorithms",
              "CSE330 — Numerical Methods",
              "CSE422 — Artificial Intelligence",
            ].map((course) => (
              <span
                key={course}
                className="font-mono text-xs px-3 py-1.5 border border-[#1c1c1c] text-[#6b7280] hover:border-[#00d4ff40] hover:text-[#00d4ff] transition-all"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
