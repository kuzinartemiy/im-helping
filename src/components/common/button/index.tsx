import { type DetailedHTMLProps } from 'react';
import styles from './button.module.scss';

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'primary' | 'secondary'
  children?: React.ReactNode
  width?: string
  height?: string
}

const Button = ({ children, viewType = 'primary', width = '146', height = '30', ...props }: IButtonProps) => (
  <button
    className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }} {...props}
  >
    {children}
  </button>
);

export default Button;
