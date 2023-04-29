import { type DetailedHTMLProps } from 'react';
import styles from './button.module.scss';

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'primary' | 'secondary'
  children?: React.ReactNode
}

const Button = ({ children, viewType = 'primary', ...props }: IButtonProps) => (
  <button
    className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
