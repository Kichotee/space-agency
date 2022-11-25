/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
'./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
   
    screens:{
      xs:'220px',
      sm:'480px',
      md:'768px',
      lg:'975px',
      xl:'1440px'
    },
    colors:{
      spaceBlue:'#0B0D17',
      babyBlue:'#d0d6f9',
      white:'#fff',
      whiteFade:'#ffffff0A'
    },
    extend: {
      fontFamily: {
        belle: ['Belleflair'],
        barlow:['BarlowCondensed']
       },
    },
  },
  plugins: [],
}
