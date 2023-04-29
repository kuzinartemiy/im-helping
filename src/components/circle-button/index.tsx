import styles from './circle-button.module.scss';

interface ICircleButtonProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
  children?: React.ReactNode
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  extraClass?: string
}

const CircleButton: React.FC<ICircleButtonProps> = ({ children, size = 'small', extraClass = '', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${size}`]} ${extraClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
