import React from 'react';
import renderer from 'react-test-renderer';

import MyComponent from '..';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const result = renderer.create(<MyComponent />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
