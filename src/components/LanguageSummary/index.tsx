import React, {useEffect, useState} from 'react';

import languages from '../../utils/languages';

import styles from './LanguageSummary.module.scss';

interface Props {
  languageCounts: {[key: string]: number};
}

const LanguageSummary: React.FC<Props> = ({languageCounts}) => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let count = 0;
    for (const key in languageCounts) {
      if (Object.prototype.hasOwnProperty.call(languageCounts, key)) {
        count += languageCounts[key];
      }
    }
    setTotalCount(count);
  }, [languageCounts]);

  return (
    <div className={styles['language-summary']}>
      <header className={styles.header}>
        <h3>Top Languages</h3>
      </header>
      <div className={styles.progress}>
        {Object.keys(languageCounts).map(language => (
          <div
            key={language}
            style={{
              width: `${(languageCounts[language] / totalCount) * 100}%`,
              backgroundColor: languages[language].color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSummary;
