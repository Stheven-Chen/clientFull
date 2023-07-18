/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 'Poppins': 'Poppins, sans-serif' },
      screens: {
        'sm': '360px',          // 360x640
        'md': '768px',          // 1366x768
        'lg': '1080px',         // 1920x1080
      },
    },
  },
  plugins: [],
}

