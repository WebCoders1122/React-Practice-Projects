/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      purple: colors.purple,
      red: colors.red,
      grey: {
        50: "#f2f2f2",
        100: "#d8d8d8",
        200: "#bfbfbf",
        300: "#a6a6a6",
        400: "#8c8c8c",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#262626",
        900: "#191919",
        950: "#0c0c0c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
