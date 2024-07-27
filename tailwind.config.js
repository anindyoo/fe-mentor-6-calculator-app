/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // THEME 1
        // BACKGROUNDS
        VDDBlueMain: 'hsla(222, 26%, 31%, 1)',
        VDDBlueKeypad: 'hsla(223, 31%, 20%, 1)',
        VDDBlueScreen: 'hsla(224, 36%, 15%, 1)',
        // KEYS
        LGOrangeKey: 'hsla(30, 25%, 89%, 1)',
        GOrangKeyShadow: 'hsla(28, 16%, 65%, 1)',
        GOrangKeyHover: 'hsla(0, 0%, 100%, 1)',
        DDBlueKey: 'hsla(225, 21%, 49%, 1)',
        DDBKeyShadow: 'hsla(224, 28%, 35%, 1)',
        DDBKeyHover: 'hsla(224, 51%, 76%, 1)',
        RedKey: 'hsla(6, 63%, 50%, 1)',
        DRedKeyShadow: 'hsla(6, 70%, 34%, 1)',
        DRedKeyHover: 'hsla(6, 93%, 67%, 1)',
        // TEXT
        VDGBlueText: 'hsla(221, 14%, 31%, 1)',

        // THEME 2
        // BACKGROUNDS
        LGrayMain: 'hsla(0, 0%, 90%, 1)',
        GRedKeypad: 'hsla(0, 5%, 81%, 1) ',
        VLGray: 'hsla(0, 0%, 93%, 1)',
        // KEYS
        LGYellowKey: 'hsla(45, 7%, 89%, 1)',
        DGOrangeKeyShadow: 'hsla(35, 11%, 61%, 1)',
        DGOrangeKeyHover: 'hsla(0, 0%, 100%, 1)',
        DMCyanKey: 'hsla(185, 42%, 37%, 1)',
        VDCyanKeyShadow: 'hsla(185, 58%, 25%, 1)',
        VDCyanKeyHover: 'hsla(185, 41%, 56%, 1)',
        orangeKey: 'hsla(25, 98%, 40%, 1)',
        DOrangeKeyShadow: 'hsla(25, 99%, 27%, 1)',
        DOrangeKeyHover: 'hsla(25, 100%, 61%, 1)',
        // TEXT
        VDGYellowText: 'hsla(60, 10%, 19%, 1)',

        // THEME 3
        // BACKGROUNDS
        VDVioletMain: 'hsla(268, 75%, 9%, 1)',
        VDVioletKeypad: 'hsla(268, 71%, 12%, 1)',
        // KEYS
        VDVioletKey: 'hsla(268, 47%, 21%, 1)',
        DMagentaKeyShadow: 'hsla(290, 70%, 36%, 1)',
        DMagentaKeyHover: 'hsla(267, 54%, 44%, 1)',
        DVioletKey: 'hsla(281, 89%, 26%, 1)',
        VMagentaKeyShadow: 'hsla(285, 91%, 52%, 1)',
        VMagentaKeyHover: 'hsla(281, 55%, 44%, 1)',
        PCyanKey: 'hsla(176, 100%, 44%, 1)',
        SCyanKeyShadow: 'hsla(177, 92%, 70%, 1)',
        SCyanKeyHover: 'hsla(177, 100%, 79%, 1)',
        // TEXT
        LYellowtext: 'hsla(52, 100%, 62%, 1)',
        VDBlueText: 'hsla(198, 20%, 13%, 1)',
      },
    },
  },
  plugins: [],
};
