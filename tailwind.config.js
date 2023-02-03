/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        violet: "#293fcc",
        blue: "#1083e5",
        oceanblue: "#02a8eb",
        skyblue: "#e3eafc",
        verylightblue: "#f8fafd",
        skyviolet: "#d1d9f7",
      },
    },
  },
  plugins: [],
};
