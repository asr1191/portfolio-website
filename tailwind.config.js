/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'steamRecentGames': '80px auto 230px'
      },
      colors: {
        'ht-gray-500': '#E8E8EB',
        'ht-gray-600': '#808090',
        'ht-gray-700': '#28283E',
        'ht-gray-800': '#17172E',
        'ht-gray-900': '#02021C',

        'ht-primary-600': '#571229',
        'ht-primary-700': '#741C31',
        'ht-primary-800': '#A43139',
        'ht-primary-900': ' #E64D51', 

        'ht-secondary-700': '#6A2441',
        'ht-secondary-800': '#9A445B',
        'ht-secondary-900': '#CC788A',

      },
      fontFamily: {
        josefinSans: 'Josefin Sans',
        helvetica: 'Helvetica Custom',
        compacta: 'Compacta Custom',
        dimbo: 'Dimbo',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
