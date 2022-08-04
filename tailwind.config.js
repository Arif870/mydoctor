/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
