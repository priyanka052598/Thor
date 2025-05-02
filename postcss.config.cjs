// postcss.config.cjs
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // Update this line to use the correct plugin
    autoprefixer: {},
  },
};
