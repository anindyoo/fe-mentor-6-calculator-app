import Keypad from '../components/Keypad/Keypad';
import Screen from '../components/Screen/Screen';
import useThemeStore from '../store/themeStore';

const Home = () => {
  const {
    activeTheme,
  } = useThemeStore();

  return (
    <div className={`
    HOME
    SECTION-CENTER
    ${activeTheme.bg.page}`}
    >
      <div className="
      CALCULATOR-WRAPPER
      flex flex-col gap-6
      mt-7"
      >
        <Screen />
        <Keypad />
      </div>
    </div>
  );
};

export default Home;
