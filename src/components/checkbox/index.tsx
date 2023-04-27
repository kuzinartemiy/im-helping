import * as React from 'react';
import { type FC } from 'react';
import styles from '../checkbox/checkbox.module.scss';

interface ICheckboxProps {
  id?: string
  children?: React.ReactNode
  disabled?: boolean
  checked?: boolean
}

const Checkbox: FC<ICheckboxProps> = ({ children, id, ...props }) => {
  const [isdisabled] = React.useState(false);
  const [ischecked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!ischecked);
  };

  return (
    <label className={styles.checkbox_label} id={id}>
      <input
        type="checkbox"
        className={styles.checkbox_invisible}
        onChange={handleChange}
        disabled={isdisabled}
        checked={ischecked}
        {...props}
      />
      <span className={styles.checkbox_visible}></span>
      {children}
    </label>
  );
};

export default Checkbox;
