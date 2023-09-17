/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_primary: "#d0d2d6 ",
        bg_primary: "#283046",
      },
    },
  },
  plugins: [],
};
