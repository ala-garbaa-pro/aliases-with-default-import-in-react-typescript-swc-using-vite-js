/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db4c3f",
        primary_hover_1: "#c53727",
      },
    },
  },
  plugins: [],
}