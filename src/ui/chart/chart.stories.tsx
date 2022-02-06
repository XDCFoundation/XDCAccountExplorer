import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { times } from 'lodash';
import faker from '@faker-js/faker';
import { addDays, format } from 'date-fns';
import Chart from './chart';
import { Colors } from './chart.types';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

export default {
  title: 'UI/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const LineChart = Template.bind({});
LineChart.args = {
  series: {
    datasets: [
      {
        type: 'line',
        label: 'Line 1',
        color: Colors.orange,
        yAxis: 'right',
        data: times(7, () => faker.datatype.number({ min: 100, max: 5000 })),
      },
      {
        type: 'line',
        label: 'Line 2',
        color: Colors.green,
        yAxis: 'right',
        data: times(7, () => faker.datatype.number({ min: 100, max: 2000 })),
      },
      {
        type: 'line',
        label: 'Line 3',
        color: Colors.blue,
        yAxis: 'right',
        data: times(7, () => faker.datatype.number({ min: 100, max: 2000 })),
      },
    ],
    labels: times(7, (i) => format(addDays(new Date(), i), 'dd/MM')),
  },
  height: 300,
  scales: {
    rightEnabled: true,
  },
};

export const MixedChart = Template.bind({});
MixedChart.args = {
  series: {
    datasets: [
      {
        type: 'line',
        label: 'Line',
        color: Colors.orange,
        yAxis: 'right',
        data: times(7, () => faker.datatype.number({ min: 0, max: 500 })),
      },
      {
        type: 'bar',
        label: 'Bar 1',
        color: Colors.green,
        yAxis: 'left',
        data: times(7, () => faker.datatype.number({ min: 0, max: 200 })),
      },
      {
        type: 'bar',
        label: 'Bar 2',
        color: Colors.blue,
        yAxis: 'left',
        data: times(7, () => faker.datatype.number({ min: 0, max: 300 })),
      },
    ],
    labels: times(7, (i) => format(addDays(new Date(), i), 'dd/MM')),
  },
  height: 300,
  scales: {
    leftEnabled: true, rightEnabled: true,
  },
};
