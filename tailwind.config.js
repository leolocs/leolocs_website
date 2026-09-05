/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#141416',
        panel: '#1A1A1D',
        card: '#1C1C1F',
        soft: '#242427',
        text: '#F5F5F3',
        muted: '#AAA9AD',
        brand: '#BD1414',
        brandHover: '#BD1414',
        border: 'rgba(255,255,255,0.10)',
      },
      borderRadius: {
        xl2: '18px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
