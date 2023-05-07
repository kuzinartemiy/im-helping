import styles from './circle-button.module.scss';

export interface ICircleButtonProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
  children?: React.ReactNode
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  border?: 'primary' | 'secondary'
  isDisabled?: boolean
}

const CircleButton: React.FC<ICircleButtonProps> = ({ children, isDisabled, size = 'small', border = 'primary                        ', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${size}`]} ${styles[`button__${border}`]}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
