import React, {useState} from 'react';
import Card from '..';
import classnames from 'classnames';

import styles from './DoubleSidedCard.module.scss';

interface Props {
  trigger: 'hover' | 'click' | 'focus';
  front: React.ReactNode;
  back: React.ReactNode;
}

const DoubleSidedCard: React.FC<Props> = ({trigger, front, back}) => {
  const [showBack, setShowBack] = useState(false);
  const containerClasses = classnames(styles.container, {
    [styles['focus-trigger']]: trigger === 'focus',
  });

  const innerClasses = classnames(styles.inner, {
    [styles['hover-trigger']]: trigger === 'hover',
    [styles.showBack]: showBack,
  });

  const handleClick = () => {
    if (trigger === 'click') {
      setShowBack(!showBack);
    }
  };
  return (
    <div className={containerClasses} onClick={handleClick}>
      <div className={innerClasses}>
        <div className={`${styles.content} ${styles.front}`}>{front}</div>
        <div className={`${styles.content} ${styles.back}`}>{back}</div>
      </div>
    </div>
  );
};

export default DoubleSidedCard;
