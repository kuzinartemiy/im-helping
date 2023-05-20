import { NavLink } from 'react-router-dom';
import styles from './nav-card.module.scss';
import Text from '../text';
import { COLORS } from '../../../styles/colors';

export interface INavCard {
  text: string
  icon: React.ReactNode
  path: string
}

const NavCard = ({ icon, text, path }: INavCard) => (
    <NavLink to={path} className={({ isActive }) => `${styles.link} ${isActive ? styles.link_active : ''}`}>
      {icon}
      <Text tag='p' weight='400' size='16' color={COLORS.get('white')}>{text}</Text>
    </NavLink>
);

export default NavCard;
