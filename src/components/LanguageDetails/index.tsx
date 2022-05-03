import React from 'react';
import {Row, Col, Container} from 'react-grid-system';

import styles from './LanguageDetails.module.scss';

interface Props {
  topLanguages: [string, number][];
}

const LanguageDetails: React.FC<Props> = ({topLanguages}) => {
  return (
    <Row className={styles['language-details']} align="center" justify="center">
      <Col xs={12}>
        <Row align="center">
          <Col className={styles['language-details__header']}>
            <h3>Top Languages</h3>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row className={styles['language-details__languages']}>
          {topLanguages.map(data => (
            <Col
              key={data[0]}
              className={styles['language-details__language-info']}
            >
              <Row justify="center" align="center">
                <Col xs={12} className={styles['language-details__language']}>
                  {data[0]}
                </Col>
                <Col xs={12}>{data[1]} repos</Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default LanguageDetails;
