/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                // Ensure index.html is included
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure all JS, JSX, TS, TSX files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
