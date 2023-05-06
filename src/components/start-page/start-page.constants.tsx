import styles from '../nav-cards/nav-cards.module.scss';
import { ReactComponent as IconMaps } from '../../assets/icons/application-card.svg';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';

export const btnStart = [
  {
    text: 'Супер администратор',
    icon: <IconMaps className={styles.colorIcon} />,
    path: '/superadmin',
  }, {
    text: 'Администратор',
    icon: <IconActiveList className={styles.colorIcon} />,
    path: '/admin',
  }, {
    text: 'Реципиент',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: '/recipient/active-applications',
  }, {
    text: 'Волонтер',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: '/volunteer/active-applications',
  },
];
