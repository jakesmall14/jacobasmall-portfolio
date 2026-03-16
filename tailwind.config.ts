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
        page: "#E8E2D9",
        ink: "#1A1814",
        card: "#E0D9CE",
        border: "#C8BFB0",
        muted: "#7A7268",
        hov: "#8A7F72",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1040px",
      },
    },
  },
  plugins: [],
};
export default config;
