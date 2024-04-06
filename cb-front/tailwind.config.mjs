const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto Slab Variable", , ...defaultTheme.fontFamily.sans],
        body: ["Nunito Sans Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
