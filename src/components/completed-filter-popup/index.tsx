import styles from './completed-filter-popup.module.scss';
import { CoordsPopup } from '../coords-popup/coords-popup';
import Checkbox from '../checkbox';
import Button from '../button';
import { type IApplicationCard } from '../../utils/dataTypes';

interface ICompletedFilterPopup {
  title?: string
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  data: IApplicationCard[] //! данные о персоне, тип поменяется
  setSortData: React.Dispatch<React.SetStateAction<IApplicationCard[]>>
  styled: { right?: number, top?: number }
  marginRight: number // отступ от края экрана справа до места клика
  marginTop: number // отступ сверху в месте клика (согласно макета ничего не указано)
}

const CompletedFilterPopup: React.FC<ICompletedFilterPopup> = ({ title, setVisible, data, setSortData, styled, marginRight, marginTop }) => {
  // данные для отображения в попапе
  const checkboxes = [
    {
      id: 1,
      label: 'По дате',
    },
    {
      id: 2,
      label: 'По убывающей цене',
    },
    {
      id: 3,
      label: 'По возростающей цене',
    },
  ];

  const onSetFilter = () => {
    const modal = document.getElementById('modalsContainer');
    if (modal !== null) {
      const inputs = modal.querySelectorAll('input');
      if (inputs[0].checked) {
        const firstSort = data.sort((a, b) => b.date - a.date);
        if (inputs[1].checked) {
          setSortData(firstSort.sort((a, b) => Number(b.completedAppQuantity) - Number(a.completedAppQuantity)));
        }
        if (inputs[2].checked) {
          setSortData(firstSort.sort((a, b) => Number(a.completedAppQuantity) - Number(b.completedAppQuantity)));
        } else setSortData(firstSort);
      } else {
        if (inputs[1].checked) {
          setSortData(data.sort((a, b) => Number(b.completedAppQuantity) - Number(a.completedAppQuantity)));
        }
        if (inputs[2].checked) {
          setSortData(data.sort((a, b) => Number(a.completedAppQuantity) - Number(b.completedAppQuantity)));
        } else {
          setSortData(data);
        }
      }
      setVisible(false);
    }
  };

  return (
    <CoordsPopup
      pageX={styled?.right !== undefined ? (styled?.right - marginRight) : marginRight}
      pageY={styled?.top !== undefined ? (styled.top + marginTop) : marginTop}
      onOverlayClick={() => { setVisible(false); }}
    >
      <div className={styles.popup}>
        <h3 className={styles.popup__title}>{title ?? 'Отображать'}</h3>
        {checkboxes.map((item, index) =>
          <Checkbox key={index} id={String(item.id)} >
            <p>{item.label}</p>
          </Checkbox>,
        )}
        <Button onClick={onSetFilter}><p className={styles.popup__button}>Применить</p></Button>
      </div>
    </CoordsPopup>
  );
};

export default CompletedFilterPopup;
