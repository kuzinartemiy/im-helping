import React from 'react';
import styles from './category-bar.module.scss';

interface ICategoryBarProps {
  children?: React.ReactNode
  bcColor: string
}

const CategoryBar = ({ children, bcColor = '#818C99' }: ICategoryBarProps): JSX.Element => (
  <>
    <div className={styles.categoryBar}>
      <svg fill="none" viewBox="0 0 216 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L215.091 7L197.273 25H0V0Z" fill={bcColor}/>
      </svg>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </>
);

export default CategoryBar;
