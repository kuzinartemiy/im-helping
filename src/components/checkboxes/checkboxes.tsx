import React, { /* useState, */ type FC } from 'react';
import styles from './checkboxes.module.scss';
import Checkbox from './checkbox/checkbox';

interface ICheckboxes {
  title: string
}

const Checkboxes: FC<ICheckboxes> = ({ title }) => {
  /* const [isDisabled] = useState(true); */

  return (
    <div className={styles.checkboxes}>
      <p className={styles.checkboxes__title}>{title}</p>
      <div className={styles.checkboxes__container}>
        <Checkbox
          id={'1'}
          labelText={'По дате'}
          /* disabled={isDisabled} */
        />
        <Checkbox
          id={'2'}
          labelText={'По убывающей цене'}
          /* disabled={isDisabled} */
        />
      </div>
    </div>
  );
};

export default Checkboxes;
