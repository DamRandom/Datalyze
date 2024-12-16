/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Azul oscuro para navegación y títulos
        secondary: "#2563EB", // Azul brillante para botones y destacados
        background: "#F8FAFC", // Fondo gris claro
        accent: "#DBEAFE", // Azul pastel para toques decorativos
      },
    },
  },
  plugins: [],
};
