import styles from './header-nav-menu.module.scss';
import Text from '../../common/text';
import { NavLink } from 'react-router-dom';
import { headerLinks } from './header-nav-menu.constants';

interface IHeaderNavMenuProps {
  extraClass?: string
}

const HeaderNavMenu = ({ extraClass = '', ...props }: IHeaderNavMenuProps) => (
  <ul className={styles.navBox}>
    {headerLinks.map((link) => (
      <li key={link.id} className={styles.navLink}>
        <NavLink className={({ isActive }) => `${styles.navItem} ${extraClass} ${styles[`${isActive ? 'active' : ''}`]}`} to={link.link} {...props}>
          {link.icon}
          <Text tag='p' weight='400' size='16' color='black'>{link.title}</Text>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default HeaderNavMenu;
