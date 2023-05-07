import { type SyntheticEvent, type DetailedHTMLProps } from 'react';
import styles from './service-button.module.scss';

interface IServiceButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'close' | 'edit' | 'approved'
  onClick?: (() => void) | ((e: SyntheticEvent) => void)
}

const ServiceButton = ({ onClick, viewType = 'close', ...props }: IServiceButtonProps) => (
  <button
  className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`} onClick={onClick}
  {...props}
>
</button>
);

export default ServiceButton;
