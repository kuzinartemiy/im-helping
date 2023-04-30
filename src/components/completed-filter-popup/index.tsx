import styles from './completed-filter-popup.module.scss';
import { CoordsPopup } from '../coords-popup/coords-popup';
import Checkbox from '../checkbox';
import Button from '../button';

interface ICompletedFilterPopup {
  title?: string
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  styled: { right: number, top: number }
}

const CompletedFilterPopup: React.FC<ICompletedFilterPopup> = ({ title, setVisible, styled }) => {
  const onSetFilter = () => {
    console.log('данные об инпутах отправляются на сервер');
    setVisible(false);
  };

  return (
    <CoordsPopup
      pageX={styled.right}
      pageY={styled.top + 365}
      onOverlayClick={() => { setVisible(false); }}
    >
      <div className={styles.popup}>
        <h3 className={styles.popup__title}>{title ?? 'Отображать'}</h3>
        <Checkbox id={'checkbox_1'} >
          <p>По дате</p>
        </Checkbox>
        <Checkbox id={'checkbox_2'} >
          <p>По убывающей цене</p>
        </Checkbox>
        <Checkbox id={'checkbox_3'} >
          <p>По возростающей цене</p>
        </Checkbox>
        <Button onClick={onSetFilter}><p className={styles.popup__button}>Применить</p></Button>
      </div>
    </CoordsPopup>
  );
};

export default CompletedFilterPopup;
