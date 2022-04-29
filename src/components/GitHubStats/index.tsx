import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import UserDetails from '../UserDetails';

import styles from './GitHubStats.module.scss';
export interface GitHubStatsProps {
  username?: string;
  repository?: string;
  organization?: string;
}

enum FetchType {
  USER,
  REPO,
  ORG,
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
  username,
  repository,
  organization,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchData = async (type: FetchType, value: string) => {
    try {
      await setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${value}`);
      await setIsLoading(false);
      if (response.status >= 400 && response.status < 600) {
        console.log({response});

        setError('Server Error');
        return;
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (e) {
      console.log('ERROR: ' + e);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData(FetchType.USER, username);
    } else if (repository) {
      fetchData(FetchType.REPO, repository);
    } else if (organization) {
      fetchData(FetchType.ORG, organization);
    }
  }, [username, repository, organization]);
  return (
    <Container className={styles.container}>
      {error && (
        <Row>
          <Col>
            <p>{error}</p>
          </Col>
        </Row>
      )}

      {isLoading && (
        <Row>
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      )}

      {data && username && <UserDetails user={data} />}
    </Container>
  );
};

export default GitHubStats;
