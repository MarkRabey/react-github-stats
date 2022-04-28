import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import GitHubStats from '..';

export default {
  title: 'Example/GitHubStats',
  component: GitHubStats,
} as ComponentMeta<typeof GitHubStats>;

const Template: ComponentStory<typeof GitHubStats> = args => (
  <GitHubStats {...args} />
);

export const GitHubStatsStory = Template.bind({});
