import styles from './nav-cards.module.scss';
import NavCard from '../common/nav-card';
import type { ICard } from '../common/nav-card';

function NavCards(props: { data: ICard[] }) {
  return (
    <ul className={styles.linkCardContainer}>
      {props.data.map((item, index) => {
        return <li key={index} className={styles.linkCard}>
          <NavCard text={item.text} icon={item.icon} path={item.path}/>
        </li>;
      })}
    </ul>
  );
}

export default NavCards;
