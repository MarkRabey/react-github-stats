import React from 'react';

import styles from './LanguageDetails.module.scss';

interface Props {
  topLanguages: [string, number][];
}

const LanguageDetails: React.FC<Props> = ({topLanguages}) => {
  return (
    <div className={styles['language-details']}>
      <header className={styles['language-details__header']}>
        <h3>Top Languages</h3>
      </header>
      <div className={styles['language-details__languages']}>
        {topLanguages.map(data => (
          <div
            key={data[0]}
            className={styles['language-details__language-info']}
          >
            <div className={styles['language-details__language']}>
              {data[0]}
            </div>
            <div>{data[1]} repos</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDetails;
