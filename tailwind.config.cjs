/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          darkest: '#010103',
          secondary: '#0E0E10',
          tertiary: '#1C1C21',
          muted: '#3A3A49',
          border: '#1A1A1A',
          200: '#0E0E10', // added for bg-black-200
          300: '#1C1C21', // added for bg-black-300
          500: '#3A3A49', // added for bg-black-500
          600: '#1A1A1A', //added for bg-black-600
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#E4E4E6',
          lighter: '#D6D9E9',
          muted: '#AFB0B6',
          dimmed: '#62646C',
        },
        neutral: {
          400: '#AFB0B6', // added for text-neutral-400
          100: '#F5F5F5',//added for tech-logo
        },
        green: {
          400: '#68D391', //added for btn-ping
          500: '#48BB78', //added for btn-ping_dot
        },
        gray: {
          100: '#F3F4F6', //added for arrow-btn
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
        'gray-gradient': 'linear-gradient(to right, #BEC1CF 60%, #D5D8EA 60%, #D5D8EA 100%)', //added for text-gray_gradient
        'arrow-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.000025) 50%, rgba(255, 255, 255, 0.000025) 50%, rgba(255, 255, 255, 0.025) 100%)', //added for arrow-btn
      },
      spacing: {
        '10': '2.5rem', // added for sm:px-10
      },
      animation: {
        'wave-animation': 'wave-animation 2.5s infinite',
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      backgroundClip: {
        'text': 'text',
      }
    },
  },
  plugins: [],
};



// // tailwind.config.js
// module.exports = {
//   // ... your other config
//   theme: {
//     extend: {
//       colors: {
//         testColor: '#123456',
//       },
//     },
//   },
//   // ...
// };