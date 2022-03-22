import { abbreviateNumber } from 'js-abbreviation-number';

const numberAbbreviate = (value: number) => abbreviateNumber(value, 2, {
  padding: false,
  symbols: ['', 'K', 'M', 'B', 'T', 'Q'],
});

export default numberAbbreviate;
