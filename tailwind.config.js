/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      fields: ["fields-display"],
      formamicro: ["forma-djr-micro"],
    },
    borderWidth: {
      DEFAULT: "0.9px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      spacing: {
        100: "26rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
