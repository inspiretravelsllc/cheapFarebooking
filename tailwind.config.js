/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scenary-pattern': "url('./src/assets/tour.jpg')",
        'scenary-pattern-2' : "url('./src/assets/pexels-pixa.jpg')"
      }
    },
  },
  plugins: [],
}

