/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      yellow: {
        700: '#C47F17',
        600: '#DBAC2C',
        100: '#F1E9C9',
      },
      purple: {
        800: '#4B2995',
        500: '#8047F8',
        100: '#EBE5F9',
      },

      gray: {
        900: '#272221',
        800: '#403937',
        700: '#574F4D',
        600: '#8D8686',
        400: '#D7D5D5',
        300: '#E6E5E5',
        200: '#EDEDED',
        100: '#F3F2F2',
        50: '#FAFAFA',
      },

      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      cursive: ["'Baloo 2'", 'cursive'],
    },
    extend: {
      backgroundImage: {
        background: "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
