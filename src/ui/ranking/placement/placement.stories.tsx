import { ComponentMeta, ComponentStory } from '@storybook/react';
import Placement from './placement';

export default {
  title: 'UI/Ranking/Placement',
  component: Placement,
} as ComponentMeta<typeof Placement>;

const Template: ComponentStory<typeof Placement> = (args) => <Placement {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 55.6,
};
