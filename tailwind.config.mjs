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
        'background': 'rgb(0, 0, 0)',
        'backgorund-backdrop': 'rgba(0, 0, 0, 0.5)',
        'accent': 'rgb(225, 225, 225)',
        'accent-subtext': 'rgb(110, 110, 110)',
        'accent-highlight': 'rgba(225, 225, 225, 4%)',
        'accent-hover': 'rgb(30, 30, 30)',
        'accent-hover-transparent': 'rgba(48, 48, 48, .5)',
        'accent-button': 'rgb(25, 25, 25)',
        'accent-button-elevated': 'rgb(42, 42, 42)',
        'glass': 'rgba(25, 25, 25, 0.85)',
      },
      boxShadow: {
        'border': 'inset 0 0 0 0.1rem rgba(225, 225, 225, 4%)',
        'header': '0 0 0 0.2rem rgba(25, 25, 25, 0.85) inset, 0 0 20px 0 rgba(48, 48, 48, .5)',
      },
      keyframes: {
        wordspin: {
          '18%': {
            transform: 'translateY(0%)'
          },
          '20%': {
            transform: 'translateY(-100%)'
          },

          '38%': {
            transform: 'translateY(-100%)'
          },
          '40%': {
            transform: 'translateY(-200%)'
          },

          '58%': {
            transform: 'translateY(-200%)'
          },
          '60%': {
            transform: 'translateY(-300%)'
          },

          '78%': {
            transform: 'translateY(-300%)'
          },
          '80%': {
            transform: 'translateY(-400%)'
          },

          '98%': {
            transform: 'translateY(-400%)'
          },
          '100%': {
            transform: 'translateY(-500%)'
          },
        },
      },
      animation: {
        'word-spin': 'wordspin 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
