import styles from './empty-application-cards.module.scss';
import { COLORS } from '../../../styles/colors';
import { ReactComponent as ComplitedApplicationsIcon } from '../../../assets/icons/completed applications-grey.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/Vector 2.svg';
import Text from '../../text';
import { ReactComponent as Plus } from '../../../assets/icons/plus12.svg';
import CircleButton from '../../circle-button';

const EmptyApplicationsCards = () => {
  return (
    <div className={styles.emptyApplicationsCards}>
      <div className={styles.emptyApplicationsCards__info}>
        <ComplitedApplicationsIcon />
        <Text children={ 'У Вас пока нет заявок' } size={ '24' } color={ COLORS.get('color-secondary') } />
      </div>
      <div className={styles.emptyApplicationsCards__info}>
        <Text children={ 'Хотите создать заявку?' } size={ '24' } color={ COLORS.get('color-primary') } />
        <div className={styles.emptyApplicationsCards__button}>
          <div><CircleButton size={ 'large' }><Plus/></CircleButton></div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default EmptyApplicationsCards;
