import { Link } from 'react-router-dom';
import styles from './nav-card.module.scss';
import Text from '../text';
import { ICard } from '../nav-cards/nav-cards.constants';

function NavCard(props: ICard) {
  return (
    <Link to={props.path} className={styles.link}>
      {props.icon}
      <Text tag = 'p' weight = '400' size = '16' color = 'white'>{props.text}</Text>
    </Link>
  );
}

export default NavCard;
