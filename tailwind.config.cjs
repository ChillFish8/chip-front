/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/app.html', 'src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'brand-darker': '#212125',
        'brand-dark': '#2c2f33',
        'brand-orange': '#ff3e00',
      },
      boxShadow: {
        'hard-left': '5px 0 11px -4px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  plugins: [],
}
