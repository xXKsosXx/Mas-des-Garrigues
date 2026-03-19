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
        noir: "#0d0b08",
        pierre: "#1a1710",
        terre: "#2a2318",
        or: "#c8a96e",
        "or-light": "#e8d5a8",
        creme: "#f4ede0",
        "creme-light": "#faf6ef",
        gris: "#8a8070",
        rouge: "#8b2635",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
