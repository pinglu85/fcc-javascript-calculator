const convertFormulaToArray = (formula) => {
  return formula
    .split(/([+−×÷%])/)
    .filter((char) => char !== '')
    .reduce((resultArray, el, index) => {
      if (index === 0) {
        return [...resultArray, el];
      }

      const prevEl = resultArray[index - 1];
      if (prevEl !== '−') {
        return [...resultArray, el];
      }

      resultArray[index - 1] = `-${el}`;
      return resultArray;
    }, [])
    .map((el) => {
      if (!isNaN(el)) {
        return Number(el);
      }
      return el;
    });
};

export default convertFormulaToArray;
