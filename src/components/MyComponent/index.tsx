import * as React from 'react';

import styles from './MyComponent.module.scss';
export interface MyComponentProps {
  title?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({title}) => {
  return (
    <div className={styles.container}>
      {title && (
        <header>
          <h1>MyComponent</h1>
        </header>
      )}

      <p>This is MyComponent</p>
    </div>
  );
};

export default MyComponent;
