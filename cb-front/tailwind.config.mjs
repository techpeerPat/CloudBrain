/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto Slab Variable", ...defaultTheme.fontFamily.sans],
        body: ["Nunito Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "body-xs": ["1", "1.5"],
        "body-base": ["1.125rem", "1.5"],
        "body-lg": ["1.25rem", "1.4"],
        "display-btn": ["1.125rem", "1.2"],
        "display-xs": ["1.25rem", "1.3"],
        "display-sm": ["1.5rem", "1.3"],
        "display-md": ["1.75rem", "1.3"],
        "display-lg": ["2rem", "1.2"],
        "display-xl": ["2.25rem", "1.2"],
        "display-2xl": ["2.5rem", "1.2"],
        "display-3xl": ["3.5rem", "1.2"],
      },
      colors: {
        black: "#010101",
        grey: "#777",
        purple: "#CF4BEF",
        "light-gray": "#B4B8BD",
        "dark-blue": "#008EEF",
        offwhite: "#F9FAFB",
      },
      listStyleImage: {
        check: 'url("/checkIcon.svg")',
      },
      boxShadow: {
        btn: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
