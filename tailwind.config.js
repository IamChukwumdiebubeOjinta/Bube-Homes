/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        "primary-500": "#4a60a1",
        "gray-white": "#fff",
        whitesmoke: {
          100: "#eaeaea",
          200: "#e7e9eb",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        "primary-900": "#0f1320",
        darkslateblue: "#405594",
        gray: "rgba(0, 0, 0, 0.5)",
        slategray: "#576074",
        darkslategray: "#434343",
        lightslategray: "#889099",
        "primary-800": "#1e2640",
        "primary-700": "#2c3a61",
        "primary-400": "#6e80b4",
      },
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-regular-600": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      sm: "0.88rem",
      "xs-6": "0.73rem",
      "2xs-8": "0.68rem",
      "sm-6": "0.85rem",
      "mini-5": "0.91rem",
      "33xl": "3.25rem",
      lg: "1.13rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
