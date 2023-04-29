import { type SyntheticEvent, type DetailedHTMLProps } from 'react';
import styles from './write-admin-button.module.scss';
import Text from '../../text';
import CircleButton from '../../circle-button';
import { ReactComponent as ChatIcon } from '../../../assets/icons/message.svg';

interface IWriteAdminButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'visible' | 'invisible'
  onClick?: (() => void) | ((e: SyntheticEvent) => void)
}

const WriteAdminButton = ({ onClick, viewType = 'visible', ...props }: IWriteAdminButtonProps) => (
  <div className={styles.wrapper}>
    <button
      className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`}
      onClick={onClick}
      {...props}
    >
      <CircleButton size="small" extraClass={styles.сircleButton}>
        <ChatIcon className={styles.icon} />
      </CircleButton>
      <div className={styles.textWrapper}>
        <Text tag="p" weight="400" size="16" color="white">
          Написать администратору
        </Text>
      </div>
    </button>
  </div>
);

export default WriteAdminButton;
