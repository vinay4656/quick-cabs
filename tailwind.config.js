// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      jeko: ['Jeko', 'sans-serif'], // Make sure to include a fallback font
    },
    extend: {},
  },
  plugins: [],
};
