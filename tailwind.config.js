/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F39C12',
        'Newhite' : '#F8F9FA',
        'Blue': '#1F485C'
      },

      animation:{
        bounceIn: 'bounceIn 1s ease-in-out',
      },

      keyframes:{
        bounceIn:{
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        }
      },
      brightness: {
        '80': 'brightness(0.8)'
      },

      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(31,72,92,1) 70%, rgba(243,156,18,1) 100%)',
      },
      backgroundColor: {
        'colorBlue': '#1F485C'
      },
      zIndex: {
        '100': '100',
        '110': '110',
        '120': '120',
      },
      borderRadius: {
        'imagePet': '35% 65% 49% 51% / 73% 23% 77% 27%',
        'backImagePet': '63% 37% 54% 46% / 38% 13% 87% 62%',
      },
      rotate: {
        '30': 'rotate(30deg)'
      }
      
    },
  },
  plugins: [],
}