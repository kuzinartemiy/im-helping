import styles from '../../components/nav-cards/nav-cards.module.scss';
import { ReactComponent as IconMaps } from '../../assets/icons/application-card.svg';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';

export const profileNavLinks = [
  {
    id: '1',
    text: 'Супер администратор',
    icon: <IconMaps className={styles.colorIcon} />,
    path: 'superadmin',
  },
  {
    id: '2',
    text: 'Администратор',
    icon: <IconActiveList className={styles.colorIcon} />,
    path: 'admin',
  },
  {
    id: '3',
    text: 'Реципиент',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: 'recipient',
  },
  {
    id: '4',
    text: 'Волонтер',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: 'volunteer',
  },
];
