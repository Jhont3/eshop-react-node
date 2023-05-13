/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-bg': 'rgba(36, 171, 112, 0.04)'
      }
    },
  },
  plugins: [],
}
