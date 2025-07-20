/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'vt-orange': '#FF6B35',
        'vt-dark': '#0B1929',
        'vt-gray': '#6B7280',
      },
      fontFamily: {
        'sans': ['Satoshi', 'Satoshi Placeholder', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

