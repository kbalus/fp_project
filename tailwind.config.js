/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'affirmLogo': "url('../assets/img/Affirm_logo.png')",
      }
    },
    container: {},
    colors: {
      'main-blue': '#0c2752',
      'main-blue-hover': '#1a3e66'
    },
    fontWeight: {
      light: '300',
      normal: '300',
      medium: '400',
      semibold: '500',
      bold: '600',
    },
    screens: {
      'sm': '500px',
      'md': [
        {'min': '1000px'}
      ],
      'lg': '1100px',
      'xl': '1400px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}