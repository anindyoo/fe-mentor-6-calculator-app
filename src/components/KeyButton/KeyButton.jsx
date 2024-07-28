import useThemeStore from '../../store/themeStore';

const KeyButton = (props) => {
  const {
    keyButton,
  } = props;

  const {
    activeTheme,
  } = useThemeStore();

  const keysTheme = activeTheme.keys;
  const textTheme = activeTheme.text;

  return (
    <button
      type="button"
      onClick={() => {}}
      className={`
      KEY-BUTTON-COMPONENT
      h-16
      rounded-lg
      border-b-4
      ${(keyButton === 'RESET' || keyButton === '=') && 'col-span-2'}    
      ${(keyButton === 'RESET' || keyButton === 'DEL')
        ? `${keysTheme.secondary} ${keysTheme.secondaryShadow} ${textTheme.secondaryKey}`
        : `${keyButton === '='
          ? `${keysTheme.tertiary} ${keysTheme.tertiaryShadow} ${textTheme.calculateKey}`
          : `${keysTheme.primary} ${keysTheme.primaryShadow} ${textTheme.key}
        `}
      `}`}
    >
      <div className={`
      KEY-LABEL
      pt-1.5
      font-bold
      ${(keyButton === 'DEL' || keyButton === 'RESET' || keyButton === '=')
        ? 'text-[1.75rem]'
        : 'text-[2.5rem]/[1.25em]'
      }`}
      >
        {keyButton}
      </div>
    </button>
  );
};

export default KeyButton;
