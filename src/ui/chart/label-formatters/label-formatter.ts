import { ChartSeries } from 'ui/chart/chart.types';

abstract class LabelFormatter {
  abstract format(label: string): string;

  transpose(series: ChartSeries): ChartSeries {
    return {
      ...series,
      labels: series.labels.map((label: string) => this.format(label)),
    };
  }
}

export default LabelFormatter;
