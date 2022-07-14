/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        SecularOne: ["Secular One", "sans-serif"],
      },
      width: {
        'blogbody': '75rem',
      }
    },
  },
  plugins: [],
}
