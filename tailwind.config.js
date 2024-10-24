/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dishes': "url('./assets/images/blue.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}