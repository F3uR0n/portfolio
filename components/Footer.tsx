"use client";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#3a3a3a]">
          <span className="text-[#00d4ff]">© </span>
          <span className="text-[#fdffff]">2026 {personalInfo.name}</span>
          <span className="text-[#35fd03] mx-2">·</span>
          <span className="text-[#00d4ff]">{personalInfo.alias}</span>
        </div>
        <div className="font-mono text-xs text-[#3a3a3a]">
          Built with <span className="text-[#00d4ff]">Next.js</span> +{" "}
          <span className="text-[#a3ff12]">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
