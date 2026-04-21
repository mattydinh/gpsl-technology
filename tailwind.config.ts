import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fafafa",
          dark: "#0a0a0b",
          card: "#18181b",
          cardBorder: "#27272a",
        },
        accent: {
          DEFAULT: "#22d3ee",
          hover: "#06b6d4",
          muted: "rgba(34, 211, 238, 0.15)",
        },
        op: {
          bg: "rgb(var(--op-bg) / <alpha-value>)",
          panel: "rgb(var(--op-panel) / <alpha-value>)",
          card: "rgb(var(--op-card) / <alpha-value>)",
          ink: "rgb(var(--op-ink) / <alpha-value>)",
          muted: "rgb(var(--op-muted) / <alpha-value>)",
          accent: "rgb(var(--op-accent) / <alpha-value>)",
          line: "rgb(var(--op-line) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SF Mono", "Monaco", "Consolas", "monospace"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(34, 211, 238, 0.35)",
        "glow-sm": "0 0 12px -3px rgba(34, 211, 238, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
