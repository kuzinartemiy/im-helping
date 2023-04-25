import styles from './circle-button.module.scss';
import { useEffect, useState } from 'react';

interface ICircleButtonProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
  backgroundColor?: string
  backgroundColorPressed: string
  children?: React.ReactNode
  onClick: () => void
  size: 'small' | 'large'
}

const CircleButton: React.FC<ICircleButtonProps> = ({ backgroundColor, children, onClick, backgroundColorPressed, size = 'small', ...props }) => {
  const [pressed, setPressed] = useState<string>(backgroundColor ?? 'var(--color-primary)');
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setPressed(backgroundColorPressed ?? 'var(--bg-button-wave)');
    } else {
      setPressed(backgroundColor ?? 'var(--color-primary)');
    }
  });

  return (
    <button
      className={`${styles.button} ${styles[`button__${size}`]}`}
      style={{ backgroundColor: pressed }}
      onClick={() => {
        onClick();
        setIsActive(!isActive);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
