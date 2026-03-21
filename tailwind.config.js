/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050a14',
          surface: '#0d1529',
          panel: '#121d35',
          text: '#e6eeff',
          muted: '#8ea2c7',
          accent: '#3b82f6',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 40px rgba(59, 130, 246, 0.25)',
        soft: '0 14px 38px rgba(0, 0, 0, 0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
