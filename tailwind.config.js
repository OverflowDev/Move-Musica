/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#150E28'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans'],
      }
    },
  },
  plugins: [],
}