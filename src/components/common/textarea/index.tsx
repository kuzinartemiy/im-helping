import type React from 'react';
import styles from './textarea.module.scss';

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  placeholder?: string
  rows?: number
  maxLength?: number
  value?: string
}

const Textarea: React.FC<TextareaProps> = ({
  label = 'Текстовое поле',
  rows = 6,
  placeholder = 'Введите ваш текст...',
  maxLength = 300,
  value = '',
  ...props
}) => {
  const remainingChars = maxLength - value.length;

  return (
    <div className={styles.textareaContainer}>
      <label
        className={styles.label}
        htmlFor='myTextarea'
      >
        {label}
      </label>
      <div className={styles.textareaWrapper}>
        <textarea
          id='myTextarea'
          rows={rows}
          maxLength={maxLength}
          placeholder={placeholder}
          className={styles.textarea}
          {...props}
        />
        <div className={styles.charsCounter}>{remainingChars} знаков</div>
      </div>
    </div>
  );
};

export default Textarea;
