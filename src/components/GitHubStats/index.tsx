import * as React from 'react';

import styles from './GitHubStats.module.scss';
export interface GitHubStatsProps {
  title?: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({title}) => {
  return (
    <div className={styles.container}>
      {title && (
        <header>
          <h1>GitHubStats</h1>
        </header>
      )}

      <p>This is GitHubStats</p>
    </div>
  );
};

export default GitHubStats;
