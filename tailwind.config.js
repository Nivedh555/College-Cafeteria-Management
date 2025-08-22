/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-50-color': '#FAFAFA',
        surface: {
          '50': '#FAFAFA',
          '100': '#F5F5F5',
          '200': '#EEEEEE',
          '300': '#E0E0E0',
        },
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#E65100',
        },
        secondary: {
          DEFAULT: '#006633',
          light: '#008042',
          dark: '#004D27',
        },
        accent: {
          DEFAULT: '#003366',
          light: '#004080',
          dark: '#002952',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'progress': 'progress 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}