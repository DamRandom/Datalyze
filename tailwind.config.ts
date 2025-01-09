/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", 
        secondary: "#2563EB", 
        background: "#F8FAFC", 
        accent: "#DBEAFE", 
      },
    },
  },
  plugins: [],
};
