import { ChartData, ChartOptions } from 'chart.js';
import shortenNumber from 'util/number/shortenNumber';
import { ChartSeries, Scales } from './chart.types';

const FONT_COLOR = '#4A4F55CC';
const GRID_COLOR = '#E7EAF3';

const Y_SCALE_TICKS_COUNT = 6;
const X_SCALE_TICKS_PADDING = 50;

export const getChartOptions = ({ scales }: {
  scales: Scales
}): ChartOptions => {
  const {
    leftTitle, leftEnabled = false, rightTitle, rightEnabled = false,
  } = scales;

  const isRightScalesGridVisible = !leftEnabled;
  const isRightScalesTitleVisible = Boolean(rightTitle);
  const isLeftScalesTitleVisible = Boolean(leftTitle);

  return {
    // Chart should take full available width. Chart height is controlled by wrapper.
    maintainAspectRatio: false,
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
    // Default line chart styles
      line: {
        pointRadius: 0,
        tension: 0,
        borderWidth: 2,
      },
      // Default bar chart styles
      bar: {
        maxBarThickness: 10,
        categoryPercentage: 0.3,
      },
    },
    scales: {
    // Left y axis
      left: {
        display: leftEnabled,
        type: 'linear',
        position: 'left',
        title: {
          display: isLeftScalesTitleVisible,
          text: leftTitle,
        },
        grid: {
          drawBorder: false,
          color: GRID_COLOR,
        },
        ticks: {
          count: Y_SCALE_TICKS_COUNT,
          color: FONT_COLOR,
          callback: (value) => shortenNumber(Number.parseFloat(value.toString())),
        },
      },
      // Right y axis
      right: {
        display: rightEnabled,
        type: 'linear',
        position: 'right',
        title: {
          display: isRightScalesTitleVisible,
          text: rightTitle,
        },
        grid: {
          drawOnChartArea: isRightScalesGridVisible,
          drawBorder: false,
          color: GRID_COLOR,
        },
        ticks: {
          count: Y_SCALE_TICKS_COUNT,
          color: FONT_COLOR,
          callback: (value) => shortenNumber(Number.parseFloat(value.toString())),
        },
      },
      // X axis
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: FONT_COLOR,
          autoSkipPadding: X_SCALE_TICKS_PADDING,
          maxRotation: 0,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };
};

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
