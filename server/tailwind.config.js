/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'barry': ['"Trebuchet MS Regular"', 'sans-serif'],
      'larry': ['"Nunito Sans"', 'sans-serif'],
      'DMSans': ['"DM Sans"', 'sans-serif'],
      'Frank': ['"Frank Ruhl Libre"', 'serif'],
    },
    extend: {
      screens: {
        '2lg': '1441px',
      },
      colors: {
        textColor: "#ebedef",
        wine: {
          120: '#62104B',
          100: '#7C144C',
          60: '#B07294',
          30: '#D8B8C9'
        },
        gray:{
          80: '#4E4A66',
          60: '#B07294',
          20: '#E5D0DB',
          10: '#E9E8EC'
        }
      },
      
    },
  },
  plugins: [],
}