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
        ptm: {
          navy: "#0A1628",
          "navy-light": "#132240",
          blue: "#1B4F8A",
          "blue-light": "#2D6DB5",
          accent: "#E8A317",
          "accent-light": "#F5C04A",
          red: "#C4291C",
          "red-light": "#E04535",
          slate: "#334155",
          "slate-light": "#64748B",
          gray: "#94A3B8",
          "gray-light": "#E2E8F0",
          ice: "#F1F5F9",
          white: "#FAFBFC",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        card: "0.75rem",
        "card-lg": "1rem",
        button: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.06)",
        button: "0 1px 2px rgba(0,0,0,0.1)",
      },
      maxWidth: {
        container: "1200px",
        "container-narrow": "900px",
      },
    },
  },
  plugins: [],
};
export default config;
