import React from 'react';

import styles from './RepoCount.module.scss';

interface Props {
  publicRepos: number;
  publicGists: number;
}

const RepoCount: React.FC<Props> = ({publicRepos, publicGists}) => {
  return (
    <div className={styles['repo-count']}>
      <div className={styles.count}>{publicRepos} Public Repos</div>
      <div className={styles.count}>{publicGists} Public Gists</div>
    </div>
  );
};

export default RepoCount;
