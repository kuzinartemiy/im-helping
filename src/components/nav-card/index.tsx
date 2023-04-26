import { Link } from 'react-router-dom';
import styles from './nav-card.module.scss';
import Text from '../text';
import { ICard } from './nav-card.constants';

function NavCard(props: ICard) {
  const {icon, text, path} = props;
  return (
    <Link to={path} className={styles.link}>
      {icon}
      <Text tag = 'p' weight = '400' size = '16' color = 'white'>{text}</Text>
    </Link>
  );
}

export default NavCard;
