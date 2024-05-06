/** @type {import('tailwindcss').Config} */
export default({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
        barlowNor: ["Barlow", 'sans-serif']
      },
      backgroundImage: {
        'home-lg': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-md': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-sm': "url('/src/assets/home/background-home-mobile.jpg')",
        'des-lg': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'des-md': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'des-sm': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-lg': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-md': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-sm': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'tech-lg': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'tech-md': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'tech-sm': "url('/src/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [
  ],
})