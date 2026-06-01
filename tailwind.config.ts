import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020509",
          900: "#060B18",
          800: "#0A1020",
          700: "#0D1526",
          600: "#101D35",
          500: "#1A2A40",
        },
        brand: {
          blue: "#0057FF",
          light: "#00B4FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "blob-1": "blob-float-1 12s ease-in-out infinite",
        "blob-2": "blob-float-2 15s ease-in-out infinite",
        "blob-3": "blob-float-3 10s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "blob-float-1": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(40px, -60px) scale(1.05)" },
          "50%": { transform: "translate(-30px, 30px) scale(0.95)" },
          "75%": { transform: "translate(20px, -20px) scale(1.02)" },
        },
        "blob-float-2": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(-50px, 40px) scale(0.9)" },
          "50%": { transform: "translate(30px, -40px) scale(1.1)" },
          "75%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-float-3": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, 50px) scale(1.05)" },
          "66%": { transform: "translate(-40px, -30px) scale(0.95)" },
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0057FF, #00B4FF)",
      },
    },
  },
  plugins: [],
};

export default config;
