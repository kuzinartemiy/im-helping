import { type DetailedHTMLProps } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  viewType?: 'primary' | 'secondary'
  children?: React.ReactNode
  height?: string
  isDisabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button = ({
  children,
  viewType = 'primary',
  height = '30',
  size = 'large',
  isDisabled,
  ...props
}: IButtonProps) => (
  <button
    className={`${styles.button} ${styles[`button_viewType_${viewType}`]} ${styles[`button__${size}`]}`}
    style={{
      height: `${height}px`,
    }}
    disabled={isDisabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
