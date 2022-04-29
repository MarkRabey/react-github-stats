import React from 'react';
import {Row, Col, Container} from 'react-grid-system';

import {User} from '../../models/User';
import pluralizer from '../../utils/pluralizer';

import styles from './UserSummary.module.scss';

interface Props {
  user: User;
}

const UserSummary: React.FC<Props> = ({user}) => {
  const company = user.company ? (
    <p className={styles.text}>Currently at {user.company}</p>
  ) : (
    ''
  );
  const created = new Date(user.created_at);
  const totalYears = Math.round(
    (Date.now() - created.valueOf()) / 1000 / 60 / 60 / 24 / 365,
  );

  return (
    <Container>
      <Row className={styles.container}>
        {user.login && (
          <Col>
            <h2 className={styles.title}>@{user.login}</h2>
            {company}
            <p className={styles.text}>
              {totalYears} {pluralizer(totalYears, 'Year')} of Membership
            </p>
          </Col>
        )}
        {user.avatar_url && (
          <Col xs={6} sm={4}>
            <img
              className={styles.avatar}
              // style={{backgroundImage: `url(${user.avatar_url})`}}
              src={user.avatar_url}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default UserSummary;
