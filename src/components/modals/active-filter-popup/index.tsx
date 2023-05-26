import Checkbox from '../../common/checkbox';
import RadiusSearch from '../../common/radius-search';
import Text from '../../common/text';
import styles from './active-filter-popup.module.scss';
import { COLORS } from '../../../styles/colors';
import Button from '../../common/button';
import { categories, sort } from './active-filter-popup.constants';

function ActiveFilterPopup() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          Отображать
        </Text>
        <p className={styles.border} />
        <ul className={styles.sort}>
          {sort?.map(item => (
            <li key={item.id}>
              <Checkbox id={item.id}>{item.name}</Checkbox>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          Категория
        </Text>
        <p className={styles.border} />
        <ul className={styles.category}>
          {categories?.map(item => (
            <li key={item.id}>
              <Checkbox id={item.id}>{item.name}</Checkbox>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>
          Радиус поиска
        </Text>
        <p className={styles.border} />
        <RadiusSearch />
      </div>
      <div className={styles.btn}>
        <Button>Применить</Button>
      </div>
    </section>
  );
}

export default ActiveFilterPopup;
