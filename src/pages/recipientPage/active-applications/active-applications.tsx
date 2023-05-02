import styles from './active-applications.module.scss';
import ApplicationCards from '../../../components/application-cards/application-cards';
import TopPanel from '../../../components/top-panel';
import { store } from '../../../utils/application-card.constans';
import { ReactComponent as ActiveApplicationIcon } from '../../../assets/icons/active-applications.svg';
import { COLORS } from '../../../styles/colors';
import Text from '../../../components/text';
import { ReactComponent as Plus } from '../../../assets/icons/plus12.svg';
import CircleButton from '../../../components/circle-button';

const ActiveApplications = () => {
  return (
    <>
      <TopPanel titleIcon={ <ActiveApplicationIcon /> } title="Активные заявки" />
      <div className={styles.activeApplications__addAplicationContainer}>
        <CircleButton><Plus/></CircleButton>
        <Text children={ 'Создать заявку' } size={ '24' } color={ COLORS.get('color-secondary') } />
      </div>
        <ApplicationCards cardData={store} size={'small'}></ApplicationCards>
    </>
  );
};

export default ActiveApplications;
