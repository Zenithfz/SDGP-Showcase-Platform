/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.28)",
        },
        white: "#fff",
        gray: "#262626",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "sf-pro-display": "'SF Pro Display'",
      },
      borderRadius: {
        xl: "20px",
        "30xl": "49px",
      },
    },
    fontSize: {
      xs: "12px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "31xl": "50px",
      "21xl": "40px",
      mini: "15px",
      "81xl": "100px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('daisyui'),
  ],

    
};
