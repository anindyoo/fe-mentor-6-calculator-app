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
      primary: 'bg-LGOrangeKey',
      primaryShadow: 'border-GOrangKeyShadow',
      secondary: 'bg-DDBlueKey',
      secondaryShadow: 'border-DDBKeyShadow',
      tertiary: 'bg-RedKey',
      tertiaryShadow: 'border-DRedKeyShadow',
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
      primary: 'bg-LGYellowKey',
      primaryShadow: 'border-DGOrangeKeyShadow',
      secondary: 'bg-DMCyanKey',
      secondaryShadow: 'border-VDCyanKeyShadow',
      tertiary: 'bg-orangeKey',
      tertiaryShadow: 'border-DOrangeKeyShadow',
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
      primary: 'bg-VDVioletKey',
      primaryShadow: 'border-DMagentaKeyShadow',
      secondary: 'bg-DVioletKey',
      secondaryShadow: 'border-VMagentaKeyShadow',
      tertiary: 'bg-PCyanKey',
      tertiaryShadow: 'border-SCyanKeyShadow',
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
