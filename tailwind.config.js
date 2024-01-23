/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'base': '#313131',
      'highlight' : '#525252'

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

