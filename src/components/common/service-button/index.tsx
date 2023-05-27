import { type SyntheticEvent, type DetailedHTMLProps } from 'react';
import styles from './service-button.module.scss';

export interface IServiceButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'close' | 'edit' | 'approved';
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  isDisabled?: boolean;
}

const ServiceButton = ({ onClick, viewType = 'close', isDisabled, ...props }: IServiceButtonProps) => (
  <button className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`} onClick={onClick} disabled={isDisabled} {...props}>
    <div className={`${styles.content} ${styles[`content_viewType_${viewType}`]}`}></div>
  </button>
);

export default ServiceButton;
