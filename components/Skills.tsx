"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Brain, Gamepad2, Globe, Database, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Gamepad2,
  Globe,
  Database,
  Wrench,
};

const accentColors = [
  "#00d4ff",
  "#a3ff12",
  "#ff6b6b",
  "#ffd93d",
  "#c77dff",
  "#ff9500",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background noise */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">02</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            SKILLS
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Skill cards grid */}
          <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group, groupIdx) => {
              const Icon = iconMap[group.icon] || Code2;
              const accent = accentColors[groupIdx % accentColors.length];

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.08 }}
                  className="cyber-card corner-tl corner-br p-5 group relative overflow-hidden"
                  style={{ "--accent": accent } as React.CSSProperties}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${accent}08 0%, transparent 60%)` }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 flex items-center justify-center border"
                      style={{ borderColor: `${accent}40`, color: accent }}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="font-display text-sm font-bold tracking-wide text-[#e0e0e0]">
                      {group.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 + groupIdx * 0.08 + itemIdx * 0.04 }}
                        className="font-mono text-xs px-2.5 py-1 border transition-all duration-300 cursor-default"
                        style={{
                          borderColor: "#1c1c1c",
                          color: "#6b7280",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.borderColor = `${accent}60`;
                          (e.target as HTMLElement).style.color = accent;
                          (e.target as HTMLElement).style.boxShadow = `0 0 8px ${accent}20`;
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.borderColor = "#1c1c1c";
                          (e.target as HTMLElement).style.color = "#6b7280";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GIF + side panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Cat coding GIF */}
            <div className="cyber-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1c1c1c]">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="font-mono text-xs text-[#ffffff]"></span>
              </div>
              <div className="relative aspect-square overflow-hidden bg-[#080808]">
                <Image
                  src="/gifs/cat-typing-code.gif"
                  alt="Cat typing code"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="px-4 py-3 font-mono text-xs text-[#c7c7c7] text-center">
                me @ 2am debugging
              </div>
            </div>

            {/* Mini stat panel */}
            <div className="cyber-card p-5 space-y-3">
              <div className="font-mono text-xs text-[#00d4ff] tracking-widest mb-3">STACK_SUMMARY</div>
              {[
                { label: "Total Languages", value: "6+", bar: 63 },
                { label: "Game Skills [R6, Apex, Valorant]", value: "∞", bar: 100 },
                { label: "Course Repositories", value: "12+", bar: 85 },
                { label: "ML Libraries", value: "5", bar: 55 },
                { label: "Projects Built", value: "9+", bar: 75 },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#6b7280]">{item.label}</span>
                    <span className="text-[#00d4ff]">{item.value}</span>
                  </div>
                  <div className="h-px bg-[#1c1c1c] relative overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00d4ff] to-[#a3ff12]"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.bar}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
