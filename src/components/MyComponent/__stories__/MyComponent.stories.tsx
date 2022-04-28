import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import MyComponent from '..';

export default {
  title: 'Example/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = args => (
  <MyComponent {...args} />
);

export const MyComponentStory = Template.bind({});
