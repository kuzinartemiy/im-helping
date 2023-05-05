import styles from '../../components/nav-cards/nav-cards.module.scss';
import { ReactComponent as IconPopular } from '../../assets/icons/popular.svg';

export const blogData = [{
  text: 'Популярное',
  icon: <IconPopular className={styles.colorIcon}/>,
  path: 'popular',
}, {
  text: 'Категория',
  icon: <IconPopular className={styles.colorIcon}/>,
  path: 'category',
}];
