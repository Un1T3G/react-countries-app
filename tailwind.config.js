/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E2A3A' /* Dark Blue (Dark Mode Elements) */,
        'very-dark-blue': '#161D2E' /* Very Dark Blue (Dark Mode Background) */,
        'light-very-dark-blue':
          '#1E202A' /* Very Dark Blue (Light Mode Text) */,
        'dark-gray': '#8F8F8F' /* Dark Gray (Light Mode Input) */,
        'very-light-gray':
          '#FAFAFA' /* Very Light Gray (Light Mode Background) */,
        white: '#FFFFFF' /* White (Dark Mode Text & Light Mode Elements) */,
      },
      screens: {
        'x-sm': '432px'
      }
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
