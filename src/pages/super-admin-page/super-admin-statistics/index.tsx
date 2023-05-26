import styles from '../super-admin-page.module.scss';
import diagramm from '../../../assets/images/diagramm.png';
import TopPanel from '../../../components/top-panel';
import { ReactComponent as StatisticIcon } from '../../../assets/icons/statistics.svg';
import { COLORS } from '../../../styles/colors';
import AdminFilterPopup from '../../../components/modals/admin-filter-popup';

const SuperAdminStatistics = () => {
  return (
    <div className={styles.statsContainer}>
      <TopPanel title='Статистика' titleIcon={<StatisticIcon fill={COLORS.get('color-primary')} />}>
        <AdminFilterPopup onClick={() => {}} />
      </TopPanel>
      <div className={styles.diagrammBlock}>
        <img src={diagramm} alt='Main statistic' />
      </div>
      <div className={styles.statsBlocks}>
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
        <div className={styles.statsBlock} />
      </div>
    </div>
  );
};

export default SuperAdminStatistics;
