/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        surface: {
          950: "#050505",
          900: "#0b0b0c",
          850: "#111113",
          800: "#18181b"
        }
      },
      boxShadow: {
        glow: "0 20px 80px rgba(45, 212, 191, 0.12)"
      }
    }
  },
  plugins: []
};
