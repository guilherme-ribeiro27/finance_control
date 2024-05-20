import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      background: '#fffdfc',
      container: '#b8b8b8',
      'on-background': '#fff5f5',
      'dark-background': '#1a1616',
      'dark-container': '#0a0a0a',
      'dark-on-background': '#242323',
    }
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
