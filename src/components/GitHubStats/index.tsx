import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import UserDetails from '../UserDetails';

import styles from './GitHubStats.module.scss';
export interface GitHubStatsProps {
  username?: string;
  repository?: string;
  organization?: string;
  accessToken?: string;
}

enum FetchType {
  USER,
  REPO,
  ORG,
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
  username,
  repository,
  organization,
  accessToken,
}) => {
  return (
    <Container className={styles.container}>
      {username && !repository && (
        <UserDetails username={username} accessToken={accessToken} />
      )}
    </Container>
  );
};

export default GitHubStats;
