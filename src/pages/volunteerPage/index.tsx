import styles from './volunteerPage.module.scss';
import PersonVolunteer from '../../components/person-volunteer';
import { personVolunteer } from '../../utils/person-voluteer.constants';
import { Outlet } from 'react-router-dom';
import { volunteerData } from './volunteerPage.constans';
import NavCard from '../../components/nav-card';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';

const VolunteerPage = () => {
  return (
      <main className={styles.volunteerPage}>
        <section>
          <PersonVolunteer {...personVolunteer}></PersonVolunteer>
          <ul className={navCardsStyles.linkCardContainer}>
          {volunteerData.map((item, index) => {
            return <li key={index} className={navCardsStyles.linkCard}>
              <NavCard text={item.text} icon={item.icon} path={item.path}/>
            </li>;
          })}
        </ul>
        </section>
        <section className={styles.volunteerPage__applications}>
        <Outlet />
        <div className={styles.volunteerPage__applications_opacity}></div>
      </section>
      </main>
  );
};

export default VolunteerPage;
