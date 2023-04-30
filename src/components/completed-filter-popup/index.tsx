import styles from './completed-filter-popup.module.scss';
import { CoordsPopup } from '../coords-popup/coords-popup';
import Checkbox from '../checkbox';
import Button from '../button';

interface ICompletedFilterPopup {
  title?: string
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  styled: { right?: number, top?: number }
  marginRight: number // отступ от края экрана справа до места клика
  marginTop: number // отступ сверху в месте клика (согласно макета ничего не указано)
}

const CompletedFilterPopup: React.FC<ICompletedFilterPopup> = ({ title, setVisible, styled, marginRight, marginTop }) => {
  const onSetFilter = () => {
    console.log('данные об инпутах отправляются на сервер');
    setVisible(false);
  };

  return (
    <CoordsPopup
      pageX={styled?.right !== undefined ? (styled?.right - marginRight) : marginRight}
      pageY={styled?.top !== undefined ? (styled.top + marginTop) : marginTop}
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
