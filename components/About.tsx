"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { label: "CS Projects", value: "9+" },
  { label: "Languages", value: "6+" },
  { label: "Course Repositories", value: "12+" },
  { label: "University", value: "BRAC" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">01</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            ABOUT
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio text */}
          <div className="space-y-6">
            {personalInfo.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`font-mono text-sm leading-relaxed ${
                  i === 0 ? "text-[#a0a0a0] text-base" : "text-[#6b7280]"
                }`}
              >
                {i === 0 && <span className="text-[#00d4ff] mr-2">{">"}</span>}
                {paragraph}
              </motion.p>
            ))}

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 mt-8"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="cyber-card corner-tl corner-br p-4 relative"
                >
                  <div className="font-display text-2xl font-black text-[#00d4ff] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#6b7280] tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* GIF + terminal block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="cyber-card rounded-none border border-[#1c1c1c] overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1c1c1c] bg-[#0f0f0f]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="font-mono text-xs text-[#b3b1b1] ml-3">about.sh</span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-xs space-y-2">
                <div className="text-[#6b7280]">
                  <span className="text-[#00d4ff]">Farhan | F3uR0n</span>
                </div>
                <div className="text-[#a0a0a0] pl-3">Farhan Sadik — CS @ BRAC</div>
                <div className="pl-3 space-y-1 text-[#a0a0a0]">
                  <div>• <span className="text-[#a3ff12]">AI/Machine Learning</span></div>
                  <div>• <span className="text-[#a3ff12]">Computer Graphics & Games</span></div>
                  <div>• <span className="text-[#a3ff12]">System Design & Architecture</span></div>
                </div>
                <div className="text-[#6b7280] mt-3">
                  <span className="text-[#00d4ff]">Gamer | Builder</span>
                  <span className="animate-blink text-[#00d4ff] ml-2">_</span>
                </div>
              </div>

              {/* GIF embed */}
              <div className="relative border-t border-[#1c1c1c] bg-[#080808]">
                <div className="px-4 py-2 font-mono text-xs text-[#b8b7b7] border-b border-[#1c1c1c]">
                  When the build breaks
                </div>
                <div className="flex justify-center p-4">
                  <div className="relative w-full max-w-[300px] aspect-video overflow-hidden">
                    <Image
                      src="/gifs/breaking-pc.gif"
                      alt="Breaking PC frustration gif"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border border-[#00d4ff20] pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-[#a3ff1220] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
