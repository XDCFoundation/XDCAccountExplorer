import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalHeader from './modalHeader';

export default {
  title: 'UI/Modal/ModalHeader',
  component: ModalHeader,
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => <ModalHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Header',
};
