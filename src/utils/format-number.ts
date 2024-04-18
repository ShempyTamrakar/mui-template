import numeral from 'numeral';
type FormatFunction = (number: number) => string;

export const fNumber: FormatFunction = (number) => {
  return numeral(number).format();
};

export const fCurrency: FormatFunction = (number) => {
  const format = number ? numeral(number).format('$0,0.00') : '';
  return result(format, '.00');
};

export const fPercent: FormatFunction = (number) => {
  const format = number ? numeral(number / 100).format('0.0%') : '';
  return result(format, '.0');
};

export const fShortenNumber: FormatFunction = (number) => {
  const format = number ? numeral(number).format('0.00a') : '';
  return result(format, '.00');
};

export const fData: FormatFunction = (number) => {
  const format = number ? numeral(number).format('0.0 b') : '';
  return result(format, '.0');
};

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, '') : format;
};
