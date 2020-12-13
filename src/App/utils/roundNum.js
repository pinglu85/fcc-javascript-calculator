const roundNum = (num) => {
  if (num === null) {
    return null;
  }

  const indexOfDecimalPoint = String(num).indexOf('.');
  if (indexOfDecimalPoint < 0) {
    return num;
  }
  const outputLimit = 16;
  const integerAndDecimalPartLen = indexOfDecimalPoint + 1;
  const exponent = outputLimit - integerAndDecimalPartLen;
  return Math.round(num * Math.pow(10, exponent)) / Math.pow(10, exponent);
};

export default roundNum;
