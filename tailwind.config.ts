import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#fffdfc',
        container: '#b8b8b8',
        'on-background': '#fff5f5',
        'title': '#0f0f0f',
        'subtitle': '#b8b8b8',
        'dark-title': '#ffffff',
        'dark-subtitle': '#b8b8b8',
        'dark-background': '#1a1616',
        'dark-container': '#0a0a0a',
        'dark-on-background': '#242323',
        'dark-text': '#ffffff',
      }
    },
    
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
