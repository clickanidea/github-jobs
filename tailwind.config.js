module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      list: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}