/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fonts:{
      },
      colors: {
        'lavender': '#bcbace',
        'brown': '#7b5544',
        'gray': '#646464',
        'l-blue': '#c1d6eb',
        'l-green': '#c5ebc5',
        'l-yellow': '#f4f4aa',
        'l-orange': '#f1caa5',
        'l-pink': '#f3dae2',
        'l-brown': '#9d8e87',
        'l-gray': '#d7dadc',
        'd-blue': '#043c78',
        'd-green': '#00533f',
        'd-red': '#b7282e'
      },
      spacing: {
      }
    },
  },

}