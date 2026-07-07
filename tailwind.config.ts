import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F1115",
        surface: "#171A21",
        elevated: "#1F232D",
        primary: "#F5F7FA",
        secondary: "#A9B1BC",
        accent: "#6EE7B7",
        violet: "#8B5CF6",
        border: "#2A3140",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        nav: "0 18px 50px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
