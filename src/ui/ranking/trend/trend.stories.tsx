import { ComponentMeta, ComponentStory } from '@storybook/react';
import Trend from './trend';

export default {
  title: 'UI/Ranking/Trend',
  component: Trend,
} as ComponentMeta<typeof Trend>;

const Template: ComponentStory<typeof Trend> = (args) => <Trend {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  value: 42231,
  description: 'Accounts have more XDC than you',
};

export const Negative = Template.bind({});
Negative.args = {
  negative: true,
  value: 2343010,
  description: 'Accounts have less XDC than you',
};
