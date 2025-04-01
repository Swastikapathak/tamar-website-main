import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // ✅ Scan pages
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Scan components
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ Scan Next.js app dir (if using App Router)
    "./src/**/*.{js,ts,jsx,tsx}"  // ✅ Scan src folder if you use src/
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['var(--font-lexend)', ...fontFamily.sans], // ✅ Extend font family
      },
    },
  },
  plugins: [],
};
