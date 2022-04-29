import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const StoryContainer: React.FC<Props> = ({children}) => (
  <div style={{backgroundColor: '#ddd', padding: 12, maxWidth: 500}}>
    {children}
  </div>
);

export default StoryContainer;
