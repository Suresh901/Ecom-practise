/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1FB4A1",
        primary: '#4A3AFF'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}