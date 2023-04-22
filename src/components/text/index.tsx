import React from 'react';
import styles from './text.module.scss';

interface ITextProps {
  children: React.ReactNode
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  weight: '400' | '700'
  size: '12' | '16' | '24'
}

const Text = ({ children, tag, weight, size }: ITextProps) => {
  switch (true) {
    case tag === 'h1':
      return <h1 className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</h1>;
    case tag === 'h2':
      return <h2 className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</h2>;
    case tag === 'h3':
      return <h3 className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</h3>;
    case tag === 'h4':
      return <h4 className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</h4>;
    case tag === 'h5':
      return <h5 className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</h5>;
    case tag === 'p':
      return <p className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</p>;
    default:
      return <p className={`${styles.text} ${styles[`text_size_${size}`]} ${styles[`text_weight_${weight}`]}`}>{children}</p>;
  }
};

export default Text;
