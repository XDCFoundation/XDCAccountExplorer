import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInfo from './dateInfo';

export default {
  title: 'UI/DateInfo',
  component: DateInfo,
} as ComponentMeta<typeof DateInfo>;

const Template: ComponentStory<typeof DateInfo> = (args) => <DateInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
