/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingBackground: 'url("../src/assets/images/landingBackground.png")',
      },
      colors: {
        primaryColor: '#000000',
        secondaryColor: '#FFBD59',
        customBgGradient: 'rgba(108, 108, 108, 0.15)',
      }
    },
      fontFamily: {
        poppins: ['Poppins'],
        primaryFont: ['Afacad'],
        secondaryFont: ['Bebas Neue']
    },
  },
  plugins: [],
}

