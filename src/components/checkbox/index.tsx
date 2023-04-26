import { type FC } from 'react';
import styles from '../checkbox/checkbox.module.scss';

interface ICheckboxProps {
  id: string
  viewType?: 'active' | 'disabled'
  children?: React.ReactNode
  disabled: boolean
}

const Checkbox: FC<ICheckboxProps> = ({ children, id, disabled, ...props }) => {
  return (
    <label className={styles.checkbox_label} id={id}>
      <input
        type="checkbox" className={styles.checkbox_invisible} /* disabled  *//* checked */ {...props}
      />
      <span className={styles.checkbox_visible}></span>
      {children}
    </label>
  );
};

export default Checkbox;
