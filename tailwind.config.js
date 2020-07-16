module.exports = {
  // theme: {
  //   extend: {
  //     flex: {
  //       'l-24': '0 0 6rem'
  //     },
  //     fontFamily: {
  //       serif: ['Arvo'],
  //       mono: ['Source Code Pro']
  //     },
  //     padding: {
  //       '1/2': '0.125rem'
  //     }
  //   }
  // },
  corePlugins: {
    preflight: false,
  },
  purge: false,
  variants: {},

  plugins: [require("@tailwindcss/ui")],
};
