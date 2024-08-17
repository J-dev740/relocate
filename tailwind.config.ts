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
      fontFamily:{
        allison:['Allison','cursive'],
        circular: ['CircularStd', 'sans-serif'],
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'default': '0 2px 4px rgba(0, 0, 0, 0.10)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
  ],
};
export default config;
