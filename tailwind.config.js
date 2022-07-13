/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Platform: ["Platform", "sans-serif"],
        PoetsenOne: ["PoetsenOne", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],// Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
};
