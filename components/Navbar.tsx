"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "ML Models", href: "#ml-models" },
  { label: "Courses", href: "#courses" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1c1c1c]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-bold tracking-wider group"
            data-hover
          >
            <span className="text-[#00d4ff]">&gt;</span>
            <span className="text-[#e0e0e0] group-hover:text-[#00d4ff] transition-colors">
              {personalInfo.alias}
            </span>
            <span className="text-[#00d4ff] animate-blink">_</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                data-hover
                className={`font-mono text-xs tracking-widest uppercase transition-colors relative pb-0.5 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#00d4ff]"
                    : "text-[#6b7280] hover:text-[#e0e0e0]"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#00d4ff]"
                  />
                )}
                {link.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-hover
              className="w-8 h-8 rounded border border-[#1c1c1c] flex items-center justify-center text-[#6b7280] hover:text-[#00d4ff] hover:border-[#00d4ff40] transition-all font-mono text-xs"
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            data-hover
            className="md:hidden text-[#6b7280] hover:text-[#00d4ff] transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                data-hover
                className={`font-display text-3xl font-bold tracking-tight transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-[#00d4ff]"
                    : "text-[#e0e0e0] hover:text-[#00d4ff]"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="font-mono text-xs text-[#6b7280] hover:text-[#00d4ff] transition-colors"
            >
              [{darkMode ? "LIGHT MODE" : "DARK MODE"}]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
