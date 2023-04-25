import styles from './circle-button.module.scss';

interface ICircleButtonProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
  children?: React.ReactNode
  onClick: () => void
  size: 'small' | 'large'
}

const CircleButton: React.FC<ICircleButtonProps> = ({ children, onClick, size = 'small', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${size}`]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
