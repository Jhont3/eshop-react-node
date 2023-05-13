/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#F0FFF1",
        "green-2": "#C2F8CB",
        "green-3": "#B3E9C7",
        "blue-1": "#8367C7",
        "blue-2": "#5603AD",
      },
    },
  },
  plugins: [],
};
