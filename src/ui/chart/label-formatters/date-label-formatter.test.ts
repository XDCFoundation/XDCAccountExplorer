import { ChartSeries } from 'ui/chart/chart.types';
import DateLabelFormatter from 'ui/chart/label-formatters/date-label-formatter';

describe('label transposing tests', () => {
  it('should get transposed to given date format', () => {
    const series: ChartSeries = {
      datasets: [],
      labels: ['2021-01-09', '2021-01-10', '2021-01-11'],
    };
    const transposed = (new DateLabelFormatter({ day: 'numeric', month: 'long' })).transpose(series);

    expect(['January 9', 'January 10', 'January 11']).toEqual(transposed.labels);
  });
});
