/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey: "#808080",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
