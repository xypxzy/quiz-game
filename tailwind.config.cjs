/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'primary-font': "'Poppins', sans-serif",
      'secondary-font': "'Roboto', sans-serif",
    },
    extend: {
      colors: {
        yellow: '#FCC822',
        black: '#333333',
        gray: '#E0E0E0',
        dark_gray: '#828282',
      },
      height: {
        '80vh': '80vh',
      },
      width: {
        '60vw': '45vw',
      },
      fontSize: {
        '3em': '2.9em',
      },
      boxShadow: {
        btnShadow: ' 0 5px 15px -3px #fcc822, 0 2px 3px -4px #fcc822;',
      },
    },
  },
  plugins: [],
};
