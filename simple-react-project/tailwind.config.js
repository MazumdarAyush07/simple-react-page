/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      40: "10rem",
      16: "4rem",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('./src/assets/react.svg')",
      },
    },
  },
  plugins: [],
};
