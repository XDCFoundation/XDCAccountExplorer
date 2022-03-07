import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalBody from './modalBody';

export default {
  title: 'UI/Modal/ModalBody',
  component: ModalBody,
} as ComponentMeta<typeof ModalBody>;

const Template: ComponentStory<typeof ModalBody> = (args) => <ModalBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Body',
};
