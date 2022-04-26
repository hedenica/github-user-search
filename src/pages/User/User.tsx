import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Spinner } from '../../components/Spinner';
import { useFetch } from '../../hooks/useFetch';

import styles from './user.module.scss';

interface UserData {
  avatar_url: string;
  name: string;
  public_repos: number;
}

interface Repository {
  full_name: string;
  description: string;
}

export const User = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const {
    data: user,
    isFetching: isFetchingUser,
    error: userError,
  } = useFetch<UserData>(`users/${username}`);
  const {
    data: repos,
    isFetching: isFetchingRepos,
    error: reposError,
  } = useFetch<Repository[]>(`users/${username}/repos`);

  const navigateToHome = () => navigate('/');

  if (userError || reposError) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.errorMessage}>Ops, something went wrong 😢</h2>
        <Button customStyle={styles.button} title="Return" onClick={navigateToHome} />
      </div>
    );
  }

  return (
    <>
      {isFetchingRepos || isFetchingUser ? (
        <div className={styles.loading}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>Look who we found 🔥</h1>
          <div className={styles.userContainer}>
            <img className={styles.avatar} src={user?.avatar_url} alt="" />
            <div className={styles.userInfo}>
              <p>
                <b>Name:</b> {user?.name}
              </p>
              <p>
                <b>Repositories:</b> {user?.public_repos}
              </p>
              <Button
                customStyle={styles.button}
                title="Return"
                onClick={navigateToHome}
              />
            </div>
          </div>
          <div className={styles.reposContainer}>
            <h1>Repositories</h1>
            <ul className={styles.repoList}>
              {repos?.map((repo) => (
                <li className={styles.repoItem} key={repo.full_name}>
                  <strong>{repo.full_name}</strong>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
