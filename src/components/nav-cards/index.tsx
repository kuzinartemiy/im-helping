import styles from './nav-cards.module.scss';
import NavCard from '../common/nav-card';
import type { INavCard } from '../common/nav-card';

interface INavCardsProps {
  cards: INavCard[];
}

const NavCards = ({ cards }: INavCardsProps) => (
  <ul className={styles.linkCardContainer}>
    {cards.map((item, index) => (
      <li key={index} className={styles.linkCard}>
        <NavCard text={item.text} icon={item.icon} path={item.path} />
      </li>
    ))}
  </ul>
);

export default NavCards;
