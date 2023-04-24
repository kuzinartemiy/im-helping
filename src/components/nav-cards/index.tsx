import styles from './nav-cards.module.scss';

import NavCard, { data } from '../nav-card';

function NavCards() {
  return (
    <ul className={styles.linkCardContainer}>
      {data.map((item, index) => {
        return <NavCard text={item.text} icon={item.icon} key={index} path={item.path}/>;
      })}
    </ul>
  );
}

export default NavCards;
