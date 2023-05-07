import { profileNavLinks } from './home-page.constants';
import styles from './home-page.module.scss';
import NavCards from '../../components/nav-cards';

const HomePage = () => (
  <section className={styles.homePage}>
    <NavCards cards={profileNavLinks} />
  </section>
);

export default HomePage;
