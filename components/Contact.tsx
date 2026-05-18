"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const socials = [
    { icon: GithubIcon, label: "GitHub", value: "F3uR0n", href: personalInfo.github },
    { icon: LinkedinIcon, label: "LinkedIn", value: "farhan-sadik-945571218", href: personalInfo.linkedin },
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest">07</span>
          <div className="section-divider flex-1" />
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#e0e0e0]">
            CONTACT
          </h2>
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-black text-[#e0e0e0] mb-2">
                Let&apos;s <span className="text-[#00d4ff]">Connect</span>
              </h3>
              <p className="font-mono text-sm text-[#6b7280] leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and interesting projects.
                Drop me a message or reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="cyber-card p-4 flex items-center gap-4 group">
                  <div className="w-8 h-8 border border-[#1c1c1c] flex items-center justify-center text-[#6b7280] group-hover:text-[#00d4ff] group-hover:border-[#00d4ff40] transition-all shrink-0">
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs text-[#3a3a3a] tracking-widest">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        data-hover
                        className="font-mono text-sm text-[#6b7280] hover:text-[#00d4ff] transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-[#6b7280] truncate block">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="cyber-card p-6 space-y-5">
              <div className="font-mono text-xs text-[#00d4ff] tracking-widest mb-6">SEND_MESSAGE</div>

              {/* Name */}
              <div>
                <label className="font-mono text-xs text-[#6b7280] tracking-widest block mb-2">
                  NAME <span className="text-[#00d4ff]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-[#080808] border border-[#1c1c1c] px-4 py-3 font-mono text-sm text-[#e0e0e0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-xs text-[#6b7280] tracking-widest block mb-2">
                  EMAIL <span className="text-[#00d4ff]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#080808] border border-[#1c1c1c] px-4 py-3 font-mono text-sm text-[#e0e0e0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-[#6b7280] tracking-widest block mb-2">
                  MESSAGE <span className="text-[#00d4ff]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className="w-full bg-[#080808] border border-[#1c1c1c] px-4 py-3 font-mono text-sm text-[#e0e0e0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                data-hover
                className="cyber-btn w-full py-3 font-mono text-sm tracking-widest font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50 bg-[#00d4ff] text-[#0a0a0a] hover:bg-[#00c4ef]"
              >
                {status === "loading" ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    SEND_MESSAGE
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs text-[#a3ff12] border border-[#a3ff1230] px-4 py-3 text-center"
                >
                  ✓ MESSAGE SENT — I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs text-[#ff6b6b] border border-[#ff6b6b30] px-4 py-3 text-center"
                >
                  ✗ {errorMsg}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
