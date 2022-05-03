import React, {useEffect, useState} from 'react';
import {Row, Col, Container} from 'react-grid-system';
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
    <Row className={styles['language-summary']} direction="column">
      <header className={styles.header}>
        <h3>Languages</h3>
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
      <ReactTooltip type="dark" effect="solid" />
    </Row>
  );
};

export default LanguageSummary;
