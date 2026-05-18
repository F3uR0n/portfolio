"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { courseRepos } from "@/data/portfolio";

type GithubMeta = {
  description: string | null;
  stars: number;
};

function extractOwnerRepo(url: string): [string, string] | null {
  const m = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?(?:\/.*)?$/);
  return m ? [m[1], m[2]] : null;
}

export default function CourseRepos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [meta, setMeta] = useState<Record<string, GithubMeta>>({});

  useEffect(() => {
    courseRepos.forEach(async (repo) => {
      const parsed = extractOwnerRepo(repo.github);
      if (!parsed) return;
      const [owner, name] = parsed;
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${name}`);
        if (!res.ok) return;
        const data = await res.json();
        setMeta((prev) => ({
          ...prev,
          [repo.github]: { description: data.description, stars: data.stargazers_count },
        }));
      } catch {}
    });
  }, []);

  return (
    <section id="courses" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
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
            COURSE REPOS
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-mono text-xs text-[#3a3a3a] tracking-widest">
            ACADEMIC WORK · OPEN SOURCE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseRepos.map((repo, i) => {
            const ghMeta = meta[repo.github];
            return (
              <motion.div
                key={repo.github}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="cyber-card p-5 group flex flex-col justify-between"
              >
                <div>
                  {/* Top row: course badge + GitHub link */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen size={12} className="text-[#a3ff12] shrink-0" />
                      <span className="font-mono text-xs text-[#a3ff12] truncate">
                        {repo.course}
                      </span>
                    </div>
                    <a
                      href={repo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                      className="text-[#3a3a3a] hover:text-[#00d4ff] transition-colors shrink-0"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  {/* Repo name */}
                  <h3 className="font-display text-base font-bold text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors mb-2 leading-snug">
                    {repo.name}
                  </h3>

                  {/* Description from GitHub API */}
                  <p className="font-mono text-xs text-[#6b7280] leading-relaxed mb-4 min-h-[2.5rem]">
                    {ghMeta?.description ?? (
                      <span className="text-[#3a3a3a] italic">loading description…</span>
                    )}
                  </p>
                </div>

                {/* Bottom: stars + tech tags */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <Star size={11} className="text-[#a3ff12]" />
                    <span className="font-mono text-xs text-[#a3ff12]">
                      {ghMeta !== undefined ? ghMeta.stars : "—"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {repo.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-0.5 border border-[#1c1c1c] text-[#3a3a3a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
