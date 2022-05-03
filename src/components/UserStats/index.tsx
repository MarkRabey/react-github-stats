import React from 'react';
import {AiOutlineBug, AiOutlineEye, AiOutlineStar} from 'react-icons/ai';
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
    <Row className={styles['user-stats']}>
      <Col>
        <Row className={styles['user-stats__row']} align="stretch">
          <Col>
            <Row>
              <Col>
                <AiOutlineBug className={styles['user-stats__icon']} />
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>{openIssuesCount}</strong>{' '}
                {pluralizer(parseInt(openIssuesCount), 'open issue')}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <AiOutlineEye className={styles['user-stats__icon']} />
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>{watchersCount}</strong>{' '}
                {pluralizer(parseInt(watchersCount), 'watcher')}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={styles['user-stats__row']} style={{paddingTop: 6}}>
          <Col>
            <Row>
              <Col>
                <AiOutlineStar className={styles['user-stats__icon']} />
              </Col>
            </Row>
            <Row>
              <Col>
                Starred <strong>{stargazersCount}</strong>{' '}
                {pluralizer(user.followers, 'time')}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <AiOutlineStar className={styles['user-stats__icon']} />
              </Col>
            </Row>
            <Row>
              <Col>
                Followed by <strong>{user.followers}</strong>{' '}
                {pluralizer(user.followers, 'member')}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <AiOutlineStar className={styles['user-stats__icon']} />
              </Col>
            </Row>
            <Row>
              <Col>
                Following by <strong>{user.following}</strong>{' '}
                {pluralizer(user.followers, 'member')}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserStats;
