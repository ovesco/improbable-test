module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'barlow': ['"Barlow Condensed"', 'sans-serif'],
      'serif': ['"Playfair Display"', 'serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '980px',
      '2xl': '1150px',
    },
    scale: {
      '-1': '-1',
    },
    extend: {},
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      translate: ['group-hover'],
      inset: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
