/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070708',
          900: '#0b0b0d',
          800: '#111114',
          700: '#17171b',
          600: '#1f1f25',
          500: '#2a2a31',
        },
        brand: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc7cb',
          300: '#ff9aa1',
          400: '#ff6b75',
          500: '#ff4d5a',
          600: '#f43545',
          700: '#cf2333',
          800: '#a31a27',
          900: '#7a141f',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,77,90,0.25), 0 20px 60px -20px rgba(255,77,90,0.45)',
        soft: '0 30px 80px -30px rgba(0,0,0,0.8)',
        card: '0 4px 24px -8px rgba(17,17,20,0.08)',
        'card-hover': '0 20px 48px -16px rgba(244,53,69,0.15)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(17,17,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,20,0.05) 1px, transparent 1px)',
        'radial-red':
          'radial-gradient(ellipse at top, rgba(255,77,90,0.18), transparent 60%)',
        'radial-red-light':
          'radial-gradient(ellipse at top, rgba(255,77,90,0.08), transparent 65%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
