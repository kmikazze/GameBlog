/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-gray": "#90ADC6",
        "pewter": "#E9EAEC",
        "yellow": "#FAD02C",
        "dark-blue": "#333652"
      }
    },
  },
  plugins: [],
}

