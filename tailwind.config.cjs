/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'yoonet-blue': '#879bff',
        'yoonet-pink': '#f5949f',
        'yoonet-light-blue': '#71bbe3',
        'yoonet-purple': '#a36cf3',
        'yoonet-magenta': '#e26cdf',
        'yoonet-dark': '#6c7091',
        'yoonet-darker': '#4d5574',
      },
      fontFamily: {
        'dosis': ['Dosis Variable', 'Dosis', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
