/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections, dynamicIconsPlugin } = require("@egoist/tailwindcss-icons")

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin(),
    dynamicIconsPlugin(),
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
}

