/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Dist/**/*.html"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        'main-font': ['Afacad Flux', 'system-ui']
      }
    },
  },
  plugins: [],
}