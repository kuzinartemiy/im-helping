import styles from './input.module.scss';

interface InputProps {
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  padding?: string;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  isError = false,
  errorMessage,
  padding = '12px 12px 12px 12px',
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={!isError ? `${styles.inputWrapper}` : `${styles.inputWrapper} ${styles.inputWrapper__invalid}`}>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
          style={{
            padding: `${padding}`,
          }}
        />
      </div>
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
