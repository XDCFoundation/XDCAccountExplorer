import { ComponentMeta, ComponentStory } from '@storybook/react';
import Trend from './trend';

export default {
  title: 'UI/Chart/Trend',
  component: Trend,
} as ComponentMeta<typeof Trend>;

const Template: ComponentStory<typeof Trend> = (args) => <Trend {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  value: 100,
  previousValue: 10,
};

export const Negative = Template.bind({});
Negative.args = {
  value: 10,
  previousValue: 100,
};
