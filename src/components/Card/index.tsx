import React, {useState} from 'react';
import classnames from 'classnames';
import {Row, Col, Container} from 'react-grid-system';

import styles from './Card.module.scss';

interface Props {
  title?: string;
  avatarUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({title, avatarUrl, children}) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default Card;
