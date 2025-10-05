/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: {
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
        },
        surface: {
          50: "rgb(var(--surface-50) / <alpha-value>)",
          100: "rgb(var(--surface-100) / <alpha-value>)",
          200: "rgb(var(--surface-200) / <alpha-value>)",
          900: "rgb(var(--surface-900) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          600: "rgb(var(--primary-600) / <alpha-value>)",
          700: "rgb(var(--primary-700) / <alpha-value>)",
        },
        accent: {
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
          lavender: "rgb(var(--accent-lavender) / <alpha-value>)",
          orange: "rgb(var(--accent-orange) / <alpha-value>)",
          green: "rgb(var(--accent-green) / <alpha-value>)",
          red: "rgb(var(--accent-red) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
      },
      fontSize: {
        h1: [
          "var(--fs-h1)",
          {
            lineHeight: "var(--lh-h1)",
            letterSpacing: "var(--ls-h1)",
            fontWeight: "var(--fw-h1)",
          },
        ],
        h2: [
          "var(--fs-h2)",
          {
            lineHeight: "var(--lh-h2)",
            letterSpacing: "var(--ls-h2)",
            fontWeight: "var(--fw-h2)",
          },
        ],
        h3: [
          "var(--fs-h3)",
          {
            lineHeight: "var(--lh-h3)",
            letterSpacing: "var(--ls-h3)",
            fontWeight: "var(--fw-h3)",
          },
        ],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        small: ["var(--fs-small)", { lineHeight: "var(--lh-small)" }],
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};
