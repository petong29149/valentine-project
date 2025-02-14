import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "bounce-out": "bounceOut 0.5s ease-in", // Add custom animation
      },
      keyframes: {
        bounceOut: {
          "0%": { transform: "translateY(0)" },
          "20%": {transform: "translateY(20vh)"},
          "100%": { transform: "translateY(-100vh)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
