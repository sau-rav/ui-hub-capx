/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}", "./pages/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#EDAF36",
        "golden-light": "#EBD300",
        "golden-light-light": "#FFE3AC",
        grey: "#1a1713",
        accordionText: "#CA952E",
        "light-black": "#1E1E1E",
        "light-grey": "#828282",
        "lite-yellow": "#E8C19C",
      },
      backgroundColor: {
        footer: "#EDAF36",
        accordionFooter: "#151410",
        "light-black": "#1E1E1E",
        "normal-black": "#101115",
      },

      backgroundImage: {
        "hero-image": "url('../public/hero.png')",
        "hero-image-2": "url('../public/hero-2.png')",
        "hero-image-3": "url('../public/hero-3.png')",
      },
      height: {
        98: "27rem",
        100: "30rem",
        102: "32rem",
        104: "34rem",
        106: "36rem",
      },
      width: {
        98: "27rem",
        100: "30rem",
        102: "32rem",
        104: "34rem",
        106: "36rem",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
