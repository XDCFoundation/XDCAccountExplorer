import 'chart.js/auto';
import { isFinite } from 'lodash';
import { useState } from 'react';
import { Chart as ReactChart } from 'react-chartjs-2';
import { getChartOptions, mapToChartData } from './chart.helpers';
import { ChartSeries, Scales } from './chart.types';
import Legend, { LegendItem } from './legend/legend';

interface ChartProps {
  series: ChartSeries;
  scales: Scales;
  height: string | number;
}

function Chart({
  series, scales, height,
}: ChartProps) {
  const [hiddenDatasets, setHiddenDatasets] = useState<string[]>([]);

  const legendItems = series.datasets.map((dataset): LegendItem => {
    const value = Number(dataset.data[dataset.data.length - 1]);
    const previousValue = Number(dataset.data[dataset.data.length - 2]);

    return {
      label: dataset.label,
      value: isFinite(value) ? value : null,
      previousValue: isFinite(previousValue) ? previousValue : null,
      active: !hiddenDatasets.includes(dataset.label),
      color: dataset.color,
      type: dataset.type,
    };
  });

  const chartData = mapToChartData({ series, hiddenDatasets });

  const toggleDataSetVisibility = (legendItem: LegendItem) => {
    setHiddenDatasets((prev) => {
      if (prev.includes(legendItem.label)) {
        return prev.filter((dataSetLabel) => dataSetLabel !== legendItem.label);
      }
      return [...prev, legendItem.label];
    });
  };

  return (
    <>
      <Legend
        items={legendItems}
        onItemClick={toggleDataSetVisibility}
      />
      <div style={{ height }}>
        <ReactChart
          type="bar"
          options={getChartOptions({ scales })}
          data={chartData}
        />
      </div>
    </>
  );
}

export default Chart;
