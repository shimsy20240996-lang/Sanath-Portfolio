/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#2a3b5c',
          DEFAULT: '#1a2942',
          dark: '#0f172a',
        },
        charcoal: {
          light: '#4b5563',
          DEFAULT: '#374151',
          dark: '#1f2937',
        },
        gold: {
          light: '#fde68a',
          DEFAULT: '#d97706', // More of a classic gold/bronze for corporate
          dark: '#b45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
