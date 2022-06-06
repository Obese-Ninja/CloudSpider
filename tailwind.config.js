// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.css'],
  theme: {
    extend: {},
    colors: {
      'mid': '#263650',
      'ligh' : '#36415F',
      'whit':'#fff'
    },
  },
  variants: {},
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
}