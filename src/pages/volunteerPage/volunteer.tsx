import styles from './volunteer.module.scss';
import NavCards from '../../components/nav-cards';
import PersonVolunteer from '../../components/person-volunteer';
import TopPanel from '../../components/top-panel';
import { store } from '../../utils/application-card.constans';
import { personVolunteer } from '../../utils/person-voluteer.constants';
import ApplicationCards from '../../components/application-cards/application-cards';

const VolunteerPage = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <PersonVolunteer {...personVolunteer}></PersonVolunteer>
          <NavCards></NavCards>
        </section>
        <section>
          <TopPanel title="TEST" />
          <ApplicationCards cardData={store} size={'large'}></ApplicationCards>
          <div className={styles.opacity}></div>
        </section>
      </div>
    </>
  );
};

export default VolunteerPage;
