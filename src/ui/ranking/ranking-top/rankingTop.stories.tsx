import { ComponentMeta, ComponentStory } from '@storybook/react';
import RankingTop from './rankingTop';

export default {
  title: 'UI/Ranking/RankingTop',
  component: RankingTop,
} as ComponentMeta<typeof RankingTop>;

const Template: ComponentStory<typeof RankingTop> = (args) => <RankingTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 55.6,
};
