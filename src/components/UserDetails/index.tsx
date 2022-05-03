import React, {useCallback, useEffect, useState} from 'react';
import {Row, Col, Container} from 'react-grid-system';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

import {Repository} from '../../models/Repo';
import {User} from '../../models/User';
import Card from '../Card';
import DoubleSidedCard from '../Card/DoubleSidedCard';
import LanguageDetails from '../LanguageDetails';
import LanguageSummary from '../LanguageSummary';
import RepoCount from '../RepoCount';
import UserStats from '../UserStats';
import UserSummary from '../UserSummary';

import styles from './UserDetails.module.scss';

interface Props {
  username: string;
  accessToken?: string;
}

const UserDetails: React.FC<Props> = ({username, accessToken}) => {
  const [showBack, setShowBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userRepos, setUserRepos] = useState<Repository[]>([]);
  const [userLanguages, setUserLanguages] = useState<{[key: string]: number}>(
    {},
  );
  const [topLanguages, setTopLanguages] = useState<[string, number][]>([]);

  const getFetchOptions = useCallback((): RequestInit => {
    if (accessToken) {
      return {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': `react-github-stats`,
          Authorization: `token ${accessToken}`,
        },
      };
    }

    return {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': `react-github-stats`,
      },
    };
  }, [accessToken]);

  const fetchUserRepos = useCallback(async () => {
    try {
      await setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        getFetchOptions(),
      );
      if (response.status >= 400 && response.status < 600) {
        await setIsLoading(false);
        setError('Server Error');
        return;
      }
      const languagesObj = {};
      const data = await response.json();
      data.forEach(repo => {
        if (repo.language && repo.language !== null) {
          if (languagesObj[repo.language]) {
            languagesObj[repo.language] += 1;
          } else {
            languagesObj[repo.language] = 1;
          }
        }
      });
      await setUserRepos(data);
      await setUserLanguages(languagesObj);
      await setIsLoading(false);
    } catch (e) {
      console.log({error: e});
    }
  }, [username, getFetchOptions]);

  const fetchUserData = useCallback(async () => {
    try {
      await setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${username}`,
        getFetchOptions(),
      );

      if (response.status >= 400 && response.status < 600) {
        await setIsLoading(false);
        setError('Server Error');
        return;
      }

      const userData = await response.json();
      setUser(userData);
      await setIsLoading(false);
    } catch (e) {
      console.log({error: e});
    }
  }, [username, getFetchOptions]);

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }

    if (userRepos.length === 0 || Object.keys(userLanguages).length === 0) {
      fetchUserRepos();
    }
  }, [user, userRepos.length, userLanguages, fetchUserData, fetchUserRepos]);

  useEffect(() => {
    if (Object.keys(userLanguages).length > 0) {
      const sortedLanguages = Object.entries(userLanguages).sort(
        (a, b) => a[1][1] - b[1][1],
      );
      const topLangs =
        sortedLanguages.length >= 3
          ? sortedLanguages.slice(0, 3)
          : sortedLanguages;

      setTopLanguages(topLangs);
      console.log({topLangs});
    }
  }, [userLanguages]);

  const CardToggle = () => (
    <Row
      className={styles['card-toggle']}
      justify="end"
      onClick={() => setShowBack(!showBack)}
    >
      <Col>{showBack ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}</Col>
    </Row>
  );

  return user ? (
    <DoubleSidedCard
      showBack={showBack}
      front={
        <Card>
          <UserSummary user={user} />
          <LanguageSummary languageCounts={userLanguages} />
          <RepoCount
            publicRepos={user.public_repos}
            publicGists={user.public_gists}
          />
          <CardToggle />
        </Card>
      }
      back={
        <Card>
          <LanguageDetails topLanguages={topLanguages} />
          <UserStats user={user} userRepos={userRepos} />
          <CardToggle />
        </Card>
      }
    />
  ) : (
    <p>Loading...</p>
  );
};

export default UserDetails;
