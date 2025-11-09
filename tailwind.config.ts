import { allThemes, defaultTheme, safeThemeList } from "./themes";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const themer = require("tailwindcss-themer");

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: safeThemeList,
  theme: {
    extend: {
      /* breakpoints */
      screens: {
        xs: "350px",
        ssm: "400px",
        '2xl': '1921px', // Custom breakpoint for screens at least 1920px wide
        '3xl': '2650px', // Custom breakpoint for screens at least 2650px wide
        '4xl': '3840px', // Custom breakpoint for screens at least 4096px wide
      },

      /* fonts */
      fontFamily: {
        "main": "'DM Sans'", // "main": "'Open Sans'",
      },

      /* box shadows */
      boxShadow: {
        'glow-sm': '0 0 10px rgba(168, 85, 247, 0.3)',
        'glow-md': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-lg': '0 0 30px rgba(168, 85, 247, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(168, 85, 247, 0.3), 0 4px 6px -2px rgba(168, 85, 247, 0.2)',
      },

      /* custom gradients */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
      },

      /* animations */
      keyframes: {
        "loading-pin": {
          "0%, 40%, 100%": { height: "0.5em", "background-color": "#1E293B" },
          "20%": { height: "1em", "background-color": "#A855F7" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "seek-left": {
          "0%": { transform: "translateX(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(-50px) scale(1.2)", opacity: "0" },
        },
        "seek-right": {
          "0%": { transform: "translateX(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(50px) scale(1.2)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: { 
        "loading-pin": "loading-pin 1.8s ease-in-out infinite",
        "fade-in": "fade-in 300ms ease-out forwards",
        "seek-left": "seek-left 0.5s cubic-bezier(0, 0, 0.2, 1) forwards",
        "seek-right": "seek-right 0.5s cubic-bezier(0, 0, 0.2, 1) forwards",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "shimmer": "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    themer({
      defaultTheme: defaultTheme,
      themes: [
        {
          name: "default",
          selectors: [".theme-default"],
          ...defaultTheme,
        },
        ...allThemes,
      ],
    }),
    plugin(({ addVariant }) => {
      addVariant("dir-neutral", "[dir] &");
    }),
  ],
};

export default config;
