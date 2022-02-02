import { _DeepPartialObject } from 'chart.js/types/utils';
import {
  BarControllerChartOptions,
  BarControllerDatasetOptions,
  CommonElementOptions,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  ExtendedPlugin,
  LegendItem as ChartLegendItem,
  LineOptions,
  PluginChartOptions,
  PointPrefixedOptions,
  ScaleChartOptions,
  TooltipModel,
} from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';

type ChartJsDataset = _DeepPartialObject<
BarControllerDatasetOptions &
CommonElementOptions &
LineOptions &
PointPrefixedOptions
> & {
  color?: string,
  data: number[],
};

interface ChartData {
  labels?: string[],
  datasets: Dataset[]
}

interface ChartJsData {
  labels?: string[],
  datasets: ChartJsDataset[]
}

interface ChartScalesOptions {
  display: boolean,
  type?: string,
  position?: string,
  align?: string,
  title?: {
    display?: boolean,
    text?: string,
  },
  grid?: {
    drawOnChartArea?: boolean,
  },
}

type ChartJsOptions = _DeepPartialObject<CoreChartOptions<'bar'> & ElementChartOptions<'bar'> & PluginChartOptions<'bar'> & DatasetChartOptions<'bar'> & ScaleChartOptions<'bar'> & BarControllerChartOptions>;

interface ChartOptions {
  plugins?: {
    legend: {
      display: boolean,
    },
    tooltip: {
      mode: string,
      position: string,
    }
  },
  scales: {
    [key: string]: ChartScalesOptions,
  },
}

type ChartPlugin = ExtendedPlugin<'bar', AnyObject, TooltipModel<'bar'>> & {
  id: string,
};

export default {};

export {
  ChartLegendItem,
  ChartJsDataset,
  ChartJsData,
  ChartData,
  ChartJsOptions,
  ChartOptions,
  ChartPlugin,
};
