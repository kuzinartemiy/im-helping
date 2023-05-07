import styles from './volunteerPage.module.scss';
import PersonVolunteer from '../../components/person-volunteer';
import { Outlet } from 'react-router-dom';
import { volunteerData } from './volunteerPage.constans';
import NavCard from '../../components/common/nav-card';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
import { useStore } from '../../services/store';

const VolunteerPage = () => {
  const owner = useStore((state) => state.owner);
  return (
      <main className={styles.volunteerPage}>
        <section>
          <PersonVolunteer {...owner}></PersonVolunteer>
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
