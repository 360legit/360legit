/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        accent: '#FDBA74',
        ink: '#1F2937',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        serif: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -30px rgba(15, 23, 42, 0.7)',
        glow: '0 0 0 1px rgba(249, 115, 22, 0.2), 0 20px 45px -26px rgba(249, 115, 22, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

