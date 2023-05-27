import styles from '../admin-page.module.scss';
import diagramm from '../../../assets/images/diagramm.png';
import { useEffect } from 'react';
import { AdminPageTitle } from '../../../types';
import { ReactComponent as StatisticsIcon } from '../../../assets/icons/statistics.svg';
import { useSetTitleAdminPage } from '..';
import AdminFilterPopup from '../../../components/modals/admin-filter-popup';
import TopPanel from '../../../components/top-panel';
import { COLORS } from '../../../styles/colors';

const Statistics = () => {
  const { setTitle } = useSetTitleAdminPage();

  useEffect(() => setTitle(AdminPageTitle.statistics), [setTitle]);
  return (
    <div className={styles.statsContainer}>
      <TopPanel title='Статистика' titleIcon={<StatisticsIcon fill={COLORS.get('color-primary')} />}>
        <AdminFilterPopup onClick={() => {}} />
      </TopPanel>
      <div className={styles.diagrammBlock}>
        <img src={diagramm} alt='Main statistic' />
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

export default Statistics;
