import React from 'react';
import renderer from 'react-test-renderer';

import GitHubStats from '..';

describe('GitHubStats', () => {
  it('renders correctly', () => {
    const result = renderer.create(<GitHubStats />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
