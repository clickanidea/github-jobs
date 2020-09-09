module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        list: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/typography"),
  ],
};