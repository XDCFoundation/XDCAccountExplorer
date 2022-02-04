import { ComponentMeta, ComponentStory } from '@storybook/react';
import { noop } from 'lodash';
import Legend from './legend';

export default {
  title: 'UI/Chart/Legend',
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Line',
      color: 'red',
      active: true,
      value: 500,
      previousValue: 100,
      type: 'line',
    },
    {
      label: 'Bar 1',
      color: 'blue',
      active: false,
      value: 100,
      previousValue: 1000,
      type: 'bar',
    },
    {
      label: 'Bar 2',
      color: 'green',
      active: true,
      value: 0,
      previousValue: 0,
      type: 'bar',
    },
  ],
  onItemClick: noop,
};
