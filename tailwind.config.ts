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
        primary: '#FF3333',
        dark: "#232222",
        light: "#FCFCFC",
      },
      backgroundImage: {
        'dark-gradient': "url('/dark-gradient.webp')",
        'category-bg': "url('/category-bg.png')",
        'category-bg-active': "url('/category-bg-active.png')"
      }
    },
  },
  plugins: [],
};
export default config;
