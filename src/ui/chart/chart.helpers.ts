import { ChartData, ChartOptions } from 'chart.js';
import { ChartSeries, Scales } from './chart.types';

export const getChartOptions = ({ scales }: {
  scales: Scales
}): ChartOptions => ({
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      position: 'nearest',
    },
  },
  datasets: {
    line: {
      pointRadius: 6,
      tension: 0.1,
    },
  },
  scales: {
    left: {
      display: Boolean(scales.left),
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: scales.left,
      },
    },
    right: {
      display: Boolean(scales.right),
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: scales.right,
      },
      grid: {
        drawOnChartArea: false,
      },
    },
    x: {
      display: false,
    },
  },
});

export const mapToChartData = ({
  series,
  hiddenDatasets,
}: {
  series: ChartSeries;
  hiddenDatasets: string[];
}): ChartData => ({
  datasets: series.datasets.map(({
    color, data, label, type, yAxis,
  }) => ({
    backgroundColor: color,
    borderColor: color,
    data,
    label,
    type,
    yAxisID: yAxis,
    hidden: hiddenDatasets.includes(label),
  })),
  labels: series.labels,
});
