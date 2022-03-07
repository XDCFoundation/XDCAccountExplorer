import { ComponentMeta, ComponentStory } from '@storybook/react';
import Portal, { PortalContainer } from './portal';

export default {
  title: 'UI/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = () => (
  <>
    <PortalContainer />
    <div>
      <div>
        <Portal>
          <span>
            Portal children are rendered inside PortalContainer.
          </span>
        </Portal>
      </div>
    </div>
  </>
);

export const Default = Template.bind({});
