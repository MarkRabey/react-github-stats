import React from 'react';
import {Row, Col, Container} from 'react-grid-system';
import {User} from '../../models/User';
import Card from '../Card';
import DoubleSidedCard from '../Card/DoubleSidedCard';
import UserSummary from '../UserSummary';

import styles from './UserDetails.module.scss';

interface Props {
  user: User;
}

const UserDetails: React.FC<Props> = ({user}) => {
  return (
    <DoubleSidedCard
      trigger="click"
      front={
        <Card>
          <UserSummary user={user} />
        </Card>
      }
      back={
        <Card>
          <h2>BACK</h2>
        </Card>
      }
    />
  );
};

export default UserDetails;
