import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import WriteAdminButton from './write-admin-button';
import HeaderLinks from './header-links';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={styles.navLogo} to="/">
        <Logo />
      </NavLink>
      <HeaderLinks />
      <WriteAdminButton />
    </header>
  );
}
