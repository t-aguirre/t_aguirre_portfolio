module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {

      fontFamily: {
        ibmPlexSans: ['IBM Plex Sans', 'sans-serif'],
        proximaNova: ['proxima-nova', 'sans-serif'],
        bdbrick: ['bd-brick', 'sans-serif'],
      },

      colors: {
        secondary: '#a98e5d',
      },

      screens:{
        '3xl': '1600px',
      },

      gridRowStart: {
        '8': '8',
        '9': '9',
      },

      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },

      textUnderlineOffset: {
          12: '12px',
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
