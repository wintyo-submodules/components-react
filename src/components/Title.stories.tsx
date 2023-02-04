import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  args: {
    title: 'タイトル',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Base = Template.bind({});
