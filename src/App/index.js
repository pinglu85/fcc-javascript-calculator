import { useReducer, useEffect } from 'react';

import calculatorReducer from './calculatorReducer';
import {
  DIGIT_ENTERED,
  OPERATOR_ENTERED,
  COMPUTE_RESULT,
  CLEAR_ALL,
  RESET_IS_DIGIT_LIMIT_MET,
} from './actionTypes';
import Display from '../Display';
import SecondaryOperators from '../SecondaryOperators';
import MainOperators from '../MainOperators';
import Digits from '../Digits';
import styles from './style.module.css';

const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    output: '0',
    formula: '',
    isDigitLimitMet: false,
  });

  const handleClickDigit = (digit) => {
    dispatch({ type: DIGIT_ENTERED, payload: digit });
  };

  const handleClickOperator = (operator) => {
    dispatch({ type: OPERATOR_ENTERED, payload: operator });
  };

  const handleComputeResult = () => {
    dispatch({ type: COMPUTE_RESULT });
  };

  const handleClearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };

  useEffect(() => {
    let timer;

    if (state.isDigitLimitMet) {
      timer = setTimeout(() => {
        dispatch({ type: RESET_IS_DIGIT_LIMIT_MET });
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state.isDigitLimitMet]);

  return (
    <div className={styles.App}>
      <Display classes="formulaDisplay">{state.formula}</Display>
      <Display id="display" classes="outputDisplay">
        {state.isDigitLimitMet ? 'DIGIT LIMIT MET' : state.output}
      </Display>
      <SecondaryOperators
        onClearAll={handleClearAll}
        onClickOperator={handleClickOperator}
      />
      <MainOperators
        onClickOperator={handleClickOperator}
        onComputeResult={handleComputeResult}
      />
      <Digits onClickDigit={handleClickDigit} />
    </div>
  );
};

export default App;
