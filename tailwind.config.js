/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'body': ['Golos']
    },
    screens: {
      'xs': '300px',
      // => @media (min-width: 475px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }

      'xxxl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

