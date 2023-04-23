import React, { useState } from 'react';
import styles from './textarea.module.scss';

interface TextareaProps {
  label?: string
  placeholder?: string
  rows?: number
  maxLength?: number
}

const Textarea: React.FC<TextareaProps> = ({
  label = 'Текстовое поле',
  rows = 6,
  placeholder = 'Введите ваш текст...',
  maxLength = 300,
}) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const remainingChars = maxLength - text.length;

  return (
    <div className={styles.textareaContainer}>
      <label className={styles.label} htmlFor="myTextarea">{label}</label>
      <div className={styles.textareaWrapper}>
        <textarea
          id="myTextarea"
          value={text}
          onChange={handleChange}
          rows={rows}
          maxLength={maxLength}
          placeholder={placeholder}
          className={styles.textarea}
        />
        <div className={styles.charsCounter}>
          {remainingChars} знаков
        </div>
      </div>
    </div>
  );
};

export default Textarea;
