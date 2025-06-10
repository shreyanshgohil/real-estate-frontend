/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { xs: "475px", xxs: "200px", ...defaultTheme.screens },
    fontFamily: {
      jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "1.5xl": ["1.375rem", { lineHeight: "1.875rem" }], // 22px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
      "2.5xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      "3.5xl": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      "4.5xl": ["2.5rem", { lineHeight: "2.75rem" }], // 40px
      "5xl": ["3rem", { lineHeight: "3.625rem" }], // 48px
      "6xl": ["3.875rem", { lineHeight: "1" }], // 62px
      "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      "8xl": ["6rem", { lineHeight: "1" }], // 96px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#0d6efd",
            100: "#0dcaf0",
            500: "#0d6efd",
          },
          indigo: {
            DEFAULT: "#6610f2",
            400: "#6f42c1",
            500: "#6610f2",
          },
          pink: {
            DEFAULT: "#d63384",
            500: "#d63384",
          },
          red: {
            DEFAULT: "#dc3545",
            500: "#dc3545",
          },
          orange: {
            DEFAULT: "#fd7e14",
            500: "#fd7e14",
          },
          yellow: {
            DEFAULT: "#ffc107",
            500: "#ffc107",
          },
          green: {
            DEFAULT: "#198754",
            300: "#20c997",
            500: "#198754",
          },
          gray: {
            DEFAULT: "#343a40",

            300: "#6c757d",
            400: "#5b5957",
            500: "#343a40",
            700: "#212529",
            800: "#1a1a1a",
            900: "#03060E",
          },
          neutral: {
            DEFAULT: "#ff4136",
            100: "#f8f9fa",
            200: "#F6F2F1",
            600: "#554B4B",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
