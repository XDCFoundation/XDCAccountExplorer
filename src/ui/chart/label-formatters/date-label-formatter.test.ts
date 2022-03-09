import { ChartSeries } from 'ui/chart/chart.types';
import DateLabelFormatter from 'ui/chart/label-formatters/date-label-formatter';

describe('label transposing tests', () => {
  it('should get transposed to default format', () => {
    const series: ChartSeries = {
      datasets: [],
      labels: ['2021-01-09', '2021-01-10', '2021-01-11'],
    };
    const transposed = (new DateLabelFormatter()).transpose(series);

    expect(['1/9', '1/10', '1/11']).toEqual(transposed.labels);
  });

  it('should get transposed to given date format', () => {
    const series: ChartSeries = {
      datasets: [],
      labels: ['2021-01-09', '2021-01-10', '2021-01-11'],
    };
    const transposed = (new DateLabelFormatter('dd/M/y')).transpose(series);

    expect(['09/1/2021', '10/1/2021', '11/1/2021']).toEqual(transposed.labels);
  });
});
