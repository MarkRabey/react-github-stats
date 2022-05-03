import React, {useEffect, useState} from 'react';
import Card from '..';
import classnames from 'classnames';

import styles from './DoubleSidedCard.module.scss';

interface Props {
  trigger?: 'hover' | 'click' | 'focus';
  front: React.ReactNode;
  back: React.ReactNode;
  showBack?: boolean;
  onFlip?: () => void;
}

const DoubleSidedCard: React.FC<Props> = ({
  trigger,
  front,
  back,
  showBack = false,
  onFlip,
}) => {
  const [isShowingBack, setIsShowingBack] = useState(showBack);
  const containerClasses = classnames(styles.container, {
    [styles['focus-trigger']]: trigger === 'focus',
  });

  const innerClasses = classnames(styles.inner, {
    [styles['hover-trigger']]: trigger === 'hover',
    [styles.showBack]: isShowingBack,
  });

  const handleClick = () => {
    if (trigger === 'click') {
      setIsShowingBack(!isShowingBack);
    }
  };

  useEffect(() => {
    setIsShowingBack(showBack);
  }, [showBack]);

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
