/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all relevant files are scanned
  theme: {
    extend: {
      fontFamily: {
        heading: ["Gabarito", "sans-serif"],
        body: ["Gabarito", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
