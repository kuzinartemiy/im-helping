import type React from 'react';
import styles from './input.module.scss';

interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  error?: boolean
  errorMessage?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error = false,
  errorMessage,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
      {error && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
