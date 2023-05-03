import styles from './circle-button.module.scss';

interface ICircleButtonProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
  children?: React.ReactNode
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  border?: 'primary' | 'secondary'
}

const CircleButton: React.FC<ICircleButtonProps> = ({ children, size = 'small', border = 'primary', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${size}`]} ${styles[`border__${border}`]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
