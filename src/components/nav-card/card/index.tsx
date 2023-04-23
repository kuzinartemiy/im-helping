import { Link } from 'react-router-dom';
import styles from '../nav-card.module.scss';

import iconMaps from '../../../assets/icons/application-card.svg';
import iconActiveList from '../../../assets/icons/active-applications.svg';
import iconCompleted from '../../../assets/icons/completed-applications.svg';

import Text from '../../text';

interface ICard {
  text: string
  icon: string
  path: string
  index?: number
}

// массив в завимости от выбраной роли
export const data: ICard[] = [{
  text: 'Карта заявок',
  icon: iconMaps,
  path: '/',
}, {
  text: 'Активные заявки',
  icon: iconActiveList,
  path: '/',
}, {
  text: 'Завершенные заявки',
  icon: iconCompleted,
  path: '/',
},
];

export function Card(props: ICard) {
  return (
    <li key={props.index} className={styles.linkCard}>
      <Link to={props.path} className={styles.link}>
        <img src={props.icon} alt="Icon" />
        <Text tag = 'p' weight = '400' size = '16' color = 'white'>{props.text}</Text>
      </Link>
    </li>
  );
}
