/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("daisyui"), /* require('@tailwindcss/typography') ,*/],
  daisyui: {
    themes: ["night"],
  },
}