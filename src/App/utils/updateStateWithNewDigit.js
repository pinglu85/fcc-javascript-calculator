import checkCharIsOperator from './checkCharIsOperator';
import checkFormulaHasEqual from './checkFormulaHasEqual';

const updateStateWithNewDigit = (state, newDigit) => {
  const { output, formula } = state;

  if (output === '0' && newDigit === '0') {
    return { ...state, formula: output };
  }

  if (newDigit === '.' && /\./.test(output)) {
    return state;
  }

  if (checkFormulaHasEqual(formula) || (output === '0' && newDigit !== '.')) {
    return { ...state, output: newDigit, formula: newDigit };
  }

  const lastCharInOutput = output.slice(-1);
  const isLastCharOperator = checkCharIsOperator(lastCharInOutput);
  if (isLastCharOperator) {
    return { ...state, output: newDigit, formula: formula + newDigit };
  }

  const newOutput = output + newDigit;
  return {
    output: newOutput.length > 16 ? output : newOutput,
    formula: newOutput.length > 16 ? formula : formula + newDigit,
    isDigitLimitMet: newOutput.length > 16,
  };
};

export default updateStateWithNewDigit;
