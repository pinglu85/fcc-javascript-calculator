import updateStateWithNewDigit from './utils/updateStateWithNewDigit';
import updateFormulaWithNewOperator from './utils/updateFormulaWithNewOperator';
import computeResult from './utils/computeResult';
import {
  DIGIT_ENTERED,
  OPERATOR_ENTERED,
  COMPUTE_RESULT,
  CLEAR_ALL,
  RESET_IS_DIGIT_LIMIT_MET,
} from './actionTypes';

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case DIGIT_ENTERED:
      return updateStateWithNewDigit(state, action.payload);
    case OPERATOR_ENTERED:
      return {
        ...state,
        output: action.payload,
        formula: updateFormulaWithNewOperator(state, action.payload),
      };
    case COMPUTE_RESULT:
      const result = computeResult(state.formula);
      return {
        ...state,
        output: result ? `${result}` : state.output,
        formula: result ? `${state.formula}=${result}` : state.formula,
      };
    case CLEAR_ALL:
      return {
        ...state,
        output: '0',
        formula: '',
      };
    case RESET_IS_DIGIT_LIMIT_MET:
      return {
        ...state,
        isDigitLimitMet: false,
      };
    default:
      throw new Error('Should not reach here');
  }
};

export default calculatorReducer;
