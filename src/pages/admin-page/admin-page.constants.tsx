import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import styles from '../../components/nav-cards/nav-cards.module.scss';

export const adminPageData = [
  {
    text: 'Подтверждение /Блокировка',
    icon: <IconActiveList className={styles.colorIcon} />,
    path: 'confirmation-blocking-applications',
  },
  {
    text: 'Статистика',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: 'statistics',
  },
  {
    text: 'Создание / Редактирование заявки',
    icon: <IconCompleted className={styles.colorIcon} />,
    path: 'creation-editing-applications',
  },
];
