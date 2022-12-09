const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_600 = { ...Array.from(Array(601)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "net-red": "#E50914",
        "hover-red": "#970008",
        "net-blue": "#0071EB",
        "net-green": "#2EDE75",
        "net-black": "#010101",
        "net-gray": "#757575",
        gray: {
          200: "#c8c8c8",
          300: "#ACACAC",
          400: "#919191",
          500: "#757575",
        },
      },
      padding: px0_100,
      margin: px0_100,
      backgroundImage: {
        "net-img": "url('../assets/background.png')",
      },
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"],
      },
      fontSize: {
        0: "0px",
        "sTit-xs": [
          "22px",
          {
            lineHeight: 1.2,
            fontWeight: "bold",
          },
        ],
        "sTit-s": [
          "24px",
          {
            lineHeight: 1.2,
            fontWeight: "bold",
          },
        ],
        "sTit-nomal": [
          "28px",
          {
            lineHeight: 1.2,
            fontWeight: "bold",
          },
        ],
        "sTit-l": [
          "34px",
          {
            lineHeight: 1.2,
            fontWeight: "bold",
          },
        ],
        "sTit-xl": [
          "48px",
          {
            lineHeight: 1.2,
            letterSpacing: "-0.0005em",
            fontWeight: "bold",
          },
        ],
        "sTit-2xl": [
          "60px",
          {
            lineHeight: 1.2,
            letterSpacing: "-0.0005em",
            fontWeight: "bold",
          },
        ],
        "sTxt-xs": [
          "12px",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.0005em",
            fontWeight: "normal",
          },
        ],
        "sTxt-s": [
          "14px",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.0005em",
            fontWeight: "normal",
          },
        ],
        "sTxt-normal": [
          "16px",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.0005em",
            fontWeight: "normal",
          },
        ],
        "sTxt-l": [
          "18px",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.0005em",
            fontWeight: "normal",
          },
        ],
        "sTxt-xl": [
          "20px",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.0005em",
            fontWeight: "normal",
          },
        ],
      },
      spacing: px0_200,
      borderWidth: px0_10,
      borderRadius: px0_100,
      width: px0_600,
    },
  },
  plugins: [],
};
