/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Caminhos dos arquivos onde o Tailwind deve procurar classes
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik Bubbles"', 'system-ui', 'sans-serif'], // Adiciona a fonte personalizada "Rubik Bubbles"
      },
    },
  },
  plugins: [],
};
