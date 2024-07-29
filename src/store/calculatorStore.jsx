import { create } from 'zustand';

const useCalculatorStore = create((set) => ({
  equationDisplay: '0',
  alreadyDecimal: false,
  alreadyOperator: false,
  setEquationInput: (input) => {
    set((state) => {
      const stateObject = {
        equationDisplay: state.equationDisplay,
        alreadyDecimal: state.alreadyDecimal,
        alreadyOperator: state.alreadyOperator,
      };

      const lastInput = stateObject.equationDisplay.slice(-1);
      const displayLength = stateObject.equationDisplay.length;
      const isOperator = (x) => /[+\-×/]/.test(x);
      const filteredEquation = stateObject.equationDisplay.replaceAll('×', '*');
      // eslint-disable-next-line no-eval
      const evaluate = eval;

      switch (input) {
        case '=':
          if (!isOperator(lastInput)) {
            stateObject.equationDisplay = evaluate(filteredEquation).toString();
            stateObject.alreadyDecimal = stateObject.equationDisplay.includes('.');
            stateObject.alreadyOperator = false;
          }
          break;
        case 'DEL':
          stateObject.equationDisplay = stateObject.equationDisplay.substring(0, displayLength - 1);
          stateObject.alreadyOperator = isOperator(lastInput) ? false : stateObject.alreadyOperator;
          stateObject.alreadyDecimal = lastInput === '.' ? false : stateObject.alreadyDecimal;
          break;
        case 'RESET':
          stateObject.equationDisplay = '0';
          stateObject.alreadyDecimal = false;
          stateObject.alreadyOperator = false;
          break;
        case '.':
          if (stateObject.alreadyDecimal === false) {
            const isNotaString = Number.isNaN(Number(lastInput));
            stateObject.equationDisplay = isNotaString
              ? `${stateObject.equationDisplay}0.`
              : stateObject.equationDisplay + input;
            stateObject.alreadyOperator = true;
          }
          stateObject.alreadyDecimal = true;
          break;
        case '-':
          stateObject.equationDisplay = (lastInput === '-' || lastInput === '+' || lastInput === '.')
            ? stateObject.equationDisplay.slice(0, -1) + input
            : stateObject.equationDisplay + input;
          stateObject.alreadyOperator = true;
          stateObject.alreadyDecimal = false;
          break;
        case '+':
        case '/':
        case '×':
          if (lastInput === '-' && !(/\d/.test(stateObject.equationDisplay.slice(-2)))) {
            break;
          } else if (isOperator(lastInput) === isOperator(input)) {
            stateObject.equationDisplay = stateObject.equationDisplay.slice(0, -1) + input;
          } else {
            stateObject.equationDisplay = stateObject.alreadyOperator === false
              ? stateObject.equationDisplay + input
              : stateObject.equationDisplay.slice(0, -1) + input;
            stateObject.alreadyOperator = true;
            stateObject.alreadyDecimal = false;
          }
          break;
        default:
          stateObject.equationDisplay = stateObject.equationDisplay === '0'
            ? input
            : stateObject.equationDisplay + input;
          stateObject.alreadyOperator = false;
          break;
      }
      stateObject.equationDisplay = stateObject.equationDisplay === ''
        ? '0' : stateObject.equationDisplay;
      return stateObject;
    });
  },
}));

export default useCalculatorStore;
