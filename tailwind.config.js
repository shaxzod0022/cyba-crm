/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linkColor: "#2C2C2C",
        blue: "#3E71F1",
        pColor: "#4B4B4B",
        spanColor: "#787878",
        headingColor: "#193656",
        backgroundAboutImg: "#A0A0A00F",
        priceBlack: "#212529",
        bgInput: "#F9F9F9",
        footerLinkColor: "#474747",
      },
      fontFamily: {
        PlayFair: ["Rubik"],
      },
    },
  },
  plugins: [],
};
