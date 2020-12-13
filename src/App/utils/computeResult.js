import checkCharIsOperator from './checkCharIsOperator';
import convertFormulaToArray from './convertFormulaToArray';
import mathOperationOnArray from './mathOperationOnArray';
import roundNum from './roundNum';

function computeResult(formula) {
  if (!formula) {
    return null;
  }

  const isFirstCharOperator = checkCharIsOperator(formula.charAt(0));
  if (isFirstCharOperator) {
    return null;
  }

  let sanitizedFormula = formula;

  const isLastCharOperator = checkCharIsOperator(formula.slice(-1), /[+−×÷]/);
  if (isLastCharOperator) {
    sanitizedFormula = formula.slice(0, -1);
  }

  const sanitizedFormulaArray = convertFormulaToArray(sanitizedFormula);

  let updatedArray = mathOperationOnArray(sanitizedFormulaArray, '%');
  updatedArray = mathOperationOnArray(updatedArray, '×');
  updatedArray = mathOperationOnArray(updatedArray, '÷');

  return updatedArray.reduce((acc, el, index, arr) => {
    if (el === '+') {
      return acc;
    }
    const prevEl = arr[index - 1];

    if (prevEl !== '+' && el >= 0) {
      return null;
    }

    return roundNum(acc + el);
  });
}

export default computeResult;
