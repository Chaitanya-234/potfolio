/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00D9FF",
          hover: "#00B8D9",
          dark: "#0099B8",
        },
        secondary: {
          DEFAULT: "#FF006E",
          hover: "#D9005C",
          dark: "#B8004A",
        },
        accent: {
          DEFAULT: "#8338EC",
          hover: "#6D2BC7",
          dark: "#5721A3",
        },
        dark: {
          bg: "#0A0E27",
          darker: "#050814",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        grid: "grid 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grid: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
      },
    },
  },
  plugins: [],
};
