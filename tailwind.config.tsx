/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientHover: {
          "0%": {
            background:
              "linear-gradient(to bottom right, #f8fafc, #f3f4f6, #ecfeff)",
          },
          "100%": {
            background:
              "linear-gradient(to bottom right, #f5d0fe, #f3f4f6, #f8fafc)",
          },
        },
      },
      animation: {
        gradientHover: "gradientHover 0.7s forwards",
      },
    },
  },
  plugins: [],
};
