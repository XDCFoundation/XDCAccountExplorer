import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import Filters, { FilterValue } from './filters';

export default {
  title: 'UI/Filters',
  component: Filters,
} as ComponentMeta<typeof Filters>;

const mockFilters = [
  {
    name: '7D',
    value: 1,
  },
  {
    name: '1M',
    value: 2,
  },
  {
    name: '3M',
    value: 3,
  },
  {
    name: '1Y',
    value: 4,
  },
  {
    name: 'MAX',
    value: 5,
  },
];

const Template: ComponentStory<typeof Filters> = (args) => {
  const [value, setValue] = useState<FilterValue>(1);
  return <Filters {...args} value={value} onSelect={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  items: mockFilters,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  items: mockFilters,
  title: 'Time',
};
