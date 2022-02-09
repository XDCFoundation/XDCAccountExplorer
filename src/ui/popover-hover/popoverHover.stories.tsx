import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'reactstrap';
import { ReactComponent as IconQuestion } from 'assets/images/icons/icon_question.svg';
import PopoverHover from './popoverHover';

export default {
  title: 'UI/PopoverHover',
  component: PopoverHover,
} as ComponentMeta<typeof PopoverHover>;

const Template: ComponentStory<typeof PopoverHover> = (args) => <PopoverHover {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'title',
  content: 'popover content',
  element: <Button>hover</Button>,
  placement: 'top',
};

export const Icon = Template.bind({});
Icon.args = {
  content: 'popover without header',
  element: <IconQuestion />,
  placement: 'right',
};
