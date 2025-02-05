/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Important: Include your Angular files!
    "./public/index.html", // If you have an index.html
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          50: "#f2f8fd",
          100: "#e3eefb",
          200: "#c2def5",
          300: "#8bc2ee",
          400: "#4ea2e2",
          500: "#2787d0",
          600: "#186ab1",
          700: "#15558f",
          800: "#154977",
          900: "#173d63",
          950: "#122e4d",
        },
        fire: {
          50: "#fef3f2",
          100: "#ffe3e1",
          200: "#ffcdc9",
          300: "#feaaa3",
          400: "#fb786e",
          500: "#f34d40",
          600: "#d22a1d",
          700: "#bd2418",
          800: "#9c2118",
          900: "#81221b",
          950: "#460d09",
        },
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
