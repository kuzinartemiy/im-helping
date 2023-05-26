import Checkbox from '../../common/checkbox';
import RadiusSearch from '../../common/radius-search';
import CustomDatePicker from '../../common/datepicker';
import Text from '../../common/text';
import styles from './map-filter-popup.module.scss';
import { COLORS } from '../../../styles/colors';
import Button from '../../common/button';
import { data } from './map-filter-popup.constants';
import { DatePickerTypes } from '../../../types';

function MapFilterPopup() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          {'Категория'}
        </Text>
        <p className={styles.border} />
        <ul className={styles.category}>
          {data?.map((item, index: number) => {
            if (index > 5) {
              return false;
            }
            return (
              <li key={index}>
                <Checkbox id={item.id}>{item.name}</Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          {'Радиус поиска'}
        </Text>
        <p className={styles.border} />
        <RadiusSearch />
      </div>
      <div>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          {'Дата и время'}
        </Text>
        <p className={styles.border} />
        <div className={styles.datePicker}>
          <CustomDatePicker type={DatePickerTypes.Time}>{'Время'}</CustomDatePicker>
        </div>
        <div className={styles.datePicker}>
          <CustomDatePicker type={DatePickerTypes.Date}>{'Дата'}</CustomDatePicker>
        </div>
      </div>
      <div className={styles.btn}>
        <Button>{'Применить'}</Button>
      </div>
    </section>
  );
}

export default MapFilterPopup;
