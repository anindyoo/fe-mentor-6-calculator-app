import useThemeStore from '../../store/themeStore';
import KeyButton from '../KeyButton/KeyButton';

const keyButtonData = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '/', '×',
  'RESET', '=',
];

const Keypad = () => {
  const {
    activeTheme,
  } = useThemeStore();

  return (
    <div className={`
    KEYPAD-COMPONENT
    SECTION-CENTER
    grid grid-cols-4 gap-6
    pl-[1.875rem] pr-8 py-8
    rounded-lg
    ${activeTheme.bg.keypad}`}
    >
      {keyButtonData.map((keyButton) => <KeyButton key={keyButton} keyButton={keyButton} />)}
    </div>
  );
};

export default Keypad;
