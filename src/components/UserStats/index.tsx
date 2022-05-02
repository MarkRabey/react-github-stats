import React from 'react';
import {Row, Col, Container} from 'react-grid-system';
import {Repository} from '../../models/Repo';
import {User} from '../../models/User';
import pluralizer from '../../utils/pluralizer';
import sum from '../../utils/sum';

import styles from './UserStats.module.scss';

interface Props {
  user: User;
  userRepos: Repository[];
}

const UserStats: React.FC<Props> = ({user, userRepos}) => {
  const watchersCount = sum(userRepos, 'watchers_count');
  const stargazersCount = sum(userRepos, 'stargazers_count');
  const openIssuesCount = sum(userRepos, 'open_issues_count');
  return (
    <Container fluid className={styles['user-stats']}>
      <Row className={styles['user-stats__row']}>
        <Col>
          <strong>{openIssuesCount}</strong>{' '}
          {pluralizer(parseInt(openIssuesCount), 'open issue')}
        </Col>
        <Col>
          <strong>{watchersCount}</strong>{' '}
          {pluralizer(parseInt(watchersCount), 'watcher')}
        </Col>
      </Row>
      <Row className={styles['user-stats__row']}>
        <Col>
          Starred <strong>{stargazersCount}</strong>{' '}
          {pluralizer(user.followers, 'time')}
        </Col>
        <Col>
          Followed by <strong>{user.followers}</strong>{' '}
          {pluralizer(user.followers, 'member')}
        </Col>
        <Col>
          Following by <strong>{user.following}</strong>{' '}
          {pluralizer(user.followers, 'member')}
        </Col>
      </Row>
    </Container>
  );
};

export default UserStats;
