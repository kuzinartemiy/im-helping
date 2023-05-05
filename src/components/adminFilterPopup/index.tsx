import styles from './adminFilterPopup.module.scss';
import { COLORS } from '../../styles/colors';
import Checkbox from '../checkbox';
import Text from '../text';
import Button from '../button';

interface IAdminFilterPopup {
  onClick: () => void
}

const AdminFilterPopup: React.FC<IAdminFilterPopup> = ({ onClick }) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Text
            tag='h4'
            weight='700'
            size='12'
            color={COLORS.get('text-color-black')}
          >
            {'Категория'}
          </Text>
          <div className={styles.line}></div>
          <div className={styles.checkBoxContainer}>
            <Checkbox />
            <span className={styles.span}>Все</span>
          </div>
          <div className={styles.checkBoxContainer}>
            <Checkbox />
            <span className={styles.span}>Волонтеры</span>
          </div>
          <div className={styles.checkBoxContainer}>
            <Checkbox />
            <span className={styles.span}>Реципиенты</span>
          </div>
          <div className={styles.checkBoxContainer}>
            <Checkbox />
            <span className={styles.span}>Не обработанные</span>
          </div>
        </div>
        <div className={styles.button}>
          <Button onClick={onClick}>{'Применить'}</Button>
        </div>
      </div>
  );
};

export default AdminFilterPopup;
