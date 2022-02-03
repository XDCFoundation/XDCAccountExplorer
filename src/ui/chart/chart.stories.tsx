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

export const Default = Template.bind({});
Default.args = {
  series: {
    datasets: [
      {
        type: 'line',
        label: 'Line',
        color: Colors.orange,
        yAxis: 'left',
        data: times(10, () => faker.datatype.number({ min: 0, max: 500 })),
      },
      {
        type: 'bar',
        label: 'Bar 1',
        color: Colors.green,
        yAxis: 'right',
        data: times(10, () => faker.datatype.number({ min: 0, max: 200 })),
      },
      {
        type: 'bar',
        label: 'Bar 2',
        color: Colors.blue,
        yAxis: 'right',
        data: times(10, () => faker.datatype.number({ min: 0, max: 300 })),
      },
    ],
    labels: times(10, (i) => format(addDays(new Date(), i), 'dd/MM')),
  },
  height: 300,
  scales: {
    leftEnabled: true, rightEnabled: true,
  },
};
