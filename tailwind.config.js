/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-20": "#b0b1b1",
        "gray-40": "#626262",
        black: "#000",
        "orange-60": "#ff630b",
        "gray-30": "#898989",
        "error-60": "#f61b46",
        "gray-50": "#3a3b3b",
      },
      fontFamily: {
        "normal-text-bold": "Poppins",
      },
      borderRadius: {
        "sm-5": "13.5px",
      },
    },
  },
  plugins: [],
};
