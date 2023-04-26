import { Link } from 'react-router-dom';
import styles from './nav-card.module.scss';
import Text from '../text';
import { type FC } from 'react';

interface ICard {
  text: string
  icon: React.ReactNode
  path: string
  index?: number
}

const NavCard: FC<ICard> = ({ icon, text, path }) => {
  return (
    <Link to={path} className={styles.link}>
      {icon}
      <Text tag = 'p' weight = '400' size = '16' color = 'white'>{text}</Text>
    </Link>
  );
};

export default NavCard;
