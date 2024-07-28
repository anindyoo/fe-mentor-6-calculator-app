import useThemeStore from '../../store/themeStore';

const Screen = () => {
  const {
    activeTheme,
  } = useThemeStore();

  return (
    <div className={`
    SCREEN-COMPONENT
    SECTION-CENTER
    h-32
    px-8
    content-center
    rounded-lg
    ${activeTheme.bg.screen}`}
    >
      <div className="
      SCREEN-TEXT
      flex flex-row justify-end
      max-w-[29.875rem]
      text-[3.5rem] text-right font-bold
      text-nowrap overflow-hidden tracking-[-0.02em]"
      >
        12+34x45-343/343+278
      </div>
    </div>
  );
};

export default Screen;
