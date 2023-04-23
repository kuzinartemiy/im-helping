import styles from './circle-button.module.scss';
import { useEffect, useState } from 'react';

interface ICircleButtonProps {
  isPrimary?: boolean
  backgroundColor?: string
  backgroundColorHover?: string
  backgroundColorPressed: string
  disabled?: boolean
  children?: React.ReactNode
  onClick: () => void
}

const CircleButton: React.FC<ICircleButtonProps> = ({ isPrimary, backgroundColor, backgroundColorHover, disabled, children, onClick, backgroundColorPressed }) => {
  const [hover, setHover] = useState<string>(backgroundColor ?? 'var(--color-primary)');
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setHover(backgroundColorPressed ?? 'var(--bg-button-wave)');
    }
  });

  return (
    <button
      className={`${styles.button} ${isPrimary !== undefined ? styles.button__primary : styles.button__secondary}`}
      style={{ backgroundColor: !(disabled ?? false) ? hover : 'var(--bg-button-disabled)' }}
      disabled={disabled ?? false}
      onMouseOver={() => { setHover(backgroundColorHover ?? 'var(--bg-button-wave)'); }}
      onMouseLeave={() => { setHover(backgroundColor ?? 'var(--color-primary)'); }}
      onClick={() => {
        onClick();
        setIsActive(!isActive);
      }}
    >
      {children}
    </button>
  );
};

export default CircleButton;
