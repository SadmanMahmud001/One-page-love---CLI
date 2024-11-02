/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Dist/**/*{html,js}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        'main-font': ['Inter','system-ui']
      },
      gridTemplateColumns: {
        "myGrid": "repeat( minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
}