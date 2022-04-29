import React, {useState} from 'react';
import classnames from 'classnames';

import styles from './Card.module.scss';

interface Props {
  title?: string;
  avatarUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({title, avatarUrl, children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
