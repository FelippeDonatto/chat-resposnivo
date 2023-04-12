/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#1A1924',
        800: '#282843',
        500: '#633BBC'
      },

      gray: {
        100: '#e1e1e6'
      },

      white: '#ffffff',

      greem: {
        500: '#07847E',
        300: '#00B37E'
      },

      transparent: 'transparent'
    },

    extend: {}
  },
  plugins: []
}
