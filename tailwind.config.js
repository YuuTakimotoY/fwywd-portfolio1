const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      header: '#6bc2c3',
      footer: '#262c3a',
    }),
    extend: {
      backgroundImage: (theme) => ({
        about: "url('/images/bg-about.png')",
        skills: "url('/images/bg-skills.png')",
        future: "url('/images/bg-future.png')",
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      'progress-light': '#c5eaea',
      'progress-dark': '#2bb9ba',
      'border-greenlight': '#c5eaea',
    },
    textColor: {
      white: colors.white,
      black: '#243c5a',
      green: '#008c8d',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
