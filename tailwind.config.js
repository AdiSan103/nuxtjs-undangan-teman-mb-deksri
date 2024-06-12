/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  css: ["~/assets/css/main.css"],
  theme: {
    extend: {},
    fontFamily: {
      alexbrush: ["Alex Brush", "cursive"],
      robotomono: ["Roboto Mono", "serif"],
    },
  },
  plugins: [],
};
