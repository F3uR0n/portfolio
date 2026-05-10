"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const gifs = [
  { src: "/gifs/cat-typing-code.gif", caption: "me coding at 2am", alt: "cat typing code" },
  { src: "/gifs/fahh.gif", caption: "when deadline is near", alt: "fahh" },
  { src: "/gifs/breaking-pc.gif", caption: "when npm install fails", alt: "breaking pc" },
  { src: "/gifs/cat-flash.gif", caption: "At night", alt: "cat flash" },

  { src: "/gifs/cat-typing-code.gif", caption: "me coding at 2am", alt: "cat typing code" },
  { src: "/gifs/fahh.gif", caption: "when deadline is near", alt: "fahh" },
  { src: "/gifs/breaking-pc.gif", caption: "when npm install fails", alt: "breaking pc" },
  { src: "/gifs/cat-flash.gif", caption: "At night", alt: "cat flash" },
];

const allGifs = [...gifs, ...gifs];

export default function GifStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden border-t border-b border-[#1c1c1c]">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <span className="font-mono text-xs text-[#b8b7b7] tracking-widest">GIF can talk</span>
      </motion.div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="scroll-track">
          {allGifs.map((gif, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="cyber-card overflow-hidden w-48 sm:w-56">
                <div className="relative w-full aspect-video overflow-hidden bg-[#080808]">
                  <Image
                    src={gif.src}
                    alt={gif.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="px-3 py-2 font-mono text-xs text-[#919191] text-center truncate">
                  {gif.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
