import styles from './contactsPage.module.scss';
import { ReactComponent as IconContactsGlobe } from '../../assets/icons/contacts-globe.svg';
import { ReactComponent as IconMessage } from '../../assets/icons/message.svg';
import type { ICard } from '../../components/nav-card';

export const data: ICard[] = [{
  text: 'Контакты',
  icon: <IconContactsGlobe className={styles.colorIcon}/>,
  path: '/',
}, {
  text: 'Напишите нам',
  icon: <IconMessage className={styles.colorIcon}/>,
  path: '/',
},
];
