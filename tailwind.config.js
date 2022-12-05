/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "net-red": "#E50914",
        "net-blue": "#0071EB",
        "net-green": "#2EDE75",
        "net-black": "#010101",
        "net-gray": "#757575",
        "footer-grey": "#acacac",
      },
      padding: {
        "tb-18": "18px",
      },
      fontSize: {
        0: "0px",
      },
      backgroundImage: {
        "bg-img": "url('../assets/background.png')",
      },
      fontSize: {
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
    },
  },
  plugins: [],
};
