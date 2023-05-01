import styles from './active-applications.module.scss';
import ApplicationCards from '../../../components/application-cards/application-cards';
import TopPanel from '../../../components/top-panel';
import { store } from '../../../utils/application-card.constans';
import { ReactComponent as ActiveApplicationIcon } from '../../../assets/icons/active-applications.svg';
import AddApplication from '../../../components/circle-button/add-application/add-application';
import { COLORS } from '../../../styles/colors';
import Text from '../../../components/text';

const ActiveApplications = () => {
  return (
    <>
      <TopPanel titleIcon={ <ActiveApplicationIcon /> } title="Активные заявки" />
      <div className={styles.activeApplications__addAplicationContainer}>
        <AddApplication />
        <Text children={ 'Создать заявку' } size={ '24' } color={ COLORS.get('color-secondary') } />
      </div>
      <div className={styles.activeApplications__cardsContainer}>
        <ApplicationCards cardData={store}></ApplicationCards>
      </div>
      <div className={styles.activeApplications__opacity}></div>
    </>
  );
};

export default ActiveApplications;
