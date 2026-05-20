import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4EFE6",
        "paper-2": "#ECE4D2",
        "paper-3": "#E2D8C0",
        ink: "#1C1914",
        "ink-2": "#4A4337",
        "ink-3": "#807868",
        "ink-4": "#A8A090",
        terracotta: "#C16B4F",
        "terracotta-2": "#D89878",
        "terracotta-3": "#F3DCD0",
        sage: "#8A9A7B",
        ochre: "#D4A85A",
        slate: "#5B6B7A",
        blush: "#E8C4B8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "77.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        reveal: "reveal 0.6s cubic-bezier(0.22,0.61,0.36,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
