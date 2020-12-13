import checkCharIsOperator from './checkCharIsOperator';
import checkFormulaHasEqual from './checkFormulaHasEqual';

function updateFormulaWithNewOperator({ output, formula }, newOperator) {
  if (checkFormulaHasEqual(formula)) {
    return output + newOperator;
  }

  let lastCharInFormula = formula.slice(-1);
  const regex = /[+×÷−]/;
  const isNewOperatorSubtract = /−/.test(newOperator);

  while (
    checkCharIsOperator(lastCharInFormula, regex) &&
    !isNewOperatorSubtract
  ) {
    formula = formula.slice(0, -1);
    lastCharInFormula = formula.slice(-1);
  }
  return formula + newOperator;
}

export default updateFormulaWithNewOperator;
