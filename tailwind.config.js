/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      green: {
        100: '#738989',
        200: '#456262',
        300: '#245050',
        400: '#163B3B',
        500: '#0F2828',
      },
      lime: {
        100: '#E0F7E8',
        200: '#A2E8B9',
        300: '#83E1A1',
        400: '#64D98A',
        500: '#569F6E',
      },
      gray: {
        100: '#FAFAFA',
        200: '#DDDDDD',
        300: '#9A9A9A',
        400: '#797979',
        500: '#232323',
      },
    },
  },
}
