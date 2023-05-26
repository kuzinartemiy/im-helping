import { Button } from '@pbe/react-yandex-maps';
import { COLORS } from '../../../styles/colors';
import styles from './delete-popup.module.scss';
import Text from '../../common/text';

const DeletePopup = () => (
  <div className={styles.deletePopup}>
    <Text tag='h2' weight='700' size='16' color={COLORS.get('text-color-black')}>
      Вы точно хотите отменить заявку?
    </Text>
    <p className={styles.border} />
    <Button>{'Хочу'}</Button>
  </div>
);

export default DeletePopup;
