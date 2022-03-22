import { abbreviateNumber } from 'js-abbreviation-number';

const symbols = ['', 'K', 'M', 'B', 'T', 'Q', 'Qi'];
const options = {
  padding: false,
  symbols,
};

const numberAbbreviate = (value: number) => {
  const result = abbreviateNumber(value, 2, options);

  // don't allow displaying more than 3 digits
  if (result.length > 5) {
    const correctedPrecision = 2 - (result.length - 5);
    return abbreviateNumber(value, correctedPrecision, options);
  }

  return result;
};

export default numberAbbreviate;
