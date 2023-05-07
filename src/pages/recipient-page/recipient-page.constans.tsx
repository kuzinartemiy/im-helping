import styles from '../../components/nav-cards/nav-cards.module.scss';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';

export const recipientPageNavLinks = [
  {
    text: 'Активные заявки',
    icon: <IconActiveList className={styles.colorIcon}/>,
    path: 'active-applications',
  },
  {
    text: 'Завершенные заявки',
    icon: <IconCompleted className={styles.colorIcon}/>,
    path: 'completed-applications',
  },
];
