import styles from './nav-cards.module.scss';
import { ReactComponent as IconMaps } from '../../assets/icons/application-card.svg';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';
import { ICard } from '../nav-card/nav-card.constants';

export const data: ICard[] = [{
  text: 'Карта заявок',
  icon: <IconMaps className={styles.colorIcon}/>,
  path: '/',
}, {
  text: 'Активные заявки',
  icon: <IconActiveList className={styles.colorIcon}/>,
  path: '/',
}, {
  text: 'Завершенные заявки',
  icon: <IconCompleted className={styles.colorIcon}/>,
  path: '/',
},
];
