/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enable dark mode via class strategy
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Includes all Next.js pages & components
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ Includes App Router structure
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        "dm-sans": ["var(--font-dm-sans)"],
        outfit: ["var(--font-outfit)"],
        "plus-jakarta": ["var(--font-plus-jakarta)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
