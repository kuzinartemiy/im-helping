import styles from '../../components/nav-cards/nav-cards.module.scss';
import { ReactComponent as IconPopular } from '../../assets/icons/popular.svg';
import { ReactComponent as IconCategory } from '../../assets/icons/category.svg';

export const blogData = [
  {
    text: 'Популярное',
    icon: <IconPopular className={styles.colorIcon} />,
    path: 'popular',
  },
  {
    text: 'Категория',
    icon: <IconCategory className={styles.colorIcon} />,
    path: 'category',
  },
  {
    text: 'Категория',
    icon: <IconCategory className={styles.colorIcon} />,
    path: 'category',
  },
  {
    text: 'Категория',
    icon: <IconCategory className={styles.colorIcon} />,
    path: 'category',
  },
  {
    text: 'Категория',
    icon: <IconCategory className={styles.colorIcon} />,
    path: 'category',
  },
];
