import { ComponentMeta, ComponentStory } from '@storybook/react';
import RankingTrend from './rankingTrend';

export default {
  title: 'UI/Ranking/RankingTrend',
  component: RankingTrend,
} as ComponentMeta<typeof RankingTrend>;

const Template: ComponentStory<typeof RankingTrend> = (args) => <RankingTrend {...args} />;

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
