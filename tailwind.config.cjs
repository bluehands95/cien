/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Playfair Display'], 
      'cursive': ['Sacramento'],
      'sans': ['Poppins'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      square: 'square',
    }
  },
  plugins: [],
}
