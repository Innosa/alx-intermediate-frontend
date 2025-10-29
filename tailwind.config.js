/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan both repository-level `src/` and the Tailwind exercise folder so
  // Tailwind classes used in `0x02-tailwind-css/src/` are detected.
  content: ["./src/**/*.{html,js}", "./0x02-tailwind-css/src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}