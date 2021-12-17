module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'text-black': '#243c5a',
      'text-green': '#008c8d',
      'bg-green': '#6bc2c3',
      'bg-black': '#262c3a',
      'progress-pale': '#c5eaea',
      'progress-deep-green': '#2bb9ba',
      'progress-thin-green': '#c5eaea',
      'border-green': '#c5eaea',
    },
  },
  plugins: [],
};
