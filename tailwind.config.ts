import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: "#00d4ff",
          lime: "#a3ff12",
          bg: "#0a0a0a",
          card: "#0f0f0f",
          border: "#1c1c1c",
          muted: "#3a3a3a",
        },
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      animation: {
        "glitch-1": "glitch1 2.5s infinite",
        "glitch-2": "glitch2 2.5s infinite",
        scanline: "scanline 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "scroll-x": "scrollX 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        glitch1: {
          "0%, 90%, 100%": { clipPath: "inset(0 0 100% 0)", transform: "translate(0)" },
          "92%": { clipPath: "inset(10% 0 60% 0)", transform: "translate(-3px, 1px)" },
          "94%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(3px, -1px)" },
          "96%": { clipPath: "inset(30% 0 40% 0)", transform: "translate(-2px, 2px)" },
          "98%": { clipPath: "inset(70% 0 5% 0)", transform: "translate(2px, -2px)" },
        },
        glitch2: {
          "0%, 90%, 100%": { clipPath: "inset(0 0 100% 0)", transform: "translate(0)" },
          "92%": { clipPath: "inset(60% 0 10% 0)", transform: "translate(3px, -1px)" },
          "94%": { clipPath: "inset(20% 0 50% 0)", transform: "translate(-3px, 1px)" },
          "96%": { clipPath: "inset(40% 0 30% 0)", transform: "translate(2px, -2px)" },
          "98%": { clipPath: "inset(5% 0 70% 0)", transform: "translate(-2px, 2px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px #00d4ff40, 0 0 10px #00d4ff20" },
          "50%": { boxShadow: "0 0 20px #00d4ff80, 0 0 40px #00d4ff40" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
