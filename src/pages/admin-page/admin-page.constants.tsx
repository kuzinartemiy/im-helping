import { ReactComponent as CreateEditIcon } from '../../assets/icons/create-edit.svg';
import { ReactComponent as BlockingIcon } from '../../assets/icons/blocking.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/icons/statistics.svg';
import styles from '../../components/nav-cards/nav-cards.module.scss';
import { COLORS } from '../../styles/colors';

export const adminPageData = [
  {
    text: 'Подтверждение /Блокировка',
    icon: <BlockingIcon className={styles.colorIcon} />,
    path: 'confirmation-blocking-applications',
  },
  {
    text: 'Статистика',
    icon: <StatisticsIcon className={styles.colorIcon} />,
    path: 'statistics',
  },
  {
    text: 'Создание / Редактирование заявки',
    icon: <CreateEditIcon stroke={COLORS.get('white')} fill='transparent' />,
    path: 'creation-editing-applications',
  },
];
