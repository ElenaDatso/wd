/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '320px',
      tab: '640px',

      laptop: '1024px',

      desktop: '1280px',
    },
  },
  plugins: [],
};

