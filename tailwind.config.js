/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          to: {
            transform: "translateX(0rem)",
            opacity: "1",
          },
        },
        slide: {
          "0, 50%": {
            transform: "translate(0, 0) scale(30) rotate(-45deg)",
          },
          "100%": {
            transform: "translate(80vw, -80vw) scale(20) rotate(-45deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 350ms ease-in-out forwards",
        slide: "slide 30s linear infinite both alternate",
      },
      boxShadow: {
        "btnUp": "3px 4px 0 0px rgb(var(--ctp-text))",
        "btnDown": "1px 2px 0 0px rgb(var(--ctp-text))",
      },
      flex: {
        '04': '0.4 1 0%',
        '06': '0.6 1 0%',
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
  ],
};
