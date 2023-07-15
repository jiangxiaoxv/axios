const plugin = require('tailwindcss/plugin')
// const resolveConfig = require('tailwindcss/resolveConfig')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
// const fullConfig = resolveConfig()

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx}', './main.vue'],
  // presets: [require('./tailwind.config')],
  theme: {
    extend: {
      spacing: {
        ...defaultTheme.spacing,
        1: '4px',
        2: '8px',
        50: '200px',
        200: '800px',
      },
      borderRadius: {
        '4xl': '8px',
      },
      screens: {
        // sm: { min: '640px', max: '767px' },
        sm: [{ min: '640px', max: '767px' }, { min: '868px' }],
        ...defaultTheme.screens,
      },
      colors: {
        while: colors.white,
      },
    },
    // screens: {},
    // spacing,
  },

  prefix: 'tw-',
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addutilities,
      theme,
      addVariant,
    }) {
      addBase({
        h3: {
          fontSize: theme('fontSize.xl'),
          width: '100px',
          height: '100px',
          backgroundColor: theme('colors.green.500'),
        },
      })
    }),
  ],
  corePlugins: {
    preflight: false,
  },
}
