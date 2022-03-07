import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalFooter from './modalFooter';

export default {
  title: 'UI/Modal/ModalFooter',
  component: ModalFooter,
} as ComponentMeta<typeof ModalFooter>;

const Template: ComponentStory<typeof ModalFooter> = (args) => <ModalFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Footer',
};
