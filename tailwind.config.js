/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#627EEA",
        secondary: "#6F6F7E",
        bg: "#0A0818",
        bg2: "#1C1731",
        bg3: "#181626",
        bg4: "#242044",
      },
      backgroundImage: {
        background:
          "linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)",
        border: "linear-gradient(#6F6F7E, transparent)",
      },
    },
  },
  plugins: [],
};
