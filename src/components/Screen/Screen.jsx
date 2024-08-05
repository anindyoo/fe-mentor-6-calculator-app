import useCalculatorStore from '../../store/calculatorStore';
import useThemeStore from '../../store/themeStore';

const Screen = () => {
  const {
    activeTheme,
  } = useThemeStore();

  const {
    equationDisplay,
  } = useCalculatorStore();

  return (
    <div className={`
      SCREEN-COMPONENT
      SECTION-CENTER
      h-[5.5rem] md:h-32
      px-6 lg:px-8
      content-center
      rounded-lg
      ${activeTheme.bg.screen}`}
    >
      <div className="
        SCREEN-TEXT
        flex flex-row justify-end
        max-w-[29.875rem]
        text-[2.5rem] lg:text-[3.5rem] text-right font-bold
        text-nowrap overflow-hidden tracking-[0.01em]"
      >
        {equationDisplay.toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default Screen;
