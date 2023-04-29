import ReactDOM from 'react-dom';
import { type FC, useCallback, useEffect } from 'react';
import styles from './modal.module.scss';
import ServiceButton from '../service-button';
import ModalOverlay from '../modal-overlay';

const modalRoot = document.getElementById('root') as HTMLElement;

interface IModal {
  title?: string
  onClose: () => void
  children?: React.ReactNode
}

const Modal: FC<IModal> = ({ onClose, children }) => {
  const onEscDown = useCallback(
    (e: { key: string }) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscDown);
    return () => {
      document.removeEventListener('keydown', onEscDown);
    };
  }, [onEscDown]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalCloseButton}>
            <ServiceButton viewType="close" onClick={onClose} />
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot,
  );
};

export default Modal;
