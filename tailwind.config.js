/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}", "./pages/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#EDAF36",
        "golden-light": "#EBD300",
      },

      backgroundImage: {
        "hero-image": "url('../public/hero.png')",
        "hero-image-2": "url('../public/hero-2.png')",
        "hero-image-3": "url('../public/hero-3.png')",
        "feature-image-1": "url('../public/feature1.png')",
        "feature-image-2": "url('../public/feature2.png')",
        "feature-image-3": "url('../public/feature3.png')",
        "feature-image-4": "url('../public/feature4.png')",
        "feature-image-5": "url('../public/feature5.png')",
      },
      height: {
        98: "27rem",
        100: "30rem",
        102: "32rem",
        104: "34rem",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
