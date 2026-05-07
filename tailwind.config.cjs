/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'accent-primary': '#4f46e5',
        'accent-soft': '#6366f1',
      },
      boxShadow: {
        'soft-xl': '0 24px 80px rgba(15,23,42,0.7)',
      },
    },
  },
  plugins: [],
}

