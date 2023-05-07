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
    userName: 'Петров Иван Петрович',
    userId: '13111116',
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
    userId: '11111317',
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
    userName: 'Иванов Алексей Евгеньевич',
    userId: '11114117',
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

export type TAdminUsersData = typeof adminUsersData[0];

export const adminData = {
  avatar:
    'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
  name: 'Иванов Иван Иванович',
  id: '11111112',
  phone: '+7 (123) 456-78-90',
  about: 'Информация обо мне, моих увлечениях и умениях',
};

export const applicationCards = [
  {
    id: '1',
    date: '24.10.2022',
    time: '16:00',
    location: 'ул. Потолочного д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '1',
    owner: {
      name: 'Петров Петр Петрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-00',
    },
  },
  {
    id: '2',
    date: '25.10.2022',
    time: '13:00',
    location: 'ул. Дверная д. 13',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '13',
    owner: {
      name: 'Алексеев Алексей Алексеевич ',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-13',
    },
  },
  {
    id: '3',
    date: '13.10.2022',
    time: '11:00',
    location: 'ул. Оконная д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '33',
    owner: {
      name: 'Александров Александр Александрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-11',
    },
  },
  {
    id: '4',
    date: '13.10.2022',
    time: '11:00',
    location: 'ул. Оконная д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '33',
    owner: {
      name: 'Александров Александр Александрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-11',
    },
  },
  {
    id: '5',
    date: '13.10.2022',
    time: '11:00',
    location: 'ул. Оконная д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '33',
    owner: {
      name: 'Александров Александр Александрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-11',
    },
  },
  {
    id: '6',
    date: '13.10.2022',
    time: '11:00',
    location: 'ул. Оконная д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '33',
    owner: {
      name: 'Александров Александр Александрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-11',
    },
  },
  {
    id: '7',
    date: '13.10.2022',
    time: '11:00',
    location: 'ул. Оконная д. 9',
    about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
    completedAppQuantity: '33',
    owner: {
      name: 'Александров Александр Александрович',
      avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
      phone: '+7(000) 000-00-11',
    },
  },
];
