const plugin = require('tailwindcss/plugin')
module.exports = {
  prefix: '',
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#24BC94',
        'secondary': '#ADD6CC',
        'primary-dark': '#0F0E13',
        'secondary-dark': '#1F2029',
        'tertiary-dark': '#20202A',
        'white': '#FFF4FF',
        'primary-grey': '#2D2D2D',
        'secondary-grey': '#5B5B5B',
      },
      fontWeight: {
        'headers': '600',
        'body': '400',
      },
      fontSize: {
        'headers':'1.75em',
        'logo':'40px',
        'paragraph':'1.25em',
        'card':'1.5em',
        'welcome-header':'9rem',
      },
      maxWidth: {
        'card': '280px'
      },
      maxHeight: {
        'card': '280px'
      },
      minHeight: {
        'card': '280px',
        'page': '100vh'
      },
      minWidth: {
        'card': '280px'
      },
      lineHeight: {
        'logo': '8rem',
      },
      gap:{
        'bottomLinks': '33vh',
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),
    require('tailwind-typewriter')({
    wordsets: {
      myself: {
        words: ['Developer', 'Engineer', 'Development'],
        delay: 2,
        repeat: -1, // -1 for infinite
        writeSpeed: 0.2,
        eraseSpeed: 0.1,
        pauseBetween: 4,
        caretWidth: '5px',
        caretColor: 'white',
      }
    }
  })

],
};
