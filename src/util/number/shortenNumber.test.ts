import shortenNumber from 'util/number/shortenNumber';

describe('number abbreviation test', () => {
  it('should abbreviate numbers to show max 3 digits', () => {
    expect(shortenNumber(-12 * 10e15 - 3456789012345678)).toEqual('-123Q');
    expect(shortenNumber(-1 * 10e15 - 2345678901234567)).toEqual('-12.3Q');
    expect(shortenNumber(-1234567890123456)).toEqual('-1.23Q');
    expect(shortenNumber(-123456789012345)).toEqual('-123T');
    expect(shortenNumber(-12345678901234)).toEqual('-12.3T');
    expect(shortenNumber(-1234567890123)).toEqual('-1.23T');
    expect(shortenNumber(-123456789012)).toEqual('-123B');
    expect(shortenNumber(-12345678901)).toEqual('-12.3B');
    expect(shortenNumber(-1234567890)).toEqual('-1.23B');
    expect(shortenNumber(-123456789)).toEqual('-123M');
    expect(shortenNumber(-12345678)).toEqual('-12.3M');
    expect(shortenNumber(-1234567)).toEqual('-1.23M');
    expect(shortenNumber(-123456)).toEqual('-123K');
    expect(shortenNumber(-12345)).toEqual('-12.3K');
    expect(shortenNumber(-1234)).toEqual('-1.23K');
    expect(shortenNumber(-123)).toEqual('-123');
    expect(shortenNumber(-12)).toEqual('-12');
    expect(shortenNumber(-1)).toEqual('-1');
    expect(shortenNumber(0)).toEqual('0');
    expect(shortenNumber(1)).toEqual('1');
    expect(shortenNumber(12)).toEqual('12');
    expect(shortenNumber(123)).toEqual('123');
    expect(shortenNumber(1234)).toEqual('1.23K');
    expect(shortenNumber(12345)).toEqual('12.3K');
    expect(shortenNumber(123456)).toEqual('123K');
    expect(shortenNumber(1234567)).toEqual('1.23M');
    expect(shortenNumber(12345678)).toEqual('12.3M');
    expect(shortenNumber(123456789)).toEqual('123M');
    expect(shortenNumber(1234567890)).toEqual('1.23B');
    expect(shortenNumber(12345678901)).toEqual('12.3B');
    expect(shortenNumber(123456789012)).toEqual('123B');
    expect(shortenNumber(1234567890123)).toEqual('1.23T');
    expect(shortenNumber(12345678901234)).toEqual('12.3T');
    expect(shortenNumber(123456789012345)).toEqual('123T');
    expect(shortenNumber(1234567890123456)).toEqual('1.23Q');
    expect(shortenNumber(1 * 10e15 + 2345678901234567)).toEqual('12.3Q');
    expect(shortenNumber(12 * 10e15 + 3456789012345678)).toEqual('123Q');
  });
});
