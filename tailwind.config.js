/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
   container:{
    center: true,
   },
    extend: {
      backgroundImage:{
        hero:"url(/images/slider-bg-1.jpg)",
        heroTwo:"url(/images/slider-bg-2.jpg)",
        heroWatches:"url(/images/hero-watch.jpg)"
      },
      colors: {
        primary: "#0cb8b6",
        light: "#f8f9fa",
      },
      screens: {
        smallest: "385px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}