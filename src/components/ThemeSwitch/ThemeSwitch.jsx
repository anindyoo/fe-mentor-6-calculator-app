import useThemeStore from '../../store/themeStore';

const ThemeSwitch = () => {
  const {
    activeTheme,
    activeThemeId,
    setToggleTheme,
  } = useThemeStore();

  const handleSwitchClick = () => setToggleTheme();

  return (
    <div className="
    THEME-SWITCH-COMPONENT
    flex flex-row justify-end
    gap-7"
    >
      <div className="THEME-LABEL mt-7 text-xs font-bold tracking-[0.08rem]">
        THEME
      </div>
      <div className="SWITCH-TOGGLER-AND-LABELS">
        <div className="
        SWITCH-LABELS
        flex flex-row justify-between
        px-2
        text-base/[1.25em] font-bold"
        >
          <span className="pl-[0.188rem]">1</span>
          <span className="pl-0.5">2</span>
          <span className="pr-0.5">3</span>
        </div>
        <button
          type="button"
          onClick={handleSwitchClick}
          className={`
          THEME-SWITCH
          w-[4.5rem] h-[1.625rem]
          rounded-full
          ${activeTheme.bg.keypad}`}
        >
          <div className="relative w-[4.5rem] h-[1.625rem] pt-1">
            <div
              className={`
              SWITCH-CIRCLE
              absolute
              w-[1.125rem] h-[1.125rem] 
              rounded-full
              transition-transform ease-in-out duration-200
              ${activeTheme.keys.tertiary}
              ${activeThemeId === 0 && 'translate-x-[5px]'}
              ${activeThemeId === 1 && 'translate-x-[27px]'}
              ${activeThemeId === 2 && 'translate-x-[49px]'}`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
