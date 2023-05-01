import styles from './complited-applications.module.scss';
import ApplicationCards from '../../../components/application-cards/application-cards';
import TopPanel from '../../../components/top-panel';
import { store } from '../../../utils/application-card.constans';
import { ReactComponent as ComplitedApplicationsIcon } from '../../../assets/icons/completed-applications.svg';

const ComplitedApplications = () => {
  return (
    <>
      <TopPanel titleIcon={ <ComplitedApplicationsIcon /> } title="Завершенные заявки" />
      <div className={styles.complitedApplications__cardsContainer}>
        <ApplicationCards cardData={store}></ApplicationCards>
      </div>
      <div className={styles.complitedApplications__opacity}></div>
    </>
  );
};

export default ComplitedApplications;
