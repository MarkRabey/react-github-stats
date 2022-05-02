import React, {useEffect, useState} from 'react';
import ReactTooltip from 'react-tooltip';

import languages from '../../utils/languages';

import styles from './LanguageSummary.module.scss';

interface Props {
  languageCounts: {[key: string]: number};
}

const LanguageSummary: React.FC<Props> = ({languageCounts}) => {
  const [totalCount, setTotalCount] = useState(0);
  const [tooltip, setTooltip] = useState('');

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
      <div className={styles.progress} data-tip={tooltip}>
        {Object.keys(languageCounts).map(language => {
          const percentage = `${Math.round(
            (languageCounts[language] / totalCount) * 100,
          )}%`;
          return (
            <div
              key={language}
              style={{
                position: 'relative',
                width: percentage,
                height: '100%',
                backgroundColor: languages[language].color,
              }}
              onMouseEnter={() => setTooltip(`${language} - ${percentage}`)}
              onMouseLeave={() => setTooltip('')}
            />
          );
        })}
      </div>
      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  );
};

export default LanguageSummary;
