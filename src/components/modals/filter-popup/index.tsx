import { type FC, useEffect, useCallback } from 'react';
import styles from './filter-popup.module.scss';
import ModalOverlay from '../../common/modal/modal-overlay';

interface IFilterPopup {
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const FilterPopup: FC<IFilterPopup> = ({ onClose, children }) => {
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

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.tooltip}></div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>
  );
};

export default FilterPopup;
