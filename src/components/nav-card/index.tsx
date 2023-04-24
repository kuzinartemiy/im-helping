import { Link } from 'react-router-dom';
import styles from './nav-card.module.scss';

import { ReactComponent as IconMaps } from '../../assets/icons/application-card.svg';
import { ReactComponent as IconActiveList } from '../../assets/icons/active-applications.svg';
import { ReactComponent as IconCompleted } from '../../assets/icons/completed-applications.svg';

import Text from '../text';

interface ICard {
  text: string
  icon: React.ReactNode
  path: string
  index?: number
}

// массив в завимости от выбраной роли
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

function NavCard(props: ICard) {
  return (
    <li key={props.index} className={styles.linkCard}>
      <Link to={props.path} className={styles.link}>
        {props.icon}
        <Text tag = 'p' weight = '400' size = '16' color = 'white'>{props.text}</Text>
      </Link>
    </li>
  );
}

export default NavCard;
