import { COLORS } from '../../../styles/colors';
import styles from './category-bar.module.scss';

interface ICategoryBarProps {
  children?: React.ReactNode
  bgColor?: string
}

const CategoryBar = ({ children, bgColor = COLORS.get('bg-button-disabled') }: ICategoryBarProps) => (
  <div className={styles.categoryBar}>
    <svg fill="none" viewBox="0 0 216 25" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L215.091 7L197.273 25H0V0Z" fill={bgColor}/>
    </svg>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default CategoryBar;
