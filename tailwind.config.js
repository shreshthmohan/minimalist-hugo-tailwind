
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
 darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  purge: false,
  variants: {
    extend: {
      textColor: ['visited']
    }
  },
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
    },
     colors: {
      ...defaultTheme.colors, 
      green: colors.lime,
    },
  },
};
