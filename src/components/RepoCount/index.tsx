import React from 'react';
import {Row, Col, Container} from 'react-grid-system';

import styles from './RepoCount.module.scss';

interface Props {
  publicRepos: number;
  publicGists: number;
}

const RepoCount: React.FC<Props> = ({publicRepos, publicGists}) => {
  return (
    <Row className={styles['repo-count']}>
      <Col className={styles.count}>{publicRepos} Public Repos</Col>
      <Col className={styles.count}>{publicGists} Public Gists</Col>
    </Row>
  );
};

export default RepoCount;
