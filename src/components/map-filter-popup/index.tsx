
import Checkbox from '../checkbox';
import RadiusSearch from '../radius-search';
import DatePickerProd from '../datepicker_prod';
import Text from '../text';
import styles from './map-filter-popup.module.scss';
import { COLORS } from '../../styles/colors';
import Button from '../button';
import { data } from './map-filter-popup.constants';

function MapFilterPopup() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>{'Категория'}</Text>
        <p className={styles.border} />
        <ul className={styles.category}>
          {data?.map((item, index: number) => {
            if (index > 5) {
              return false;
            }
            return <li key={index}>
              <Checkbox id={item.id}>
                {item.name}
              </Checkbox>
            </li>;
          })}
        </ul>
      </div>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>{'Радиус поиска'}</Text>
        <p className={styles.border} />
        <RadiusSearch />
      </div>
      <div>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>{'Дата и время'}</Text>
        <p className={styles.border} />
        <div className={styles.datePicker}>
          <DatePickerProd type={'time'} >{'Время'}</DatePickerProd>
        </div>
        <div className={styles.datePicker}>
          <DatePickerProd type={'data'} >{'Дата'}</DatePickerProd>
        </div>
      </div>
      <div className={styles.btn}>
        <Button>{'Применить'}</Button>
      </div>
    </section>
  );
}

export default MapFilterPopup;
