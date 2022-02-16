import { ChartType } from 'chart.js';

export enum Colors {
  blue = '#1D4E89',
  green = '#7DCFB6',
  orange = '#F79256',
}

export type YAxis = 'left' | 'right';

export interface Scales {
  leftTitle?: string;
  leftEnabled?: boolean;
  rightTitle?: string;
  rightEnabled?: boolean;
}

export interface ChartDataset {
  type: ChartType;
  label: string;
  color: Colors;
  yAxis: YAxis;
  data: number[];
}

export interface ChartSeries {
  datasets: ChartDataset[];
  labels: string[];
}
