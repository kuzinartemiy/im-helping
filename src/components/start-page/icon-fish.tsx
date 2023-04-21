import React from 'react';
import icon from '../../assets/icons/filter.svg';
import styles from './start-page.module.scss';

// Заглушка

function IconFish() {
  return (
    <img src={icon} alt="Заглушка" className={styles.btnImage} />
  );
}

export default IconFish;
