import styles from './radio-button.module.scss';
import type { ChangeEventHandler, FC } from 'react';

interface IRadioButton {
  name: string;
  value: number;
  text: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  actualValue: string;
}

const RadioButton: FC<IRadioButton> = ({ name, value, text, onChange, actualValue }) => {
  return (
    <div className={`${styles.radioButton} ${`${value}` === actualValue ? styles.radioButton_selected : ''}`}>
      <label className={styles.radioLabel}>
        {text}
        <input type='radio' name={name} className={styles.radioInput} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default RadioButton;
