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

      switch (input) {
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
      return stateObject;
    });
  },
}));

export default useCalculatorStore;
