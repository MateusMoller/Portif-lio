/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f4f7fb',
          surface: '#ffffff',
          panel: '#e8eef6',
          text: '#12263a',
          muted: '#526477',
          accent: '#0f6bff',
          cyan: '#0d9488',
          emerald: '#047857',
        },
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 32px rgba(15, 107, 255, 0.22)',
        soft: '0 16px 40px rgba(15, 23, 42, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
