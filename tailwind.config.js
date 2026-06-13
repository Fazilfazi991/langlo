/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#10172f",
          teal: "#159bb0",
          green: "#73ca88",
          mint: "#eaf8ef",
          blush: "#fbf3f1",
          pink: "#f04f7a",
        },
      },
      boxShadow: {
        soft: "0 16px 35px rgba(16, 23, 47, 0.13)",
        card: "0 10px 24px rgba(16, 23, 47, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
