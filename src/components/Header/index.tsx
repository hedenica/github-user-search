import githubIcon from '../../assets/github.png';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={githubIcon} alt="github-icon" />
      <h2 className={styles.title}>github-search</h2>
    </div>
  );
};
