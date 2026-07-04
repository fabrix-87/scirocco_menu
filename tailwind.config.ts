// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        scirocco: {
          bg: "#110d0a",        // Marrone scurissimo "warm" del brand Scirocco
          surface: "#18130e",   // Sfondo dei blocchi e delle icone
          card: "#1a1510",      // Sfondo delle card dei piatti
          border: "#2d241c",    // Bordi dei moduli
          line: "#3d3025",      // Linee di divisione delle sezioni
          text: "#f4f1ea",      // Testo principale (avorio/panna)
          muted: "#9e948a",     // Testo secondario e inglese
          gold: "#dca842",      // L'oro Scirocco esatto
          goldSoft: "rgba(220, 168, 66, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;