import { COLORS } from '../../styles/colors';
import { ReactComponent as CreateEditIcon } from '../../assets/icons/create-edit.svg';
import { ReactComponent as BlockingIcon } from '../../assets/icons/blocking.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/icons/statistics.svg';
import styles from '../../components/nav-cards/nav-cards.module.scss';

export const primaryColor = COLORS.get('color-primary');

export const superAdminTestPersonProps = {
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcId3roctkMS-wX26vViSB2FNUOI-bfaSZw&usqp=CAU',
  name: 'Петров Петр Петрович',
  id: '112233',
  phone: '+7(000) 000-00-00',
  about: 'Я люблю музыку, книги и кошек',
  counters: {
    keys: 1,
  },
};

export const adminPageData = [
  {
    text: 'Подтверждение / Блокировка',
    icon: <BlockingIcon className={styles.colorIcon} />,
    path: 'confirmation-block-users',
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
