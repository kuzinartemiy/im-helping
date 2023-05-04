import Checkbox from '../checkbox';
import Text from '../text';
import styles from './recipient-filter-popup.module.scss';
import { COLORS } from '../../styles/colors';
import Button from '../button';
import { data } from './recipient-filter-popup.constants';

function RecipientFilterPopup() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <Text
          tag="h4"
          weight="700"
          size="12"
          color={COLORS.get('text-color-black')}
        >
          {'Отображать'}
        </Text>
        <p className={styles.border} />
        <div className={styles.category}>
          <Checkbox id={'1'}>{'По дате'}</Checkbox>
        </div>
      </div>
      <div className={styles.block}>
        <Text
          tag="h4"
          weight="700"
          size="12"
          color={COLORS.get('text-color-black')}
        >
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
      <div className={styles.btn}>
        <Button>{'Применить'}</Button>
      </div>
    </section>
  );
}

export default RecipientFilterPopup;
