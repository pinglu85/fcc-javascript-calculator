const checkCharIsOperator = (char, regex = /[+−×÷%]/) => {
  return regex.test(char);
};

export default checkCharIsOperator;
