import React, { type FC, useState } from 'react';
import styles from '../checkbox/checkbox.module.scss';

interface ICheckboxProps {
  id: string
  labelText: string
  /* disabled: boolean */
}

const Checkbox: FC<ICheckboxProps> = ({ id, labelText }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled] = useState(false);

  return (
      <label className={styles.checkbox__container} id={id}>
        <input type='checkbox' disabled={isDisabled} onChange={() => {
          setIsChecked(!isChecked);
        }}
        />
        {
          isChecked
            ? <svg className={styles.checkbox__active} aria-hidden='true' viewBox='0 0 15 11' fill='none'>
              <path d='M1 4.5L5 9L14 1' strokeWidth='2' stroke={isChecked ? '#fff' : 'none'} />
            </svg>
            : <svg className={styles.checkbox} aria-hidden='true' viewBox='0 0 15 11' fill='none'>
              <path d='M1 4.5L5 9L14 1' strokeWidth='2' stroke={isChecked ? '#fff' : 'none'} />
            </svg>
        }
        {labelText}
      </label>
  );
};

export default Checkbox;
