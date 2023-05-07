import type * as React from 'react';
import styles from '../checkbox/checkbox.module.scss';

export interface ICheckboxProps {
  id?: string
  children?: React.ReactNode
  isDisabled?: boolean
  isChecked?: boolean
  onChange?: () => void
}

const Checkbox: React.FC<ICheckboxProps> = ({ children, id, isDisabled = true, isChecked, onChange, ...props }) => {
  // const [isdisabled] = React.useState(false);
  // const [ischecked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked(!ischecked);
  // };

  return (
    <label className={styles.checkbox_label} id={id}>
      <input
        type="checkbox"
        className={styles.checkbox_invisible}
        onChange={onChange}
        disabled={isDisabled}
        checked={isChecked}
        {...props}
      />
      <span className={styles.checkbox_visible}></span>
      {children}
    </label>
  );
};

export default Checkbox;
