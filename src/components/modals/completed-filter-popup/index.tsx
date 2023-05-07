import styles from './completed-filter-popup.module.scss';
// import { CoordsPopup } from '../coords-popup/coords-popup';
import Checkbox from '../../common/checkbox';
import Button from '../../common/button';

const CompletedFilterPopup = () => {
  return (
      <div className={styles.popup}>
        <h3 className={styles.popup__title}>{'Отображать'}</h3>
        <Checkbox id={'checkbox_1'} >
          <p>По дате</p>
        </Checkbox>
        <Checkbox id={'checkbox_2'} >
          <p>По убывающей цене</p>
        </Checkbox>
        <Checkbox id={'checkbox_3'} >
          <p>По возрастающей цене</p>
        </Checkbox>
        <div className={styles.popup__button}>
        <Button>{ 'Применить' }</Button></div>
      </div>
  );
};

export default CompletedFilterPopup;
