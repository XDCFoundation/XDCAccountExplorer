import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { PortalContainer } from 'ui/portal/portal';
import Modal from './modal';

export default {
  title: 'UI/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <>
        <Story />
        <PortalContainer />
      </>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>open modal</button>
      <Modal {...args} open={open} onCancel={() => setOpen(false)}>
        <div style={{ height: 1000 }}>
          Scrollable body
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'center',
  renderHeader: () => 'Header',
  renderFooter: () => 'Footer',
};
