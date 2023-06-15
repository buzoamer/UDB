/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.7},
          '50%': { opacity: 0.4},
        },
        snake1: {
          '0%':{transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(100%)'}
        }
      }
    },
  },
  plugins: [],
}
