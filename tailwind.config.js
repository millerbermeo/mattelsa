/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover'], // Asegúrate de que la variante 'hover' esté habilitada para 'borderWidth'
    },
  plugins: [
    require('flowbite/plugin')
  ],

  }
}
