/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#00935F",
        secondary: "white",
        accent: "#F9BC0C",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
       fontFamily: {
        clash: ["var(--clash-display)"],
        style: ["var(--style-display)"],
      },
    },
  },
  plugins: [],
};