import { useEffect, useRef, useState } from 'react';
import { set } from 'lodash';
import { Chart as ReactChart } from 'react-chartjs-2';
import {
  ChartLegendItem,
  ChartJsData,
  ChartData,
  ChartJsOptions,
  ChartOptions,
  ChartPlugin, ChartJsDataset,
} from './types';

enum Colors {
  blue = '#5e80ab',
  green = '#aedfd2',
  orange = '#f7b68f',
}

interface ChartPropsScales {
  left?: string,
  right?: string,
}

interface ChartProps {
  data: ChartData,
  scales: ChartPropsScales,
  height: string | number,
}

function Chart(props: ChartProps) {
  // eslint-disable-next-line
  const chartRef = useRef<any>(null);
  const { scales, data, height } = props;
  const [legend, setLegend] = useState<ChartLegendItem[]>([]);
  const [options, setOptions] = useState<ChartOptions>({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        position: 'nearest',
      },
    },
    scales: {
      left: {
        display: true,
        type: 'linear',
        position: 'left',
        align: 'center',
        title: {
          display: true,
          text: '',
        },
      },
      right: {
        display: true,
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: '',
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
  const transposeDataObject = (dataObj: ChartData): ChartData => {
    const obj = dataObj?.datasets ? { ...dataObj } : { datasets: [] };

    obj.datasets = obj.datasets.map((dataset) => {
      const color = dataset.color || dataset.backgroundColor || dataset.borderColor;
      const ds = { ...dataset };

      delete ds.color;
      ds.backgroundColor = color;
      ds.borderColor = color;

      if (ds.type === 'line') {
        ds.pointRadius = ds.pointRadius || 1;
        ds.pointRadius = ds.pointRadius || 6;

        ds.tension = ds.tension || 0.1;
      }

      return ds;
    });

    return obj;
  };
  const handleLegendClick = (legendItem: ChartLegendItem) => {
    const chart = chartRef?.current;
    if (chart) {
      let displayAxis = false;
      const axisId = chart.data.datasets[legendItem.datasetIndex].yAxisID;
      chart.data.datasets = chart.data.datasets.map((dataset: ChartJsDataset) => {
        const ds = { ...dataset };
        if (ds.label === legendItem.text) {
          ds.hidden = !ds.hidden;
        }
        if (ds.yAxisID === axisId) {
          displayAxis = displayAxis || !ds.hidden;
        }

        return ds;
      });

      options.scales[axisId].display = displayAxis;
      chart.update();
      setLegend(chart.legend.legendItems);
    }
  };

  // on chart mount
  useEffect(() => {
    const chart = chartRef?.current;
    if (chart) {
      setLegend(chart.legend.legendItems);
      if (scales) {
        const o = { ...options };
        set(o, 'scales.left.title.text', scales.left || '');
        set(o, 'scales.right.title.text', scales.right || '');
        setOptions(o);

        chart.update();
      }
    }
  }, [scales]);

  const chartData = transposeDataObject(data);
  const plugins: ChartPlugin[] = [/* chartScaleIconPlugin */];

  return (
    <>
      <div className="chart-legend">
        {legend.length > 0 && legend.map((item: ChartLegendItem, idx: number) => (
          <div
            role="link"
            tabIndex={idx}
            key={item.text}
            onClick={() => handleLegendClick(item)}
            onKeyDown={() => handleLegendClick(item)}
            className={`item ${item.hidden ? 'inactive' : ''}`}
          >
            <div className="color">
              <div style={{ backgroundColor: item.fillStyle as string }} />
            </div>
            <div className="label">{item.text}</div>
            <div className="amount">123 456</div>
            <div className={`change ${item.datasetIndex % 2 ? 'down' : 'up'}`}>+23</div>
          </div>
        ))}
      </div>
      <ReactChart
        type="bar"
        ref={chartRef}
        options={options as ChartJsOptions}
        data={chartData as ChartJsData}
        plugins={plugins}
        height={height}
      />
    </>
  );
}

export default Chart;

export { Colors };
