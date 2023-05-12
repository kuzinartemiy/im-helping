import { type FC } from 'react';
import styles from './modal-overlay.module.scss';

interface IOnClose {
  onClose: () => void
}

const ModalOverlay: FC<IOnClose> = ({ onClose }) => {
  return (
    <div className={`${styles.modalOverlay}`} onClick={onClose} />
  );
};

export default ModalOverlay;
