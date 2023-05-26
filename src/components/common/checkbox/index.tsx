import styles from '../checkbox/checkbox.module.scss';
import { type DetailedHTMLProps, type InputHTMLAttributes, useState } from 'react';

export interface ICheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
}

const Checkbox = ({ children, id, disabled = false, checked = false, ...props }: ICheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <label className={styles.checkbox_label} id={id}>
      <input
        type='checkbox'
        className={styles.checkbox_invisible}
        onChange={() => setChecked(prev => !prev)}
        disabled={disabled}
        checked={isChecked}
        {...props}
      />
      <span className={styles.checkbox_visible} />
      {children}
    </label>
  );
};

export default Checkbox;
