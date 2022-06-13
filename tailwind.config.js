const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins',  ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
