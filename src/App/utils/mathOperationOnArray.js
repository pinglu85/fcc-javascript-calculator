import roundNum from './roundNum';

const mathOperationOnArray = (array, operator) => {
  const result = [...array];
  const countOfRemovedNum = operator === '%' ? 1 : 2;
  let indexOfOperator = result.indexOf(operator);

  while (indexOfOperator > 0) {
    const prevNumber = result[indexOfOperator - 1];
    const nextNumber = result[indexOfOperator + 1];

    switch (operator) {
      case '%':
        result[indexOfOperator - 1] = roundNum(prevNumber / 100);
        break;
      case '×':
        result[indexOfOperator - 1] = roundNum(prevNumber * nextNumber);
        break;
      case '÷':
        result[indexOfOperator - 1] = roundNum(prevNumber / nextNumber);
        break;
      default:
      // do nothing
    }

    result.splice(indexOfOperator, countOfRemovedNum);
    indexOfOperator = result.indexOf(operator);
  }

  return result;
};

export default mathOperationOnArray;
