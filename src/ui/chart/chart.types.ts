import { ChartType } from 'chart.js';

export enum Colors {
  blue = '#5e80ab',
  green = '#aedfd2',
  orange = '#f7b68f',
}

export type YAxis = 'left' | 'right';

export interface Scales {
  left?: string,
  right?: string,
}

export interface ChartDataset {
  type: ChartType;
  label: string;
  color: string;
  yAxis: YAxis;
  data: number[];
}

export interface ChartSeries {
  datasets: ChartDataset[];
  labels: string[];
}
