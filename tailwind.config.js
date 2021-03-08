module.exports = {
  purge: ['./pages/**/*.tsx', './@components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      visible: ['group-hover']
    },
    fontFamily: {
      'sans': ['"Baloo 2"', 'sans-serif'],
      'serif': ['"Roboto Slab"', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
