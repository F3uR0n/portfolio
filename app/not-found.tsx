"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="scanlines" />

      <div className="relative z-10 text-center px-6">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1
            className="glitch-text font-display text-[8rem] sm:text-[12rem] font-black text-[#0f0f0f] leading-none select-none"
            data-text="404"
            style={{ WebkitTextStroke: "1px #1c1c1c" }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[8rem] sm:text-[12rem] font-black text-transparent leading-none select-none"
              style={{ WebkitTextStroke: "1px #00d4ff40" }}>
              404
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="font-mono text-sm text-[#00d4ff] tracking-widest">
            ERROR: PAGE_NOT_FOUND
          </div>
          <p className="font-mono text-xs text-[#6b7280] max-w-sm mx-auto leading-relaxed">
            The page you&apos;re looking for has been corrupted, deleted, or never existed in this sector of the network.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/"
              className="cyber-btn font-mono text-xs px-6 py-3 bg-[#00d4ff] text-[#0a0a0a] font-bold tracking-widest hover:bg-[#00c4ef] transition-colors"
            >
              RETURN_HOME
            </Link>
          </div>
        </motion.div>

        {/* Terminal line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-mono text-xs text-[#3a3a3a]"
        >
          <span className="text-[#00d4ff]">farhan@f3ur0n</span>:~$ cd /home
          <span className="animate-blink text-[#00d4ff] ml-1">_</span>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#00d4ff20]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#00d4ff20]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#00d4ff20]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#00d4ff20]" />
    </div>
  );
}
