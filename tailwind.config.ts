import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f4",
          100: "#eaede4",
          200: "#d5dbc9",
          300: "#b8c4a4",
          400: "#98a67c",
          500: "#7d8c5e",
          600: "#626f48",
          700: "#4e573a",
          800: "#404632",
          900: "#373c2d",},
      },
      backgroundImage: {
        'hero-pattern': 'url("/images/hero-Image.png")', // ✅ use path relative to /public (NO /public prefix)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
