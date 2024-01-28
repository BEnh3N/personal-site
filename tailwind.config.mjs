const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ["JetBrains Mono", ...defaultTheme.fontFamily.serif],
        'body': ["Inter var", "monospace"],
      },
      colors: {
        'text': '#e6eeea',
        'background': '#070a09',
        'primary': '#afcbbd',
        'secondary': '#416264',
        'accent': '#7096a1',
      },
    },
  },
  plugins: [],
};
