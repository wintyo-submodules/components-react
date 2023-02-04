import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DEFAULT_TITLE } from '@wintyo-submodules/constants';
import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  args: {
    title: DEFAULT_TITLE,
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Base = Template.bind({});
