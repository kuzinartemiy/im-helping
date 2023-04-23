// import React from 'react';
import styles from './nav-card.module.scss';

import { Card, data } from './card';

function NavCard() {
  return (
    <ul className={styles.linkCardContainer}>
      {data.map((item, index) => {
        return <Card text={item.text} icon={item.icon} key={index} path={item.path}/>;
      })}
    </ul>
  );
}

export default NavCard;
