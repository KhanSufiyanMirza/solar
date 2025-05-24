import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#0057B8', // Luminous blue
          dark: '#003974',
          light: '#4F8FF0',
        },
        accent: {
          DEFAULT: '#FFD700', // Solar gold
          dark: '#B89B00',
          light: '#FFF3B0',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
