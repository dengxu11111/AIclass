import type { Config } from "tailwindcss";
// Force rebuild CSS

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f', // Deep navy blue
          light: '#112240',
          dark: '#020c1b',
        },
        accent: {
          DEFAULT: '#d4af37', // Gold
          light: '#f5d061',
          dark: '#aa8c2c',
        },
        graybg: {
          DEFAULT: '#f8fafc',
          dark: '#e2e8f0',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
