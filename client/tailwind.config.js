/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: () => ({
        '9/10': '90%',
      }),
    },
  },
  plugins: [],
};
