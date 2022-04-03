import formatNumber from './formatNumber';

describe('formatNumber', () => {
  const cases: [number | undefined, string][] = [
    [1, '1'],
    [12, '12'],
    [123, '123'],
    [1234, '1 234'],
    [12345, '12 345'],
    [123456, '123 456'],
    [-1, '-1'],
    [-1234, '-1 234'],
    [1.123456, '1'],
    [1234.5, '1 235'],
    [undefined, '-'],
  ];

  it.each(cases)('formatNumber(%s) should equal %s', (numericValue, stringifiedValue) => {
    expect(formatNumber(numericValue)).toBe(stringifiedValue);
  });
});
