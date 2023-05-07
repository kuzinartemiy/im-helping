import styles from './admin-page.module.scss';
import diagramm from '../../assets/images/diagramm.png';
import { useEffect } from 'react';
import { useSetTitleAdminPage } from '.';
import { AdminPageTitle } from '../../types';

const StatisticsApp = () => {
  const { setTitle } = useSetTitleAdminPage();

  useEffect(() => setTitle(AdminPageTitle.statistics), []);
  return (
    <div className={styles.statsContainer}>
      <div className={styles.diagrammBlock}>
        <img src={diagramm} alt="Main statistic" />
      </div>
      <div className={styles.statsBlocks}>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
        <div className={styles.statsBlock}></div>
      </div>
  </div>
  );
};

export default StatisticsApp;
