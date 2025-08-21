/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
        extend: {
      fontFamily: {
        // Serif (classy)
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        robotoslab: ['"Roboto Slab"', 'serif'],
        libre: ['"Libre Baskerville"', 'serif'],

        // Sans-serif (modern & clean)
        lato: ['Lato', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],

        // Script (for logo/hero)
        greatvibes: ['"Great Vibes"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        parisienne: ['Parisienne', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
};
