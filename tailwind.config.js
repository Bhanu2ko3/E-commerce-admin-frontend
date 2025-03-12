/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E20",  // Green
        secondary: "#B71C1C", // Red
        beige: "#F5F5DC",  // Beige
      },
    },
  },
  plugins: [],
}

