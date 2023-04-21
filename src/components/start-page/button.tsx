import React from 'react';
import styles from './start-page.module.scss';

// Заглушка

interface INameBtn {
  text: string
  icon: any
}

function Button(props: INameBtn) {
  return (
    <>
      <button className={styles.btn} >
        {props.icon}
        {props.text}
      </button >
    </>
  );
}

export default Button;
