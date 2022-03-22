import numberAbbreviate from 'util/number-abbreviate';

describe('number abbreviation test', () => {
  it('should abbreviate numbers to show max 3 digits', () => {
    expect(numberAbbreviate(1)).toEqual('1');
    expect(numberAbbreviate(12)).toEqual('12');
    expect(numberAbbreviate(123)).toEqual('123');
    expect(numberAbbreviate(1234)).toEqual('1.23K');
    expect(numberAbbreviate(12345)).toEqual('12.3K');
    expect(numberAbbreviate(123456)).toEqual('123K');
    expect(numberAbbreviate(1234567)).toEqual('1.23M');
    expect(numberAbbreviate(12345678)).toEqual('12.3M');
    expect(numberAbbreviate(123456789)).toEqual('123M');
    expect(numberAbbreviate(1234567890)).toEqual('1.23B');
    expect(numberAbbreviate(12345678901)).toEqual('12.3B');
    expect(numberAbbreviate(123456789012)).toEqual('123B');
    expect(numberAbbreviate(1234567890123)).toEqual('1.23T');
    expect(numberAbbreviate(12345678901234)).toEqual('12.3T');
    expect(numberAbbreviate(123456789012345)).toEqual('123T');
    expect(numberAbbreviate(1234567890123456)).toEqual('1.23Q');
    expect(numberAbbreviate(1 * 10e15 + 2345678901234567)).toEqual('12.3Q');
    expect(numberAbbreviate(12 * 10e15 + 3456789012345678)).toEqual('123Q');
  });
});
