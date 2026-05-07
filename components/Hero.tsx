"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { personalInfo } from "@/data/portfolio";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      let iter = 0;
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iter) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iter += 0.6;
        if (iter >= text.length) {
          clearInterval(interval);
          setDisplayed(text);
          setDone(true);
        }
      }, 40);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={done ? "" : "text-[#00d4ff]"}>{displayed || text.replace(/./g, "█")}</span>;
}

function TypeWriter({ strings, className }: { strings: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = strings[index];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % strings.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, index, strings]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-[#00d4ff]">_</span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#00d4ff10] to-transparent"
            style={{ left: `${15 + i * 18}%`, height: "100%" }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#00d4ff30]" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#00d4ff30]" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#00d4ff30]" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#00d4ff30]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal prefix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-[#3a3a3a] tracking-widest mb-6"
        >
          <span className="text-[#00d4ff]">~/</span>
          <span className="text-[#6b7280]">F3uR0n</span>
        </motion.div>

        {/* Name with glitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <h1
            className="glitch-text font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#e0e0e0] leading-none"
            data-text={personalInfo.name}
          >
            <ScrambleText text={personalInfo.name} delay={600} />
          </h1>
        </motion.div>

        {/* Alias badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex items-center gap-2 font-mono text-xs px-4 py-1.5 border border-[#00d4ff30] text-[#00d4ff] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          {personalInfo.alias}
          <span className="text-[#3a3a3a]">·</span>
          {personalInfo.location}
        </motion.div>

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-mono text-lg sm:text-xl text-[#6b7280] mb-10 min-h-[2rem]"
        >
          <TypeWriter strings={personalInfo.taglines} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollTo("projects")}
            data-hover
            className="cyber-btn font-mono text-sm px-8 py-3 bg-[#00d4ff] text-[#0a0a0a] font-bold tracking-widest hover:bg-[#00c4ef] transition-colors"
          >
            VIEW_WORK
          </button>
          <button
            onClick={() => scrollTo("contact")}
            data-hover
            className="cyber-btn font-mono text-sm px-8 py-3 border border-[#00d4ff40] text-[#00d4ff] tracking-widest hover:border-[#00d4ff] hover:bg-[#00d4ff10] transition-all"
          >
            CONTACT_ME
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-5"
        >
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              aria-label={label}
              className="w-10 h-10 border border-[#1c1c1c] flex items-center justify-center text-[#6b7280] hover:text-[#00d4ff] hover:border-[#00d4ff40] transition-all hover:shadow-[0_0_12px_#00d4ff20]"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[#3a3a3a] tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
