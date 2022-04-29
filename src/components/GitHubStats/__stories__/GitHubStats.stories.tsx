import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import GitHubStats from '..';
import StoryContainer from '../../../stories/components/StoryContainer';

export default {
  title: 'Examples/GitHubStats',
  component: GitHubStats,
} as ComponentMeta<typeof GitHubStats>;

const Template: ComponentStory<typeof GitHubStats> = args => (
  <StoryContainer>
    <GitHubStats {...args} />
  </StoryContainer>
);

export const User = Template.bind({});
User.args = {username: 'MarkRabey'};

export const Repository = Template.bind({});
Repository.args = {username: 'MarkRabey', repository: 'react-github-stats'};

export const Organization = Template.bind({});
Organization.args = {organization: 'MarkRabey'};
