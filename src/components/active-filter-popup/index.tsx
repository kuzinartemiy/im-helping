import Checkbox from '../checkbox';
import RadiusSearch from '../radius-search';
import Text from '../text';
import styles from './active-filter-popup.module.scss';
import { COLORS } from '../../styles/colors';
import Button from '../button';
import { categories, sort } from './active-filter-popup.constants';

function ActiveFilterPopup() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>{'Отображать'}</Text>
        <p className={styles.border} />
        <ul className={styles.sort}>
          {sort?.map((item, index: number) => {
            if (index > 2) {
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
        <Text tag='h4' weight='700' size='12' color={COLORS.get('text-color-black')}>{'Категория'}</Text>
        <p className={styles.border} />
        <ul className={styles.category}>
          {categories?.map((item, index: number) => {
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
      <div className={styles.btn}>
        <Button>{'Применить'}</Button>
      </div>
    </section>
  );
}

export default ActiveFilterPopup;
