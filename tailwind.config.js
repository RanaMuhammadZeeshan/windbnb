/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EB5757',
        secondary: '#F2F2F2',
        placeholderColor: '#BDBDBD',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        montseratte: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
