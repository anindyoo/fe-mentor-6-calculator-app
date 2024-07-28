import useCalculatorStore from '../../store/calculatorStore';
import useThemeStore from '../../store/themeStore';

const Screen = () => {
  const {
    activeTheme,
  } = useThemeStore();

  const {
    equationDisplay,
    alreadyDecimal,
    alreadyOperator,
  } = useCalculatorStore();

  return (
    <>
      <pre>
        alreadyDecimal:
        {JSON.stringify(alreadyDecimal, null, 1)}
      </pre>
      <pre>
        alreadyOperator:
        {JSON.stringify(alreadyOperator, null, 1)}
      </pre>
      <pre>
        {JSON.stringify(equationDisplay, null, 1)}
      </pre>
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
          {equationDisplay}
        </div>
      </div>
    </>
  );
};

export default Screen;
