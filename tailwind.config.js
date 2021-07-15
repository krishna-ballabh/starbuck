const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height:{
      '800px':'800px',
      '12' : '48px',
    },
    colors: {
      primary:{
        100: "#f1f8f6",
        200: "#d4e9e2",
        300 : "#000248",
        400:"#1e3932",
        500 : "#008248",
        600: "#f5f5f5",
        'link':"#008248",
        'gold':"#cba258",
        700 : "#00653e",
        800 : "#f3f1e7",
        900 : "#dcdcdc",
        'grey': "#808080",
        'grey-100' :"#C5C5C5",
        1000 : "#f7f7f7",
        'soft-black':"#414a4c",
      },
      secondary: "#f3f1e7",
      grey:colors.grey,
      white: colors.white,
      black : colors.black,
    },
    fontFamily:{
      'sans' : ['SoDoSans','Helvetica Neue','Helvetica','Arial','sans-serif'],
    },
    extend: {
      backgroundImage: theme =>({
        'hero-image':"url(hero.webp)",
      }),
      fontSize:{
        xl:['30.2px','30.64px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
