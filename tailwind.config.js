/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          950: "#060609",
          900: "#0d0d14",
          800: "#141420",
          700: "#1c1c2e",
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.25)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.2)",
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        "spin-slow":"spinSlow 8s linear infinite",
        "float":    "floatY 5s ease-in-out infinite",
        "glow-pulse":"glowPulse 4s ease-in-out infinite",
        "aurora-1": "aurora1 16s ease-in-out infinite",
        "aurora-2": "aurora2 20s ease-in-out infinite",
        "aurora-3": "aurora3 24s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:   { "0%":{ opacity:"0",transform:"translateY(20px)" }, "100%":{ opacity:"1",transform:"translateY(0)" } },
        spinSlow: { from:{ transform:"rotate(0deg)" }, to:{ transform:"rotate(360deg)" } },
        floatY:   { "0%,100%":{ transform:"translateY(0px)" }, "50%":{ transform:"translateY(-10px)" } },
        glowPulse:{
          "0%,100%":{ boxShadow:"0 0 20px rgba(6,182,212,0.18), 0 0 40px rgba(6,182,212,0.08)" },
          "50%":    { boxShadow:"0 0 40px rgba(6,182,212,0.38), 0 0 80px rgba(6,182,212,0.18)" },
        },
        aurora1:{ "0%,100%":{ transform:"translate(0,0) scale(1)",    opacity:"0.16" }, "50%":{ transform:"translate(50px,-30px) scale(1.1)", opacity:"0.26" } },
        aurora2:{ "0%,100%":{ transform:"translate(0,0) scale(1)",    opacity:"0.12" }, "50%":{ transform:"translate(-40px,25px) scale(0.9)", opacity:"0.20" } },
        aurora3:{ "0%,100%":{ transform:"translate(0,0) scale(1)",    opacity:"0.08" }, "50%":{ transform:"translate(25px,35px) scale(1.08)", opacity:"0.14" } },
      },
    },
  },
  plugins: [],
};
