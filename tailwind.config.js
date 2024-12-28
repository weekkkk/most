/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        phone: "375px",
      },
    },
    colors: {
      brand: {
        100: "#0094FF",
        50: "#8FD0FF",
      },
      default: "#FFFFFF",
      common: "#000000",
      second: {
        0: "#F5F5F5",
        50: "#DCDCDC",
        100: "#B2B0B0",
      },
    },
    lineHeight: {
      control: 1.2,
      small: 1,
    },
  },
  plugins: [],
};
