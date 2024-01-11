/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: () => ({
        '1/5': '20%',
        '9/10': '90%',
        '3/10': '30%',
      }),
      backgroundColor: () => ({
        hero: '#FAFAFA',
      }),
      fontWeight: () => ({
        extrabold: '950',
      }),
    },
  },
  plugins: [],
};
