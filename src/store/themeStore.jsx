import { create } from 'zustand';

const themeList = [
  {
    themeId: 0,
    bg: {
      page: 'bg-VDDBlueMain',
      keypad: 'bg-VDDBlueKeypad',
      screen: 'bg-VDDBlueScreen',
    },
    keys: {
      primary: 'bg-DDBlueKey',
      primaryShadow: 'bg-DDBKeyShadow',
      secondary: 'bg-LGOrangeKey',
      secondaryShadow: 'bg-GOrangKeyShadow',
      tertiary: 'bg-RedKey',
      tertiaryShadow: 'bg-DRedKeyShadow',
    },
    text: {
      key: 'text-VDGBlueText',
      secondaryKey: 'text-white',
      calculateKey: 'text-white',
      general: 'text-white',
    },
  },
  {
    themeId: 1,
    bg: {
      page: 'bg-LGrayMain',
      keypad: 'bg-GRedKeypad',
      screen: 'bg-VLGray',
    },
    keys: {
      primary: 'bg-DMCyanKey',
      primaryShadow: 'bg-VDCyanKeyShadow',
      secondary: 'bg-LGYellowKey',
      secondaryShadow: 'bg-DGOrangeKeyShadow',
      tertiary: 'bg-orangeKey',
      tertiaryShadow: 'bg-DOrangeKeyShadow',
    },
    text: {
      key: 'text-VDGYellowText',
      secondaryKey: 'text-white',
      calculateKey: 'text-white',
      general: 'text-VDGYellowText',
    },
  },
  {
    themeId: 2,
    bg: {
      page: 'bg-VDVioletMain',
      keypad: 'bg-VDVioletKeypad',
      screen: 'bg-VDVioletKeypad',
    },
    keys: {
      primary: 'bg-DVioletKey',
      primaryShadow: 'bg-VMagentaKeyShadow',
      secondary: 'bg-VDVioletKey',
      secondaryShadow: 'bg-DMagentaKeyShadow',
      tertiary: 'bg-PCyanKey',
      tertiaryShadow: 'bg-SCyanKeyShadow',
    },
    text: {
      key: 'text-LYellowtext',
      secondaryKey: 'text-white',
      calculateKey: 'text-VDBlueText',
      general: 'text-LYellowtext',
    },
  },
];

const useThemeStore = create((set) => ({
  activeThemeId: 0,
  activeTheme: themeList[0],
  setToggleTheme: () => {
    set((state) => ({
      activeThemeId: state.activeThemeId === 2
        ? 0
        : state.activeThemeId + 1,
      activeTheme: state.activeThemeId === 2
        ? themeList[0]
        : themeList[state.activeThemeId + 1],
    }));
  },
}));

export default useThemeStore;
