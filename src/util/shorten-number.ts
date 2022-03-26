import { abbreviateNumber } from 'js-abbreviation-number';

const symbols = ['', 'K', 'M', 'B', 'T', 'Q', 'Qi'];
const options = {
  padding: false,
  symbols,
};

const shortenNumber = (value: number) => {
  const result = abbreviateNumber(value, 2, options);

  // don't allow displaying more than 3 digits (ie.: -1.23G, 23.5K or 412Q)
  const maxLength = value < 0 ? 6 : 5;
  if (result.length > maxLength) {
    const correctedPrecision = 2 - (result.length - maxLength);
    return abbreviateNumber(value, correctedPrecision, options);
  }

  return result;
};

export default shortenNumber;
