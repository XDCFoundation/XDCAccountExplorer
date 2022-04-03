import { isUndefined } from 'lodash';

const thousandSeparator = ' ';
const thousandSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;

function formatNumber(numericValue: number | undefined): string {
  if (isUndefined(numericValue)) {
    return '-';
  }

  return Math.round(numericValue).toString().replace(thousandSeparatorRegex, thousandSeparator);
}

export default formatNumber;
