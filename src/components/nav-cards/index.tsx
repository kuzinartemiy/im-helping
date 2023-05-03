import styles from './nav-cards.module.scss';
import NavCard from '../nav-card';
import { data } from './nav-cards.constants';

function NavCards() {
  return (
    <ul className={styles.linkCardContainer}>
      {data.map((item, index) => {
        return <li key={index} className={styles.linkCard}>
          <NavCard text={item.text} icon={item.icon} path={item.path}/>
        </li>;
      })}
    </ul>
  );
}

export default NavCards;
