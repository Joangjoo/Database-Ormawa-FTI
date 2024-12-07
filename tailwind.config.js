/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {
  colors: {
    'primary': '#171717',
    'secondary': '#262626',
    'ternary' : '#EABE6C',
    'purple-400' : '#000000',
    'purple-300' : '#7bfc59'
    },
  },
  plugins: [],
}
}

