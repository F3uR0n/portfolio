"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 18 + 8;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="loading-screen"
        >
          <div className="scanlines" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-[#00d4ff] tracking-widest mb-2"
            >
              INITIALIZING SYSTEM...
            </motion.div>

            <div className="font-display text-4xl font-black tracking-tight text-[#e0e0e0]">
              F3<span className="text-[#00d4ff]">u</span>R0n
            </div>

            <div className="w-64">
              <div className="flex justify-between font-mono text-xs text-[#3a3a3a] mb-2">
                <span>LOADING</span>
                <span className="text-[#00d4ff]">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-px bg-[#1c1c1c] relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#00d4ff]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="font-mono text-xs text-[#3a3a3a] tracking-widest"
            >
              ▮ PORTFOLIO.EXE
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
