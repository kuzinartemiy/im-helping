import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import WriteAdminButton from './write-admin-button';
import HeaderNavMenu from './header-nav-menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.navLogo} to='/'>
        <Logo />
      </Link>
      <HeaderNavMenu />
      <WriteAdminButton />
    </header>
  );
}
