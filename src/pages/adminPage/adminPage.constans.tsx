import styles from '../../components/nav-cards/nav-cards.module.scss';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';

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

export const adminUsersData = [
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Иванов Иван Иванович',
    userId: '11111115',
    userTel: '+7(123) 456-78-90',
    userPoints: '3500',
    userHelps: '200',
    userKey: '1',
    lineColor: 'orange',
    confirmed: 'unconfirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Петров Петр Петрович',
    userId: '11111116',
    userTel: '+7(234) 567-89-01',
    userPoints: '2700',
    userHelps: '180',
    userKey: '2',
    lineColor: 'grey',
    confirmed: 'confirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Иванов Иван Иванович',
    userId: '11111117',
    userTel: '+7(123) 456-78-90',
    userPoints: '3500',
    userHelps: '200',
    userKey: '3',
    lineColor: 'orange',
    confirmed: 'unconfirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Петров Петр Петрович',
    userId: '11111118',
    userTel: '+7(234) 567-89-01',
    userPoints: '2700',
    userHelps: '180',
    userKey: '4',
    lineColor: 'green',
    confirmed: 'confirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Иванов Иван Иванович',
    userId: '11111119',
    userTel: '+7(123) 456-78-90',
    userPoints: '3500',
    userHelps: '200',
    userKey: '5',
    lineColor: 'orange',
    confirmed: 'unconfirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Петров Петр Петрович',
    userId: '11111120',
    userTel: '+7(234) 567-89-01',
    userPoints: '2700',
    userHelps: '180',
    userKey: '6',
    lineColor: 'green',
    confirmed: 'confirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Иванов Иван Иванович',
    userId: '11111121',
    userTel: '+7(123) 456-78-90',
    userPoints: '3500',
    userHelps: '200',
    userKey: '7',
    lineColor: 'orange',
    confirmed: 'unconfirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Петров Петр Петрович',
    userId: '11111122',
    userTel: '+7(234) 567-89-01',
    userPoints: '2700',
    userHelps: '180',
    userKey: '8',
    lineColor: 'grey',
    confirmed: 'confirmed',
  },
  {
    userImg:
      'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    userName: 'Петров Петр Петрович',
    userId: '11111123',
    userTel: '+7(234) 567-89-01',
    userPoints: '2700',
    userHelps: '180',
    userKey: '8',
    lineColor: 'green',
    confirmed: 'confirmed',
  },
];

export const adminData = {
  avatar:
    'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
  name: 'Иванов Иван Иванович',
  id: '11111112',
  phone: '+7 (123) 456-78-90',
  about: 'Информация обо мне, моих увлечениях и умениях',
};
